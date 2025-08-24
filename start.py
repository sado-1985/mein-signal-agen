import yaml
import os
from agent_runner import run_agent

# Lade Konfiguration aus config.yaml
with open("config.yaml", "r", encoding="utf-8") as file:
    config = yaml.safe_load(file)

# Konfiguration anzeigen
print("Projektname:", config["project_name"])
print("Modus:", config["environment"]["mode"])
print("Agent:", config["agent"]["name"])
print("Log-Datei:", config["paths"]["log_file"]))
print("\n--- Agentenlogik wird gestartet ---\n")
run_agent(config)

