# Signal Agent Prompt Library

**Version:** 1.0.0  
**Sprache:** de  
**Erstellt:** 2025-11-14  
**Anzahl Prompts:** 100

## Beschreibung

Umfassende Prompt-Bibliothek für Signal-Agenten mit 100+ Templates

## Inhaltsverzeichnis

### Kategorien

1. [Automation](#automation) (10 Prompts)
2. [Communication](#communication) (5 Prompts)
3. [Data Processing](#data-processing) (10 Prompts)
4. [Machine Learning](#machine-learning) (10 Prompts)
5. [Market Research](#market-research) (10 Prompts)
6. [Portfolio Management](#portfolio-management) (10 Prompts)
7. [Reporting](#reporting) (5 Prompts)
8. [Risk Management](#risk-management) (10 Prompts)
9. [Sentiment Analysis](#sentiment-analysis) (5 Prompts)
10. [Signal Analysis](#signal-analysis) (5 Prompts)
11. [Technical Analysis](#technical-analysis) (10 Prompts)
12. [Trading Strategies](#trading-strategies) (10 Prompts)

## Statistiken

| Kategorie | Anzahl Prompts |
|-----------|----------------|
| Automation | 10 |
| Communication | 5 |
| Data Processing | 10 |
| Machine Learning | 10 |
| Market Research | 10 |
| Portfolio Management | 10 |
| Reporting | 5 |
| Risk Management | 10 |
| Sentiment Analysis | 5 |
| Signal Analysis | 5 |
| Technical Analysis | 10 |
| Trading Strategies | 10 |

### Priority-Verteilung

| Priority | Anzahl |
|----------|--------|
| High | 42 |
| Medium | 58 |

---

## Prompts nach Kategorien

### Automation

*10 Prompts*

#### AU001: Auto-Trading-Regel

**Beschreibung:** Definiert automatische Trading-Regel

**Priority:** high  
**Output-Format:** structured  
**Tags:** automation, trading, rule

**Template:**
```
Erstelle Auto-Trading-Regel: Bedingung ({condition}), Aktion ({action}), Symbol ({symbol}), Positionsgröße ({position_size}), Stop-Loss ({stop_loss}), Take-Profit ({take_profit}). Aktivierung: {activation}.
```

**Variablen:**
- `condition`
- `action`
- `symbol`
- `position_size`
- `stop_loss`
- `take_profit`
- `activation`

---

#### AU002: Batch-Datenverarbeitung

**Beschreibung:** Automatisiert Batch-Datenverarbeitung

**Priority:** medium  
**Output-Format:** status  
**Tags:** automation, batch, processing

**Template:**
```
Führe Batch-Verarbeitung aus für: Datenquelle ({data_source}), Symbole ({symbols}), Zeitraum ({period}), Verarbeitungsschritte ({steps}), Output ({output_destination}).
```

**Variablen:**
- `data_source`
- `symbols`
- `period`
- `steps`
- `output_destination`

---

#### AU003: Scheduled-Report-Generator

**Beschreibung:** Automatisiert Report-Generierung

**Priority:** medium  
**Output-Format:** status  
**Tags:** automation, reporting, scheduling

**Template:**
```
Erstelle geplanten Report: Typ ({report_type}), Frequenz ({frequency}), Zeitpunkt ({schedule_time}), Empfänger ({recipients}), Format ({format}).
```

**Variablen:**
- `report_type`
- `frequency`
- `schedule_time`
- `recipients`
- `format`

---

#### AU004: Alert-Trigger-System

**Beschreibung:** Automatisiert Alert-System

**Priority:** high  
**Output-Format:** status  
**Tags:** automation, alert, trigger

**Template:**
```
Konfiguriere Alert-Trigger: Bedingung ({trigger_condition}), Schwelle ({threshold}), Symbol/Portfolio ({target}), Alert-Typ ({alert_type}), Empfänger ({recipients}), Frequenz ({frequency}).
```

**Variablen:**
- `trigger_condition`
- `threshold`
- `target`
- `alert_type`
- `recipients`
- `frequency`

---

#### AU005: Portfolio-Rebalancing-Auto

**Beschreibung:** Automatisiert Portfolio-Rebalancing

**Priority:** medium  
**Output-Format:** status  
**Tags:** automation, portfolio, rebalancing

**Template:**
```
Automatisiere Rebalancing für Portfolio {portfolio_id}: Ziel-Allokation ({target_allocation}), Rebalancing-Frequenz ({frequency}), Schwelle ({threshold}%), Berücksichtige Transaktionskosten: {consider_costs}.
```

**Variablen:**
- `portfolio_id`
- `target_allocation`
- `frequency`
- `threshold`
- `consider_costs`

---

#### AU006: Market-Scanner-Automation

**Beschreibung:** Automatisiert Market-Scanning

**Priority:** medium  
**Output-Format:** status  
**Tags:** automation, scanner, market

**Template:**
```
Automatisiere Market-Scanner: Universum ({universe}), Scan-Kriterien ({scan_criteria}), Frequenz ({frequency}), Filter ({filters}), Output-Aktion ({output_action}: Alert, Report, Auto-Trade).
```

**Variablen:**
- `universe`
- `scan_criteria`
- `frequency`
- `filters`
- `output_action`

---

#### AU007: Data-Pipeline-Automation

**Beschreibung:** Automatisiert Daten-Pipeline

**Priority:** medium  
**Output-Format:** status  
**Tags:** automation, pipeline, data

**Template:**
```
Erstelle Daten-Pipeline: Quellen ({sources}), Transformations-Steps ({transformations}), Validierung ({validation}), Ziel ({destination}), Schedule ({schedule}), Error-Handling ({error_handling}).
```

**Variablen:**
- `sources`
- `transformations`
- `validation`
- `destination`
- `schedule`
- `error_handling`

---

#### AU008: Auto-Hedging-System

**Beschreibung:** Automatisiert Hedging-Strategien

**Priority:** high  
**Output-Format:** status  
**Tags:** automation, hedging, risk

**Template:**
```
Automatisiere Hedging für Portfolio {portfolio_id}: Hedging-Trigger ({trigger}), Hedge-Instrumente ({instruments}), Hedge-Ratio ({ratio}), Rebalancing-Frequenz ({frequency}), Kosten-Limit ({cost_limit}).
```

**Variablen:**
- `portfolio_id`
- `trigger`
- `instruments`
- `ratio`
- `frequency`
- `cost_limit`

---

#### AU009: Order-Execution-Automation

**Beschreibung:** Automatisiert Order-Execution

**Priority:** high  
**Output-Format:** status  
**Tags:** automation, execution, orders

**Template:**
```
Automatisiere Order-Execution: Order-Typ ({order_type}), Execution-Algorithmus ({algo}: TWAP, VWAP, Iceberg), Slippage-Limit ({slippage_limit}), Time-in-Force ({tif}), Smart-Routing: {smart_routing}.
```

**Variablen:**
- `order_type`
- `algo`
- `slippage_limit`
- `tif`
- `smart_routing`

---

#### AU010: Compliance-Check-Automation

**Beschreibung:** Automatisiert Compliance-Prüfungen

**Priority:** high  
**Output-Format:** status  
**Tags:** automation, compliance, regulatory

**Template:**
```
Automatisiere Compliance-Checks: Regeln ({rules}), Check-Frequenz ({frequency}), Scope ({scope}), Auto-Block bei Verstoß: {auto_block}, Notification ({notification}), Audit-Log: {audit_log}.
```

**Variablen:**
- `rules`
- `frequency`
- `scope`
- `auto_block`
- `notification`
- `audit_log`

---

### Communication

*5 Prompts*

#### CM001: Trading-Alert generieren

**Beschreibung:** Generiert Trading-Alerts

**Priority:** high  
**Output-Format:** text  
**Tags:** communication, alert, notification

**Template:**
```
Generiere Alert für Event: {event_type}. Details: {event_details}. Dringlichkeit: {urgency}. Empfohlene Aktion: {action}. Format: {format} (Email, SMS, Push).
```

**Variablen:**
- `event_type`
- `event_details`
- `urgency`
- `action`
- `format`

---

#### CM002: Signal-Benachrichtigung

**Beschreibung:** Erstellt Benachrichtigung für neue Signale

**Priority:** high  
**Output-Format:** text  
**Tags:** communication, signal, notification

**Template:**
```
Erstelle Benachrichtigung für Signal {signal_id}. Typ: {signal_type}, Konfidenz: {confidence}%, Symbol: {symbol}, Aktion: {action}, Entry: {entry}, Target: {target}, Stop: {stop}.
```

**Variablen:**
- `signal_id`
- `signal_type`
- `confidence`
- `symbol`
- `action`
- `entry`
- `target`
- `stop`

---

#### CM003: Risiko-Warnung

**Beschreibung:** Generiert Risiko-Warnungen

**Priority:** high  
**Output-Format:** text  
**Tags:** communication, risk, warning

**Template:**
```
Generiere Risiko-Warnung: Risiko-Level {risk_level}, betroffene Position(en): {positions}, Grund: {reason}, empfohlene Maßnahmen: {recommendations}.
```

**Variablen:**
- `risk_level`
- `positions`
- `reason`
- `recommendations`

---

#### CM004: Performance-Summary

**Beschreibung:** Erstellt Performance-Zusammenfassung für Kommunikation

**Priority:** medium  
**Output-Format:** text  
**Tags:** communication, performance, summary

**Template:**
```
Erstelle Performance-Summary für {period}. Rendite: {return}%, beste Position: {best_position}, schlechteste Position: {worst_position}. Ton: {tone} (professionell, casual).
```

**Variablen:**
- `period`
- `return`
- `best_position`
- `worst_position`
- `tone`

---

#### CM005: Markt-Update

**Beschreibung:** Erstellt Markt-Updates

**Priority:** medium  
**Output-Format:** text  
**Tags:** communication, market, update

**Template:**
```
Erstelle Markt-Update für {market}. Zeitstempel: {timestamp}. Wichtigste Ereignisse: {events}, Preisbewegungen: {price_movements}, Trading-Volumen: {volume}. Länge: {length} (kurz, mittel, lang).
```

**Variablen:**
- `market`
- `timestamp`
- `events`
- `price_movements`
- `volume`
- `length`

---

### Data Processing

*10 Prompts*

#### DP001: Daten-Normalisierung

**Beschreibung:** Normalisiert Marktdaten

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, normalization, processing

**Template:**
```
Normalisiere folgende Daten: {raw_data}. Methode: {normalization_method} (z-score, min-max, log). Zeitraum: {period}. Entferne Ausreißer wenn {remove_outliers}.
```

**Variablen:**
- `raw_data`
- `normalization_method`
- `period`
- `remove_outliers`

---

#### DP002: Fehlende Daten behandeln

**Beschreibung:** Behandelt fehlende Datenpunkte

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, missing-data, processing

**Template:**
```
Behandle fehlende Daten in Dataset: {dataset}. Fehlende Punkte: {missing_points}. Methode: {method} (forward-fill, interpolation, mean). Validiere Ergebnis.
```

**Variablen:**
- `dataset`
- `missing_points`
- `method`

---

#### DP003: Daten-Aggregation

**Beschreibung:** Aggregiert Daten über verschiedene Zeiträume

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, aggregation, processing

**Template:**
```
Aggregiere Daten für {symbol} von {source_timeframe} zu {target_timeframe}. Daten: {data}. Berechne: OHLC, Volumen, Durchschnitte.
```

**Variablen:**
- `symbol`
- `source_timeframe`
- `target_timeframe`
- `data`

---

#### DP004: Ausreißer-Erkennung

**Beschreibung:** Erkennt und behandelt statistische Ausreißer

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, outliers, detection

**Template:**
```
Identifiziere Ausreißer in {dataset}. Methode: {method} (IQR, Z-Score, Isolation Forest). Schwelle: {threshold}. Aktion: {action} (entfernen, markieren, anpassen).
```

**Variablen:**
- `dataset`
- `method`
- `threshold`
- `action`

---

#### DP005: Feature-Engineering

**Beschreibung:** Erstellt Features für ML-Modelle

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, feature-engineering, ml

**Template:**
```
Erstelle Features aus Rohdaten: {raw_data}. Generiere: Technische Indikatoren ({indicators}), Zeitbasierte Features ({time_features}), Statistische Features ({stat_features}). Format: {output_format}.
```

**Variablen:**
- `raw_data`
- `indicators`
- `time_features`
- `stat_features`
- `output_format`

---

#### DP006: Time-Series-Decomposition

**Beschreibung:** Zerlegt Zeitreihen in Komponenten

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, time-series, decomposition

**Template:**
```
Zerlege Zeitreihe für {symbol}: Daten ({data}), Methode ({method}: Additive, Multiplicative, STL), Komponenten: Trend, Seasonality, Residuals. Periode: {period}.
```

**Variablen:**
- `symbol`
- `data`
- `method`
- `period`

---

#### DP007: Rolling-Statistics

**Beschreibung:** Berechnet Rolling-Statistiken

**Priority:** medium  
**Output-Format:** data  
**Tags:** data, rolling, statistics

**Template:**
```
Berechne Rolling-Statistics für {symbol}: Daten ({data}), Window ({window}), Statistiken ({statistics}: Mean, StdDev, Min, Max, Quantiles, Correlation).
```

**Variablen:**
- `symbol`
- `data`
- `window`
- `statistics`

---

#### DP008: Data-Quality-Check

**Beschreibung:** Überprüft Datenqualität

**Priority:** high  
**Output-Format:** report  
**Tags:** data, quality, validation

**Template:**
```
Prüfe Datenqualität für Dataset {dataset_id}: Checks ({checks}: Completeness, Accuracy, Consistency, Timeliness), Toleranz ({tolerance}), Report-Level ({report_level}).
```

**Variablen:**
- `dataset_id`
- `checks`
- `tolerance`
- `report_level`

---

#### DP009: Cross-Asset-Correlation

**Beschreibung:** Berechnet Cross-Asset-Korrelationen

**Priority:** medium  
**Output-Format:** matrix  
**Tags:** data, correlation, cross-asset

**Template:**
```
Berechne Cross-Asset-Correlation: Assets ({assets}), Zeitraum ({period}), Frequenz ({frequency}), Methode ({method}: Pearson, Spearman, Kendall), Rolling-Window: {rolling_window}.
```

**Variablen:**
- `assets`
- `period`
- `frequency`
- `method`
- `rolling_window`

---

#### DP010: Regime-Detection

**Beschreibung:** Erkennt Markt-Regimes

**Priority:** medium  
**Output-Format:** structured  
**Tags:** data, regime, detection

**Template:**
```
Erkenne Market-Regimes für {symbol}: Daten ({data}), Methode ({method}: HMM, Clustering, Threshold), Features ({features}), Anzahl-Regimes ({n_regimes}).
```

**Variablen:**
- `symbol`
- `data`
- `method`
- `features`
- `n_regimes`

---

### Machine Learning

*10 Prompts*

#### ML001: Preis-Vorhersage

**Beschreibung:** Vorhersage zukünftiger Preisbewegungen

**Priority:** high  
**Output-Format:** structured  
**Tags:** ml, prediction, price

**Template:**
```
Erstelle Preis-Vorhersage für {symbol}. Historische Daten: {historical_data}, Features: {features}, Vorhersage-Horizont: {horizon}. Modell: {model_type}. Gib Vorhersage mit Konfidenz-Intervall.
```

**Variablen:**
- `symbol`
- `historical_data`
- `features`
- `horizon`
- `model_type`

---

#### ML002: Anomalie-Erkennung

**Beschreibung:** Erkennt Anomalien in Marktdaten

**Priority:** medium  
**Output-Format:** structured  
**Tags:** ml, anomaly, detection

**Template:**
```
Erkenne Anomalien in {data_type} für {symbol}. Daten: {data}, Modell: {model} (Isolation Forest, Autoencoder, etc.). Schwelle: {threshold}. Markiere und erkläre Anomalien.
```

**Variablen:**
- `data_type`
- `symbol`
- `data`
- `model`
- `threshold`

---

#### ML003: Sentiment-Klassifikation

**Beschreibung:** Klassifiziert Marktstimmung

**Priority:** medium  
**Output-Format:** structured  
**Tags:** ml, sentiment, classification

**Template:**
```
Klassifiziere Sentiment für {symbol}. Textdaten: {text_data} (News, Social Media, etc.). Modell: {model}. Gib Sentiment-Score (negativ bis positiv) und Konfidenz.
```

**Variablen:**
- `symbol`
- `text_data`
- `model`

---

#### ML004: Cluster-Analyse

**Beschreibung:** Gruppiert ähnliche Marktbedingungen

**Priority:** medium  
**Output-Format:** structured  
**Tags:** ml, clustering, analysis

**Template:**
```
Führe Cluster-Analyse durch auf {data}. Methode: {method} (K-Means, DBSCAN, Hierarchical). Features: {features}. Identifiziere: Marktregimes, ähnliche Perioden, Muster.
```

**Variablen:**
- `data`
- `method`
- `features`

---

#### ML005: Feature-Importance-Analyse

**Beschreibung:** Analysiert Wichtigkeit von Features

**Priority:** medium  
**Output-Format:** structured  
**Tags:** ml, feature-importance, analysis

**Template:**
```
Analysiere Feature-Importance für Modell {model_id}. Features: {features}, Ziel-Variable: {target}. Methode: {method} (SHAP, Permutation, Tree-based). Visualisiere Top-{n} Features.
```

**Variablen:**
- `model_id`
- `features`
- `target`
- `method`
- `n`

---

#### ML006: Backtesting ML-Modell

**Beschreibung:** Führt Backtesting für ML-Modelle durch

**Priority:** high  
**Output-Format:** report  
**Tags:** ml, backtesting, validation

**Template:**
```
Führe Backtesting für Modell {model_id} durch: Historische Daten ({historical_data}), Out-of-Sample-Periode ({oos_period}), Walk-Forward-Analyse: {walk_forward}. Metriken: Accuracy, Sharpe, Drawdown.
```

**Variablen:**
- `model_id`
- `historical_data`
- `oos_period`
- `walk_forward`

---

#### ML007: Model-Ensemble

**Beschreibung:** Erstellt Ensemble von ML-Modellen

**Priority:** medium  
**Output-Format:** structured  
**Tags:** ml, ensemble, modeling

**Template:**
```
Erstelle Model-Ensemble: Basis-Modelle ({base_models}), Ensemble-Methode ({ensemble_method}: Voting, Stacking, Bagging), Gewichtung ({weights}). Ziel: {target_variable}.
```

**Variablen:**
- `base_models`
- `ensemble_method`
- `weights`
- `target_variable`

---

#### ML008: Hyperparameter-Optimierung

**Beschreibung:** Optimiert Modell-Hyperparameter

**Priority:** medium  
**Output-Format:** structured  
**Tags:** ml, optimization, hyperparameter

**Template:**
```
Optimiere Hyperparameter für Modell {model_type}: Parameter-Space ({param_space}), Optimierungs-Methode ({optimization_method}: Grid, Random, Bayesian), CV-Folds ({cv_folds}), Metrik ({metric}).
```

**Variablen:**
- `model_type`
- `param_space`
- `optimization_method`
- `cv_folds`
- `metric`

---

#### ML009: Drift-Detection

**Beschreibung:** Erkennt Model-Drift und Data-Drift

**Priority:** high  
**Output-Format:** structured  
**Tags:** ml, drift, monitoring

**Template:**
```
Erkenne Drift für Modell {model_id}: Production-Daten ({prod_data}), Training-Daten ({train_data}), Drift-Typ ({drift_type}: Concept, Data). Methode: {method}. Alert-Schwelle: {threshold}.
```

**Variablen:**
- `model_id`
- `prod_data`
- `train_data`
- `drift_type`
- `method`
- `threshold`

---

#### ML010: Reinforcement-Learning-Agent

**Beschreibung:** Trainiert RL-Agent für Trading

**Priority:** high  
**Output-Format:** status  
**Tags:** ml, reinforcement-learning, agent

**Template:**
```
Trainiere RL-Agent für {symbol}: Environment ({environment}), State-Space ({state_space}), Action-Space ({action_space}), Reward-Function ({reward_function}), Algorithmus ({algorithm}: DQN, PPO, A3C).
```

**Variablen:**
- `symbol`
- `environment`
- `state_space`
- `action_space`
- `reward_function`
- `algorithm`

---

### Market Research

*10 Prompts*

#### MR001: Marktübersicht

**Beschreibung:** Erstellt eine umfassende Marktübersicht

**Priority:** high  
**Output-Format:** report  
**Tags:** market, research, overview

**Template:**
```
Erstelle eine Marktübersicht für {market} am {date}. Analysiere: Haupttrends, Volumen, Top-Performer, wichtige Ereignisse. Datenquelle: {data_source}.
```

**Variablen:**
- `market`
- `date`
- `data_source`

---

#### MR002: Sektor-Analyse

**Beschreibung:** Analysiert einen spezifischen Marktsektor

**Priority:** medium  
**Output-Format:** report  
**Tags:** sector, analysis, research

**Template:**
```
Analysiere den {sector}-Sektor. Bewerte: Wachstumspotenzial, Hauptakteure, regulatorische Einflüsse, makroökonomische Faktoren. Zeitraum: {period}.
```

**Variablen:**
- `sector`
- `period`

---

#### MR003: Konkurrenz-Analyse

**Beschreibung:** Vergleicht konkurrierende Assets oder Märkte

**Priority:** medium  
**Output-Format:** comparison  
**Tags:** competition, comparison, analysis

**Template:**
```
Vergleiche {asset_A} mit {asset_B}. Analysiere: Performance, Volumen, Marktkapitalisierung, technische Stärke, fundamentale Daten.
```

**Variablen:**
- `asset_A`
- `asset_B`

---

#### MR004: Trend-Identifikation

**Beschreibung:** Identifiziert aufkommende Markttrends

**Priority:** high  
**Output-Format:** list  
**Tags:** trend, identification, research

**Template:**
```
Identifiziere aktuelle Trends in {market}. Analysiere Social Media ({social_data}), News ({news_data}), Preisbewegungen ({price_data}). Bewerte Trendstärke und Nachhaltigkeit.
```

**Variablen:**
- `market`
- `social_data`
- `news_data`
- `price_data`

---

#### MR005: Makroökonomische Analyse

**Beschreibung:** Analysiert makroökonomische Faktoren

**Priority:** high  
**Output-Format:** report  
**Tags:** macro, economics, analysis

**Template:**
```
Analysiere makroökonomische Einflüsse auf {market}: Zinssätze ({interest_rates}), Inflation ({inflation}), BIP-Wachstum ({gdp_growth}), Arbeitslosenquote ({unemployment}). Prognostiziere Auswirkungen.
```

**Variablen:**
- `market`
- `interest_rates`
- `inflation`
- `gdp_growth`
- `unemployment`

---

#### MR006: On-Chain-Analyse (Crypto)

**Beschreibung:** Analysiert On-Chain-Metriken für Kryptowährungen

**Priority:** medium  
**Output-Format:** structured  
**Tags:** crypto, on-chain, analysis

**Template:**
```
Analysiere On-Chain-Metriken für {crypto_symbol}: Active Addresses ({active_addresses}), Transaction Volume ({tx_volume}), Exchange Inflow/Outflow ({exchange_flow}), HODL-Waves ({hodl_waves}).
```

**Variablen:**
- `crypto_symbol`
- `active_addresses`
- `tx_volume`
- `exchange_flow`
- `hodl_waves`

---

#### MR007: Seasonality-Analyse

**Beschreibung:** Analysiert saisonale Muster

**Priority:** medium  
**Output-Format:** structured  
**Tags:** seasonality, patterns, analysis

**Template:**
```
Analysiere Seasonality für {symbol}: Historische Daten ({historical_data}), Zeitraum ({period} Jahre). Identifiziere: Monatliche Patterns, Wochentags-Effekte, Holiday-Effekte.
```

**Variablen:**
- `symbol`
- `historical_data`
- `period`

---

#### MR008: Liquidity-Analyse

**Beschreibung:** Analysiert Marktliquidität

**Priority:** medium  
**Output-Format:** structured  
**Tags:** liquidity, market, analysis

**Template:**
```
Analysiere Liquidität für {symbol}: Bid-Ask-Spread ({spread}), Order-Book-Depth ({depth}), Trading-Volume ({volume}), Market-Impact ({impact}). Bewerte Liquiditäts-Score.
```

**Variablen:**
- `symbol`
- `spread`
- `depth`
- `volume`
- `impact`

---

#### MR009: IPO-Analyse

**Beschreibung:** Analysiert IPO-Gelegenheiten

**Priority:** medium  
**Output-Format:** report  
**Tags:** ipo, analysis, research

**Template:**
```
Analysiere IPO für {company}: Fundamentaldaten ({fundamentals}), Bewertung ({valuation}), Vergleich mit Peers ({peers}), Lock-up-Perioden ({lockup}), Underwriter ({underwriter}).
```

**Variablen:**
- `company`
- `fundamentals`
- `valuation`
- `peers`
- `lockup`
- `underwriter`

---

#### MR010: Merger-Acquisition-Analyse

**Beschreibung:** Analysiert M&A-Aktivitäten

**Priority:** medium  
**Output-Format:** report  
**Tags:** ma, merger, analysis

**Template:**
```
Analysiere M&A für {target_company} und {acquiring_company}: Deal-Struktur ({deal_structure}), Bewertung ({valuation}), Synergien ({synergies}), regulatorische Risiken ({regulatory_risks}).
```

**Variablen:**
- `target_company`
- `acquiring_company`
- `deal_structure`
- `valuation`
- `synergies`
- `regulatory_risks`

---

### Portfolio Management

*10 Prompts*

#### PM001: Portfolio-Optimierung

**Beschreibung:** Optimiert Portfolio-Allokation

**Priority:** high  
**Output-Format:** structured  
**Tags:** portfolio, optimization, allocation

**Template:**
```
Optimiere Portfolio-Allokation: Aktuelle Positionen ({current_positions}), Verfügbares Kapital ({available_capital}), Risikoprofil ({risk_profile}). Verwende Modern Portfolio Theory. Empfehle Rebalancing.
```

**Variablen:**
- `current_positions`
- `available_capital`
- `risk_profile`

---

#### PM002: Diversifikations-Analyse

**Beschreibung:** Analysiert Portfolio-Diversifikation

**Priority:** medium  
**Output-Format:** structured  
**Tags:** portfolio, diversification, analysis

**Template:**
```
Analysiere Diversifikation für Portfolio: {portfolio_data}. Bewerte: Asset-Klassen-Verteilung, Sektor-Exposure, geografische Verteilung, Korrelationen. Gib Diversifikations-Score.
```

**Variablen:**
- `portfolio_data`

---

#### PM003: Performance-Tracking

**Beschreibung:** Trackt und analysiert Portfolio-Performance

**Priority:** high  
**Output-Format:** report  
**Tags:** portfolio, performance, tracking

**Template:**
```
Analysiere Portfolio-Performance: Zeitraum ({period}), Positionen ({positions}), Rendite ({returns}), Benchmark ({benchmark}). Berechne: Sharpe Ratio, Alpha, Beta, Maximum Drawdown.
```

**Variablen:**
- `period`
- `positions`
- `returns`
- `benchmark`

---

#### PM004: Rebalancing-Empfehlung

**Beschreibung:** Empfiehlt Portfolio-Rebalancing

**Priority:** medium  
**Output-Format:** structured  
**Tags:** portfolio, rebalancing, recommendation

**Template:**
```
Überprüfe Portfolio {portfolio_id} auf Rebalancing-Bedarf. Ziel-Allokation: {target_allocation}, aktuelle Allokation: {current_allocation}, Rebalancing-Schwelle: {threshold}%. Empfehle konkrete Trades.
```

**Variablen:**
- `portfolio_id`
- `target_allocation`
- `current_allocation`
- `threshold`

---

#### PM005: Asset-Allokation-Strategie

**Beschreibung:** Entwickelt Asset-Allokation-Strategie

**Priority:** high  
**Output-Format:** structured  
**Tags:** portfolio, allocation, strategy

**Template:**
```
Entwickle Asset-Allokation-Strategie für Investor-Profil: Risikobereitschaft ({risk_appetite}), Zeithorizont ({time_horizon}), Kapital ({capital}), Ziele ({goals}). Empfehle Allokation über Asset-Klassen.
```

**Variablen:**
- `risk_appetite`
- `time_horizon`
- `capital`
- `goals`

---

#### PM006: Tax-Loss-Harvesting

**Beschreibung:** Identifiziert Tax-Loss-Harvesting-Gelegenheiten

**Priority:** medium  
**Output-Format:** structured  
**Tags:** portfolio, tax, optimization

**Template:**
```
Identifiziere Tax-Loss-Harvesting für Portfolio {portfolio_id}: Verlust-Positionen ({loss_positions}), Steuer-Bracket ({tax_bracket}), Wash-Sale-Regeln ({wash_sale_period}). Empfehle Trades.
```

**Variablen:**
- `portfolio_id`
- `loss_positions`
- `tax_bracket`
- `wash_sale_period`

---

#### PM007: Factor-Exposure-Analyse

**Beschreibung:** Analysiert Factor-Exposures

**Priority:** medium  
**Output-Format:** structured  
**Tags:** portfolio, factors, analysis

**Template:**
```
Analysiere Factor-Exposures für Portfolio {portfolio_id}: Faktoren ({factors}: Value, Growth, Momentum, Size, Quality, Volatility). Berechne Exposures und Beiträge zur Performance.
```

**Variablen:**
- `portfolio_id`
- `factors`

---

#### PM008: ESG-Score-Bewertung

**Beschreibung:** Bewertet ESG-Performance des Portfolios

**Priority:** medium  
**Output-Format:** structured  
**Tags:** portfolio, esg, sustainability

**Template:**
```
Bewerte ESG-Performance für Portfolio {portfolio_id}: Positionen ({positions}), ESG-Kriterien ({esg_criteria}), Gewichtung ({weighting}). Berechne aggregierten ESG-Score.
```

**Variablen:**
- `portfolio_id`
- `positions`
- `esg_criteria`
- `weighting`

---

#### PM009: Attributions-Analyse

**Beschreibung:** Führt Performance-Attribution durch

**Priority:** medium  
**Output-Format:** report  
**Tags:** portfolio, attribution, performance

**Template:**
```
Führe Performance-Attribution für Portfolio {portfolio_id} durch: Rendite ({return}), Benchmark ({benchmark}), Periode ({period}). Analysiere: Asset-Allocation, Security-Selection, Interaction-Effekt.
```

**Variablen:**
- `portfolio_id`
- `return`
- `benchmark`
- `period`

---

#### PM010: Währungs-Exposure-Analyse

**Beschreibung:** Analysiert Währungsrisiken im Portfolio

**Priority:** medium  
**Output-Format:** structured  
**Tags:** portfolio, currency, risk

**Template:**
```
Analysiere Währungs-Exposure für Portfolio {portfolio_id}: Positionen ({positions}), Base-Currency ({base_currency}), FX-Rates ({fx_rates}). Berechne: Exposure pro Währung, Hedging-Bedarf.
```

**Variablen:**
- `portfolio_id`
- `positions`
- `base_currency`
- `fx_rates`

---

### Reporting

*5 Prompts*

#### RP001: Täglicher Performance-Report

**Beschreibung:** Erstellt täglichen Performance-Bericht

**Priority:** high  
**Output-Format:** report  
**Tags:** reporting, daily, performance

**Template:**
```
Erstelle täglichen Report für {date}. Portfolio: {portfolio_id}. Inkludiere: Tagesperformance, ausgeführte Trades, offene Positionen, P&L, wichtige Ereignisse. Format: {format}.
```

**Variablen:**
- `date`
- `portfolio_id`
- `format`

---

#### RP002: Signal-Performance-Report

**Beschreibung:** Berichtet über Signal-Performance

**Priority:** medium  
**Output-Format:** report  
**Tags:** reporting, signal, performance

**Template:**
```
Analysiere Performance der Signale im Zeitraum {period}. Signale: {signals}. Berechne: Win-Rate, Average Profit/Loss, Sharpe Ratio, beste/schlechteste Signale.
```

**Variablen:**
- `period`
- `signals`

---

#### RP003: Risiko-Report

**Beschreibung:** Erstellt umfassenden Risiko-Bericht

**Priority:** high  
**Output-Format:** report  
**Tags:** reporting, risk, analysis

**Template:**
```
Erstelle Risiko-Report für Portfolio {portfolio_id}. Analysiere: VaR, CVaR, Maximum Drawdown, Exposure, Korrelationen, Stress-Test-Szenarien: {scenarios}.
```

**Variablen:**
- `portfolio_id`
- `scenarios`

---

#### RP004: Monatlicher Summary-Report

**Beschreibung:** Erstellt monatliche Zusammenfassung

**Priority:** high  
**Output-Format:** report  
**Tags:** reporting, monthly, summary

**Template:**
```
Erstelle Monats-Report für {month}/{year}. Portfolio: {portfolio_id}. Inkludiere: Monatsperformance, Trades-Statistik, beste/schlechteste Positionen, Risiko-Metriken, Ausblick.
```

**Variablen:**
- `month`
- `year`
- `portfolio_id`

---

#### RP005: Compliance-Report

**Beschreibung:** Erstellt Compliance-Bericht

**Priority:** high  
**Output-Format:** report  
**Tags:** reporting, compliance, regulatory

**Template:**
```
Erstelle Compliance-Report für {period}. Überprüfe: Positionslimits ({limits}), Risiko-Grenzen, regulatorische Anforderungen ({regulations}), Handelsmuster. Markiere Verstöße.
```

**Variablen:**
- `period`
- `limits`
- `regulations`

---

### Risk Management

*10 Prompts*

#### RM001: Risiko-Bewertung

**Beschreibung:** Bewertet das Risiko eines Trades oder Signals

**Priority:** high  
**Output-Format:** structured  
**Tags:** risk, assessment, management

**Template:**
```
Bewerte das Risiko für Trade: {trade_details}. Analysiere: Positionsgröße ({position_size}), Stop-Loss ({stop_loss}), Marktvolatilität ({volatility}), Portfolio-Exposition. Gib Risiko-Score (1-10).
```

**Variablen:**
- `trade_details`
- `position_size`
- `stop_loss`
- `volatility`

---

#### RM002: Position-Sizing-Kalkulation

**Beschreibung:** Berechnet optimale Positionsgröße

**Priority:** high  
**Output-Format:** numeric  
**Tags:** risk, position-sizing, calculation

**Template:**
```
Berechne optimale Positionsgröße für {symbol}. Portfolio-Wert: {portfolio_value}, Risiko pro Trade: {risk_per_trade}%, Entry: {entry_price}, Stop-Loss: {stop_loss}. Verwende Kelly-Kriterium wenn {use_kelly}.
```

**Variablen:**
- `symbol`
- `portfolio_value`
- `risk_per_trade`
- `entry_price`
- `stop_loss`
- `use_kelly`

---

#### RM003: Stop-Loss-Optimierung

**Beschreibung:** Optimiert Stop-Loss-Levels

**Priority:** high  
**Output-Format:** structured  
**Tags:** risk, stop-loss, optimization

**Template:**
```
Optimiere Stop-Loss für {symbol}. Entry: {entry_price}, ATR: {atr}, Support-Level: {support_level}, Risikotoleranz: {risk_tolerance}. Empfehle Stop-Loss-Strategie (fest, trailing, ATR-basiert).
```

**Variablen:**
- `symbol`
- `entry_price`
- `atr`
- `support_level`
- `risk_tolerance`

---

#### RM004: Portfolio-Risiko-Analyse

**Beschreibung:** Analysiert Gesamtrisiko des Portfolios

**Priority:** high  
**Output-Format:** report  
**Tags:** risk, portfolio, analysis

**Template:**
```
Analysiere Portfolio-Risiko: Positionen ({positions}), Diversifikation ({diversification}), Korrelationen ({correlations}), Gesamt-Exposure ({exposure}). Identifiziere Risiko-Konzentrationen.
```

**Variablen:**
- `positions`
- `diversification`
- `correlations`
- `exposure`

---

#### RM005: Drawdown-Analyse

**Beschreibung:** Analysiert potenzielle und historische Drawdowns

**Priority:** medium  
**Output-Format:** structured  
**Tags:** risk, drawdown, analysis

**Template:**
```
Analysiere Drawdown für {symbol} oder Portfolio. Historische Daten: {historical_data}, aktueller Drawdown: {current_drawdown}, maximaler Drawdown: {max_drawdown}. Bewerte Erholungswahrscheinlichkeit.
```

**Variablen:**
- `symbol`
- `historical_data`
- `current_drawdown`
- `max_drawdown`

---

#### RM006: Value-at-Risk (VaR)

**Beschreibung:** Berechnet Value at Risk

**Priority:** high  
**Output-Format:** numeric  
**Tags:** risk, var, calculation

**Template:**
```
Berechne VaR für Portfolio {portfolio_id}: Methode ({method}: Historisch, Parametrisch, Monte-Carlo), Konfidenz-Level ({confidence}%), Zeitraum ({time_horizon}). Historische Daten: {historical_data}.
```

**Variablen:**
- `portfolio_id`
- `method`
- `confidence`
- `time_horizon`
- `historical_data`

---

#### RM007: Stress-Testing

**Beschreibung:** Führt Stress-Tests durch

**Priority:** high  
**Output-Format:** report  
**Tags:** risk, stress-test, analysis

**Template:**
```
Führe Stress-Test für Portfolio {portfolio_id} durch: Szenarien ({scenarios}), historische Krisen ({historical_crises}), hypothetische Schocks ({hypothetical_shocks}). Analysiere Impact.
```

**Variablen:**
- `portfolio_id`
- `scenarios`
- `historical_crises`
- `hypothetical_shocks`

---

#### RM008: Beta-Hedge-Berechnung

**Beschreibung:** Berechnet Beta-Hedging-Anforderungen

**Priority:** medium  
**Output-Format:** structured  
**Tags:** risk, beta, hedging

**Template:**
```
Berechne Beta-Hedge für Position {position}: Portfolio-Beta ({portfolio_beta}), Ziel-Beta ({target_beta}), Hedge-Instrument ({hedge_instrument}), Hedge-Beta ({hedge_beta}).
```

**Variablen:**
- `position`
- `portfolio_beta`
- `target_beta`
- `hedge_instrument`
- `hedge_beta`

---

#### RM009: Korrelations-Matrix

**Beschreibung:** Erstellt Korrelations-Matrix für Portfolio

**Priority:** medium  
**Output-Format:** matrix  
**Tags:** risk, correlation, matrix

**Template:**
```
Erstelle Korrelations-Matrix für Portfolio {portfolio_id}: Assets ({assets}), Zeitraum ({period}), Methode ({method}: Pearson, Spearman). Visualisiere und identifiziere Risiko-Cluster.
```

**Variablen:**
- `portfolio_id`
- `assets`
- `period`
- `method`

---

#### RM010: Tail-Risk-Analyse

**Beschreibung:** Analysiert Tail-Risk-Exposition

**Priority:** high  
**Output-Format:** report  
**Tags:** risk, tail-risk, analysis

**Template:**
```
Analysiere Tail-Risk für Portfolio {portfolio_id}: Berechne Kurtosis, Skewness, CVaR, Extremwert-Theorie. Identifiziere Fat-Tail-Risiken. Daten: {historical_data}.
```

**Variablen:**
- `portfolio_id`
- `historical_data`

---

### Sentiment Analysis

*5 Prompts*

#### SA006: Social-Media-Sentiment

**Beschreibung:** Analysiert Social-Media-Stimmung

**Priority:** medium  
**Output-Format:** structured  
**Tags:** sentiment, social-media, analysis

**Template:**
```
Analysiere Social-Media-Sentiment für {symbol}: Quellen ({sources}), Zeitraum ({period}), Keywords ({keywords}). Berechne: Sentiment-Score, Volumen, Trending-Topics.
```

**Variablen:**
- `symbol`
- `sources`
- `period`
- `keywords`

---

#### SA007: News-Sentiment-Analyse

**Beschreibung:** Analysiert News-Sentiment

**Priority:** high  
**Output-Format:** structured  
**Tags:** sentiment, news, analysis

**Template:**
```
Analysiere News-Sentiment für {symbol}: News-Artikel ({news_articles}), Quellen ({sources}), Sprache ({language}). Extrahiere: Sentiment, Relevanz, Wichtigkeit, Schlüsselthemen.
```

**Variablen:**
- `symbol`
- `news_articles`
- `sources`
- `language`

---

#### SA008: Fear-Greed-Index

**Beschreibung:** Berechnet Fear & Greed Index

**Priority:** medium  
**Output-Format:** numeric  
**Tags:** sentiment, fear-greed, index

**Template:**
```
Berechne Fear & Greed Index für {market}: Volatilität ({volatility}), Momentum ({momentum}), Put/Call-Ratio ({put_call}), Safe-Haven-Demand ({safe_haven}), Junk-Bond-Demand ({junk_bonds}).
```

**Variablen:**
- `market`
- `volatility`
- `momentum`
- `put_call`
- `safe_haven`
- `junk_bonds`

---

#### SA009: Institutional-Sentiment

**Beschreibung:** Analysiert institutionelles Sentiment

**Priority:** high  
**Output-Format:** structured  
**Tags:** sentiment, institutional, analysis

**Template:**
```
Analysiere institutionelles Sentiment für {symbol}: COT-Daten ({cot_data}), 13F-Filings ({filings}), Insider-Trading ({insider_trading}), Dark-Pool-Activity ({dark_pool}).
```

**Variablen:**
- `symbol`
- `cot_data`
- `filings`
- `insider_trading`
- `dark_pool`

---

#### SA010: Retail-Sentiment-Analyse

**Beschreibung:** Analysiert Retail-Investor-Sentiment

**Priority:** medium  
**Output-Format:** structured  
**Tags:** sentiment, retail, analysis

**Template:**
```
Analysiere Retail-Sentiment für {symbol}: Trading-Apps-Daten ({trading_apps}), Reddit/Forum-Diskussionen ({forums}), Google-Trends ({trends}), Broker-Order-Flow ({order_flow}).
```

**Variablen:**
- `symbol`
- `trading_apps`
- `forums`
- `trends`
- `order_flow`

---

### Signal Analysis

*5 Prompts*

#### SA001: Basis Signal-Analyse

**Beschreibung:** Analysiert eingehende Trading-Signale und bewertet deren Qualität

**Priority:** high  
**Output-Format:** structured  
**Tags:** signal, analysis, trading

**Template:**
```
Analysiere das folgende Trading-Signal: {signal_data}. Bewerte die Signalstärke (1-10), Zuverlässigkeit und mögliche Risiken. Berücksichtige technische Indikatoren: {indicators}.
```

**Variablen:**
- `signal_data`
- `indicators`

---

#### SA002: Multi-Timeframe Signal-Analyse

**Beschreibung:** Analysiert Signale über mehrere Zeitrahmen

**Priority:** high  
**Output-Format:** structured  
**Tags:** signal, multi-timeframe, analysis

**Template:**
```
Analysiere das Signal {signal_name} über folgende Timeframes: {timeframes}. Identifiziere Konvergenz oder Divergenz zwischen den Zeitebenen. Marktdaten: {market_data}.
```

**Variablen:**
- `signal_name`
- `timeframes`
- `market_data`

---

#### SA003: Signal-Konfidenz-Berechnung

**Beschreibung:** Berechnet die Konfidenz eines Trading-Signals

**Priority:** high  
**Output-Format:** numeric  
**Tags:** signal, confidence, calculation

**Template:**
```
Berechne die Konfidenz für Signal {signal_id}. Berücksichtige: Historische Erfolgsrate ({success_rate}), aktuelle Marktbedingungen ({market_conditions}), Volatilität ({volatility}). Gib Konfidenz in Prozent an.
```

**Variablen:**
- `signal_id`
- `success_rate`
- `market_conditions`
- `volatility`

---

#### SA004: Signal-Filterung

**Beschreibung:** Filtert Signale basierend auf definierten Kriterien

**Priority:** medium  
**Output-Format:** list  
**Tags:** signal, filter, screening

**Template:**
```
Filtere die folgenden Signale {signals_list} basierend auf Kriterien: Mindest-Konfidenz {min_confidence}, Risiko-Level {risk_level}, Asset-Typ {asset_type}. Gib gefilterte Liste zurück.
```

**Variablen:**
- `signals_list`
- `min_confidence`
- `risk_level`
- `asset_type`

---

#### SA005: Signal-Korrelations-Analyse

**Beschreibung:** Analysiert Korrelationen zwischen verschiedenen Signalen

**Priority:** medium  
**Output-Format:** structured  
**Tags:** signal, correlation, analysis

**Template:**
```
Analysiere die Korrelation zwischen Signalen: {signal_A} und {signal_B}. Zeitraum: {time_period}. Identifiziere Muster und Abhängigkeiten.
```

**Variablen:**
- `signal_A`
- `signal_B`
- `time_period`

---

### Technical Analysis

*10 Prompts*

#### TA001: Chart-Pattern-Erkennung

**Beschreibung:** Erkennt technische Chart-Patterns

**Priority:** high  
**Output-Format:** structured  
**Tags:** technical, pattern, chart

**Template:**
```
Analysiere Chart-Daten für {symbol}: {chart_data}. Identifiziere Patterns (Kopf-Schulter, Dreiecke, Flaggen, etc.). Gib Wahrscheinlichkeit und erwartete Kursbewegung an.
```

**Variablen:**
- `symbol`
- `chart_data`

---

#### TA002: Indikatoren-Analyse

**Beschreibung:** Analysiert technische Indikatoren

**Priority:** high  
**Output-Format:** structured  
**Tags:** technical, indicators, analysis

**Template:**
```
Analysiere folgende Indikatoren für {symbol}: RSI ({rsi}), MACD ({macd}), Moving Averages ({ma}), Bollinger Bands ({bb}). Gib Trading-Empfehlung basierend auf Indikatorenlage.
```

**Variablen:**
- `symbol`
- `rsi`
- `macd`
- `ma`
- `bb`

---

#### TA003: Support-Resistance-Identifikation

**Beschreibung:** Identifiziert Unterstützungs- und Widerstandsniveaus

**Priority:** medium  
**Output-Format:** list  
**Tags:** technical, support, resistance

**Template:**
```
Identifiziere Support- und Resistance-Levels für {symbol} basierend auf: Preisdaten ({price_data}), Volumen ({volume}), historische Levels. Gib die 3 wichtigsten Levels mit Stärke-Bewertung.
```

**Variablen:**
- `symbol`
- `price_data`
- `volume`

---

#### TA004: Volumen-Analyse

**Beschreibung:** Analysiert Handelsvolumen und dessen Bedeutung

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, volume, analysis

**Template:**
```
Analysiere Volumen für {symbol}. Aktuelles Volumen: {current_volume}, Durchschnitt: {avg_volume}. Identifiziere: Volumen-Spikes, Divergenzen, Akkumulation/Distribution.
```

**Variablen:**
- `symbol`
- `current_volume`
- `avg_volume`

---

#### TA005: Candlestick-Pattern-Analyse

**Beschreibung:** Analysiert Candlestick-Patterns

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, candlestick, pattern

**Template:**
```
Analysiere Candlestick-Patterns für {symbol}: {candlestick_data}. Identifiziere: Doji, Hammer, Engulfing, Morning/Evening Star, etc. Bewerte bullish/bearish Signale.
```

**Variablen:**
- `symbol`
- `candlestick_data`

---

#### TA006: Fibonacci-Retracement

**Beschreibung:** Berechnet Fibonacci-Levels

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, fibonacci, analysis

**Template:**
```
Berechne Fibonacci-Retracement für {symbol}: Swing-High ({swing_high}), Swing-Low ({swing_low}). Berechne Levels: 23.6%, 38.2%, 50%, 61.8%, 78.6%. Identifiziere potenzielle Support/Resistance.
```

**Variablen:**
- `symbol`
- `swing_high`
- `swing_low`

---

#### TA007: Elliott-Wave-Analyse

**Beschreibung:** Analysiert Elliott-Wave-Patterns

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, elliott-wave, analysis

**Template:**
```
Analysiere Elliott-Waves für {symbol}: Chart-Daten ({chart_data}), aktueller Trend ({trend}). Identifiziere: Impulse-Waves, Corrective-Waves, aktuelle Position im Cycle.
```

**Variablen:**
- `symbol`
- `chart_data`
- `trend`

---

#### TA008: Ichimoku-Cloud-Analyse

**Beschreibung:** Analysiert Ichimoku-Indikatoren

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, ichimoku, analysis

**Template:**
```
Analysiere Ichimoku für {symbol}: Tenkan-sen ({tenkan}), Kijun-sen ({kijun}), Senkou-Span A/B ({senkou}), Chikou-Span ({chikou}). Bewerte: Trend, Momentum, Support/Resistance.
```

**Variablen:**
- `symbol`
- `tenkan`
- `kijun`
- `senkou`
- `chikou`

---

#### TA009: Pivot-Points-Kalkulation

**Beschreibung:** Berechnet Pivot-Points

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, pivot-points, calculation

**Template:**
```
Berechne Pivot-Points für {symbol}: Previous High ({prev_high}), Previous Low ({prev_low}), Previous Close ({prev_close}). Berechne: PP, R1, R2, R3, S1, S2, S3. Methode: {method}.
```

**Variablen:**
- `symbol`
- `prev_high`
- `prev_low`
- `prev_close`
- `method`

---

#### TA010: ADX-Trend-Stärke

**Beschreibung:** Analysiert Trend-Stärke mit ADX

**Priority:** medium  
**Output-Format:** structured  
**Tags:** technical, adx, trend

**Template:**
```
Analysiere Trend-Stärke für {symbol}: ADX ({adx}), +DI ({plus_di}), -DI ({minus_di}). Bewerte: Trend-Stärke (weak/strong), Trend-Richtung (bullish/bearish), Trading-Signal.
```

**Variablen:**
- `symbol`
- `adx`
- `plus_di`
- `minus_di`

---

### Trading Strategies

*10 Prompts*

#### TS001: Momentum-Strategie

**Beschreibung:** Implementiert Momentum-Trading-Strategie

**Priority:** high  
**Output-Format:** structured  
**Tags:** strategy, momentum, trading

**Template:**
```
Implementiere Momentum-Strategie für {symbol}: Lookback-Periode ({lookback}), Momentum-Indikator ({indicator}), Entry-Schwelle ({entry_threshold}), Exit-Bedingung ({exit_condition}).
```

**Variablen:**
- `symbol`
- `lookback`
- `indicator`
- `entry_threshold`
- `exit_condition`

---

#### TS002: Mean-Reversion-Strategie

**Beschreibung:** Implementiert Mean-Reversion-Strategie

**Priority:** high  
**Output-Format:** structured  
**Tags:** strategy, mean-reversion, trading

**Template:**
```
Implementiere Mean-Reversion für {symbol}: Mittelwert-Typ ({mean_type}), Standardabweichung ({std_dev}), Entry bei {entry_std} StdDev, Exit bei {exit_std} StdDev. Zeitraum: {period}.
```

**Variablen:**
- `symbol`
- `mean_type`
- `std_dev`
- `entry_std`
- `exit_std`
- `period`

---

#### TS003: Breakout-Strategie

**Beschreibung:** Implementiert Breakout-Trading-Strategie

**Priority:** high  
**Output-Format:** structured  
**Tags:** strategy, breakout, trading

**Template:**
```
Implementiere Breakout-Strategie für {symbol}: Resistance-Level ({resistance}), Support-Level ({support}), Breakout-Bestätigung ({confirmation}), Volumen-Filter: {volume_filter}.
```

**Variablen:**
- `symbol`
- `resistance`
- `support`
- `confirmation`
- `volume_filter`

---

#### TS004: Arbitrage-Strategie

**Beschreibung:** Identifiziert Arbitrage-Möglichkeiten

**Priority:** medium  
**Output-Format:** structured  
**Tags:** strategy, arbitrage, trading

**Template:**
```
Suche Arbitrage-Gelegenheiten: Asset ({asset}), Märkte ({markets}), Typ ({arbitrage_type}), Mindest-Spread ({min_spread}), Berücksichtige Gebühren: {include_fees}.
```

**Variablen:**
- `asset`
- `markets`
- `arbitrage_type`
- `min_spread`
- `include_fees`

---

#### TS005: Pairs-Trading-Strategie

**Beschreibung:** Implementiert Pairs-Trading

**Priority:** medium  
**Output-Format:** structured  
**Tags:** strategy, pairs-trading, trading

**Template:**
```
Implementiere Pairs-Trading: Pair ({asset_A}, {asset_B}), Korrelation ({correlation}), Z-Score-Entry ({z_entry}), Z-Score-Exit ({z_exit}), Hedge-Ratio ({hedge_ratio}).
```

**Variablen:**
- `asset_A`
- `asset_B`
- `correlation`
- `z_entry`
- `z_exit`
- `hedge_ratio`

---

#### TS006: Grid-Trading-Strategie

**Beschreibung:** Implementiert Grid-Trading

**Priority:** medium  
**Output-Format:** structured  
**Tags:** strategy, grid-trading, automation

**Template:**
```
Implementiere Grid-Trading für {symbol}: Grid-Range ({range_low} bis {range_high}), Grid-Levels ({levels}), Positionsgröße pro Level ({position_size}), Rebalancing: {rebalancing}.
```

**Variablen:**
- `symbol`
- `range_low`
- `range_high`
- `levels`
- `position_size`
- `rebalancing`

---

#### TS007: Market-Making-Strategie

**Beschreibung:** Implementiert Market-Making

**Priority:** high  
**Output-Format:** structured  
**Tags:** strategy, market-making, liquidity

**Template:**
```
Implementiere Market-Making für {symbol}: Spread ({spread}), Inventory-Limits ({inventory_limits}), Quote-Size ({quote_size}), Skew-Adjustment ({skew}), Risk-Management ({risk_mgmt}).
```

**Variablen:**
- `symbol`
- `spread`
- `inventory_limits`
- `quote_size`
- `skew`
- `risk_mgmt`

---

#### TS008: Statistical-Arbitrage

**Beschreibung:** Implementiert Statistical-Arbitrage-Strategie

**Priority:** high  
**Output-Format:** structured  
**Tags:** strategy, statistical-arbitrage, quantitative

**Template:**
```
Implementiere Stat-Arb: Universum ({universe}), Faktoren ({factors}), Ranking-Methode ({ranking}), Long/Short-Ratio ({ratio}), Rebalancing ({rebalancing}), Transaction-Costs ({costs}).
```

**Variablen:**
- `universe`
- `factors`
- `ranking`
- `ratio`
- `rebalancing`
- `costs`

---

#### TS009: Volatility-Trading

**Beschreibung:** Implementiert Volatilitäts-Trading-Strategie

**Priority:** medium  
**Output-Format:** structured  
**Tags:** strategy, volatility, options

**Template:**
```
Implementiere Volatility-Trading für {symbol}: Implied-Vol ({iv}), Historical-Vol ({hv}), Vol-Spread-Trigger ({trigger}), Instrumente ({instruments}: Options, VIX), Strategie ({strategy}: Long/Short Vol).
```

**Variablen:**
- `symbol`
- `iv`
- `hv`
- `trigger`
- `instruments`
- `strategy`

---

#### TS010: News-Based-Trading

**Beschreibung:** Implementiert News-basierte Trading-Strategie

**Priority:** medium  
**Output-Format:** structured  
**Tags:** strategy, news-trading, sentiment

**Template:**
```
Implementiere News-Trading: News-Quellen ({sources}), Keywords ({keywords}), Sentiment-Threshold ({sentiment_threshold}), Execution-Speed ({speed}), Position-Holding-Period ({holding_period}).
```

**Variablen:**
- `sources`
- `keywords`
- `sentiment_threshold`
- `speed`
- `holding_period`

---
