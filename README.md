# SLI — System Load Interface (CALL‑Übernahme)

SLI ist ein neutrales RESPO-Modul im NC-System und übernimmt alle
ursprünglichen Aufgaben des CALL-Moduls. SLI bleibt vollständig
neutral, erzeugt keine eigenen Werte und trifft keine eigenen
Entscheidungen.

SLI ersetzt CALL funktional, behält aber seinen eigenen Namen.
SLI führt alle Ablage- und Übergabeprozesse aus, die zuvor von
CALL ausgeführt wurden.

SLI dient als System Load Interface für:

- Pipeline 3 Ablagen
- Pipeline 6 Ablagen
- neutrale Aufgabenverteilung
- interne RESPO-Abläufe
- zukünftige Erweiterungen

## Funktion

SLI führt drei grundlegende Aufgaben aus:

1. Aufgaben entgegennehmen  
2. Aufgaben klassifizieren  
3. Aufgaben in Pipeline 3 oder Pipeline 6 ablegen  

SLI überschreibt keine Werte und führt keine eigenen Berechnungen aus.
SLI bleibt vollständig neutral.

## Integration

SLI kann an MXU oder andere Module angehängt werden:

```js
SLI.attach(MXU);
