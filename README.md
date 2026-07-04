# CALL — Slave-Modul für Pipeline 3 und Pipeline 6

CALL ist ein neutrales Hardware-Steuermodul.
Es erzeugt keine eigenen Werte, sondern nimmt Aufgaben entgegen
und legt sie automatisch in Pipeline 3 oder Pipeline 6 ab.

CALL arbeitet als Slave-Modul:

- CALL empfängt Aufgaben
- CALL klassifiziert Aufgaben
- CALL legt Aufgaben in Pipeline 3 oder Pipeline 6 ab
- CALL führt keine eigenen Berechnungen aus

CALL ist vollständig kompatibel mit:

- RAM
- CPU
- GPU
- ROM
- PORT
- Pipeline 3
- Pipeline 6

## Pipeline-Zuordnung

CALL nutzt zwei feste Ablagepunkte:

### Pipeline 3
Pipeline 3 ist die Hardware-Ableitungsebene:

- RAM → BLOCK / CACHE / FLOW / STATE
- CPU → LOAD / CYCLE / ENERGY / STATE
- GPU → FRONT / DEPTH / FLOW / CORE
- ROM → READ / WRITE / HOLD / BENCH
- PORT → MA³-Verbindung

CALL legt Hardware-Aufgaben automatisch in Pipeline 3 ab.

### Pipeline 6
Pipeline 6 ist die erweiterte Ableitungsebene:

- komplexe Aufgaben
- externe Aufgaben
- PORT CONNECT Aufgaben
- MA³-Ableitungen
- BENCH-Weiterleitungen

CALL legt erweiterte Aufgaben automatisch in Pipeline 6 ab.

## Slave-Funktion

CALL arbeitet als Slave:

CALL = {
  task: <eingehende Aufgabe>,
  pipe: <3 oder 6>,
  state: <wartend / abgelegt>
}

CALL entscheidet nicht selbst.
CALL führt nicht selbst aus.
CALL legt nur ab.

## Sicherheit

CALL ist sicher, weil:

- CALL keine eigenen Werte erzeugt
- CALL keine eigenen Entscheidungen trifft
- CALL nur Ablagepunkte nutzt
- CALL keine Rückführung erlaubt
- CALL keine Rekonstruktion erlaubt

CALL ist ein reines Übergangsmodul.

## Ergebnis

CALL kann genutzt werden,
aber nicht missbraucht werden.

CALL legt alle Aufgaben sauber in Pipeline 3 oder Pipeline 6 ab.
CALL bleibt neutral.
CALL bleibt stabil.
CALL bleibt regelkonform.

