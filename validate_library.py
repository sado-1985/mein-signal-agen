#!/usr/bin/env python3
"""
Validiert die Prompt-Bibliothek auf Konsistenz und Vollständigkeit
"""
import json
import re
from collections import Counter

def validate_prompt_library(filepath):
    """Validiert die Prompt-Bibliothek"""
    print("=" * 60)
    print("VALIDIERUNG DER PROMPT-BIBLIOTHEK")
    print("=" * 60)

    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    errors = []
    warnings = []

    # 1. Metadata-Prüfung
    print("\n1. METADATA-PRÜFUNG")
    print("-" * 60)
    metadata = data.get('metadata', {})
    print(f"Name: {metadata.get('name')}")
    print(f"Version: {metadata.get('version')}")
    print(f"Beschreibung: {metadata.get('description')}")
    print(f"Sprache: {metadata.get('language')}")
    print(f"Erstellt: {metadata.get('created')}")
    print(f"Anzahl Prompts (Metadata): {metadata.get('total_prompts')}")
    print(f"Kategorien: {len(metadata.get('categories', []))}")

    # 2. Prompts zählen
    print("\n2. PROMPTS-ZÄHLUNG")
    print("-" * 60)
    prompts = data.get('prompts', [])
    actual_count = len(prompts)
    expected_count = metadata.get('total_prompts', 0)
    print(f"Tatsächliche Anzahl Prompts: {actual_count}")
    print(f"Erwartete Anzahl (Metadata): {expected_count}")

    if actual_count != expected_count:
        errors.append(f"Anzahl stimmt nicht überein: {actual_count} != {expected_count}")
    else:
        print("✓ Anzahl stimmt überein")

    if actual_count >= 100:
        print(f"✓ Mindestens 100 Prompts vorhanden ({actual_count})")
    else:
        errors.append(f"Weniger als 100 Prompts: {actual_count}")

    # 3. ID-Eindeutigkeit
    print("\n3. ID-EINDEUTIGKEIT")
    print("-" * 60)
    ids = [p.get('id') for p in prompts]
    duplicate_ids = [id for id, count in Counter(ids).items() if count > 1]

    if duplicate_ids:
        errors.append(f"Doppelte IDs gefunden: {duplicate_ids}")
    else:
        print(f"✓ Alle {len(ids)} IDs sind eindeutig")

    # 4. Kategorien-Prüfung
    print("\n4. KATEGORIEN-VERTEILUNG")
    print("-" * 60)
    categories = [p.get('category') for p in prompts]
    category_counts = Counter(categories)
    defined_categories = set(metadata.get('categories', []))
    used_categories = set(categories)

    for cat, count in sorted(category_counts.items()):
        print(f"  {cat}: {count} Prompts")

    # Prüfe ob alle verwendeten Kategorien definiert sind
    undefined = used_categories - defined_categories
    if undefined:
        warnings.append(f"Nicht definierte Kategorien verwendet: {undefined}")

    unused = defined_categories - used_categories
    if unused:
        warnings.append(f"Definierte aber nicht verwendete Kategorien: {unused}")

    # 5. Feldvollständigkeit
    print("\n5. FELDVOLLSTÄNDIGKEIT")
    print("-" * 60)
    required_fields = ['id', 'category', 'name', 'description', 'template', 'variables', 'output_format', 'priority', 'tags']

    incomplete_prompts = []
    for i, prompt in enumerate(prompts):
        missing_fields = [field for field in required_fields if field not in prompt]
        if missing_fields:
            incomplete_prompts.append((prompt.get('id', f'Index {i}'), missing_fields))

    if incomplete_prompts:
        for prompt_id, missing in incomplete_prompts[:5]:  # Zeige erste 5
            errors.append(f"Prompt {prompt_id} fehlen Felder: {missing}")
    else:
        print(f"✓ Alle Prompts haben alle erforderlichen Felder")

    # 6. Template-Variable-Konsistenz
    print("\n6. TEMPLATE-VARIABLE-KONSISTENZ")
    print("-" * 60)
    inconsistent = []

    for prompt in prompts:
        template = prompt.get('template', '')
        variables = set(prompt.get('variables', []))

        # Extrahiere Variablen aus Template
        template_vars = set(re.findall(r'\{(\w+)\}', template))

        if template_vars != variables:
            missing_in_list = template_vars - variables
            extra_in_list = variables - template_vars
            inconsistent.append({
                'id': prompt.get('id'),
                'missing': missing_in_list,
                'extra': extra_in_list
            })

    if inconsistent:
        for issue in inconsistent[:5]:  # Zeige erste 5
            warnings.append(f"Prompt {issue['id']}: Template-Variable-Mismatch")
            if issue['missing']:
                warnings.append(f"  -> Im Template aber nicht in Variables: {issue['missing']}")
            if issue['extra']:
                warnings.append(f"  -> In Variables aber nicht im Template: {issue['extra']}")
    else:
        print(f"✓ Alle Templates und Variables sind konsistent")

    # 7. Priority-Verteilung
    print("\n7. PRIORITY-VERTEILUNG")
    print("-" * 60)
    priorities = Counter([p.get('priority') for p in prompts])
    for priority, count in sorted(priorities.items()):
        print(f"  {priority}: {count} Prompts")

    # 8. Output-Format-Verteilung
    print("\n8. OUTPUT-FORMAT-VERTEILUNG")
    print("-" * 60)
    output_formats = Counter([p.get('output_format') for p in prompts])
    for fmt, count in sorted(output_formats.items()):
        print(f"  {fmt}: {count} Prompts")

    # 9. Tag-Analyse
    print("\n9. TAG-ANALYSE")
    print("-" * 60)
    all_tags = []
    for p in prompts:
        all_tags.extend(p.get('tags', []))

    unique_tags = len(set(all_tags))
    total_tags = len(all_tags)
    print(f"Gesamtanzahl Tags: {total_tags}")
    print(f"Einzigartige Tags: {unique_tags}")
    print(f"Durchschnittliche Tags pro Prompt: {total_tags / len(prompts):.1f}")

    # Zusammenfassung
    print("\n" + "=" * 60)
    print("ZUSAMMENFASSUNG")
    print("=" * 60)

    if not errors and not warnings:
        print("✓ ✓ ✓ ALLE PRÜFUNGEN BESTANDEN ✓ ✓ ✓")
        print(f"\nDie Prompt-Bibliothek ist vollständig und konsistent!")
        print(f"  • {actual_count} Prompts")
        print(f"  • {len(defined_categories)} Kategorien")
        print(f"  • {unique_tags} einzigartige Tags")
        return True
    else:
        if errors:
            print(f"\n❌ FEHLER ({len(errors)}):")
            for error in errors:
                print(f"  - {error}")

        if warnings:
            print(f"\n⚠ WARNUNGEN ({len(warnings)}):")
            for warning in warnings[:10]:  # Zeige erste 10
                print(f"  - {warning}")
            if len(warnings) > 10:
                print(f"  ... und {len(warnings) - 10} weitere")

        return False

if __name__ == "__main__":
    success = validate_prompt_library("/home/user/mein-signal-agen/data/prompt_library.json")
    exit(0 if success else 1)
