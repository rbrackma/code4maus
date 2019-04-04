import aMathefant from './assets/Mathefant.png';
import a01 from './assets/01.png';
import ap1 from './assets/p1.png';
import avariablen_hand from '../shared_assets/variablen_hand.png';
import av1 from './assets/v1.gif';
import ax03 from './assets/x03.png';
import a02 from './assets/02.gif';
import ax05 from './assets/x05.png';
import ay_01 from './assets/y_01.png';
import ax01_1 from './assets/x01_1.png';
import ax01_2 from './assets/x01_2.png';
import a03 from './assets/03.gif';
import ay_02 from './assets/y_02.png';
import a06_2 from './assets/06_2.gif';
import a07 from './assets/07.png';
import astart from '../shared_assets/start.png';
import av2 from './assets/v2.gif';
import ablitz from './assets/blitz.svg';
import asteuerung from '../shared_assets/steuerung.png';
import ay_04 from './assets/y_04.png';
import ay_05 from '../shared_assets/y_05.png';
import ay_06 from './assets/y_06.png';
import ay_07 from './assets/y_07.png';
import ay_08 from './assets/y_08.png';
import ay_09 from './assets/y_09.png';
import ay_011 from './assets/y_011.png';
import ay_012 from './assets/y_012.png';
import a04 from './assets/04.gif';
import ay_013 from './assets/y_013.png';
import aherz from '../shared_assets/herz.png';

export default {
    "slides": [
        {
            "asset": aMathefant
        },
        {
            "asset": a01,
            "caption": "Programmiere den Elefanten so, dass er Mathe-Aufgaben stellt."
        },
        {
            "asset": ap1,
            "caption": "Beginne ein Programm"
        },
        {
            "asset": avariablen_hand,
            "caption": "Klicke auf Variablen"
        },
        {
            "asset": av1,
            "caption": "Füge zwei neue Variablen hinzu. Nenne sie 'Zahl 1' und 'Zahl 2'."
        },
        {
            "asset": ax03,
            "caption": "Ziehe zwei Mal 'setze auf' rüber:"
        },
        {
            "asset": a01,
            "caption": "Ändere die 1. Variable zu 'Zahl 1'"
        },
        {
            "asset": a02,
            "caption": "Ändere die 2. Variable zu 'Zahl 2'"
        },
        {
            "asset": ax05,
            "caption": "Ändere die Zahlenwerte:"
        },
        {
            "asset": ay_01,
            "caption": "Klicke auf 'Aussehen'"
        },
        {
            "asset": ax01_1,
            "caption": "Ziehe vier mal 'denke' dazu:"
        },
        {
            "asset": ax01_2,
            "caption": "Ändere Texte und Sekunden so:"
        },
        {
            "asset": avariablen_hand,
            "caption": "Klicke auf Variablen"
        },
        {
            "asset": a03,
            "caption": "Ziehe 'Zahl 1' und 'Zahl 2' rein:"
        },
        {
            "asset": ay_02,
            "caption": "Klicke auf 'Fühlen'"
        },
        {
            "asset": a06_2,
            "caption": "Ziehe 'frage' ans Ende:"
        },
        {
            "asset": a07,
            "caption": "Ändere den Text zu '?':"
        },
        {
            "asset": astart,
            "caption": "Teste dein Programm:"
        },
        {
            "asset": av2,
            "caption": "Das Programm wartet, bis du die Lösung tippst."
        },
        {
            "asset": ablitz,
            "caption": "Aber wie weiß das Programm die Lösung?"
        },
        {
            "asset": asteuerung,
            "caption": "Klicke auf 'Steuerung'"
        },
        {
            "asset": ay_04,
            "caption": "Ziehe 'falls-dann-sonst' unter 'warte':"
        },
        {
            "asset": ay_05,
            "caption": "Klicke auf Operatoren"
        },
        {
            "asset": ay_06,
            "caption": "Ziehe ' = 100' rein:"
        },
        {
            "asset": ay_02,
            "caption": "Klicke auf 'Fühlen'"
        },
        {
            "asset": ay_07,
            "caption": "Ziehe 'Antwort' rein:"
        },
        {
            "asset": ay_08,
            "caption": "Ziehe den Operator '+' dazu:"
        },
        {
            "asset": avariablen_hand,
            "caption": "Klicke auf Variablen"
        },
        {
            "asset": ay_09,
            "caption": "Ziehe die Zahlen dazu:"
        },
        {
            "asset": ay_011,
            "caption": "Wenn die Antwort richtig ist:"
        },
        {
            "asset": ay_012,
            "caption": "Wenn die Antwort falsch ist:"
        },
        {
            "asset": a04,
            "caption": "Füge “Für immer” ein:"
        },
        {
            "asset": astart,
            "caption": "Teste noch einmal:"
        },
        {
            "asset": ablitz,
            "caption": "Die Aufgabe bleibt immer gleich."
        },
        {
            "asset": ay_05,
            "caption": "Klicke auf Operatoren"
        },
        {
            "asset": ay_013,
            "caption": "Füge Zufallszahlen ein:"
        },
        {
            "asset": astart,
            "caption": "Spiele dein Mathe-Spiel:"
        },
        {
            "asset": aherz,
            "caption": "Das hast du super gemacht!"
        }
    ],
    "nextGame": "04_a",
    "blocks": [
        {
            "category": "looks",
            "blocks": [
                "thinkforsecs"
            ]
        },
        {
            "category": "events",
            "blocks": [
                "whenflagclicked"
            ]
        },
        {
            "category": "control",
            "blocks": [
                "forever",
                "if_else"
            ]
        },
        {
            "category": "sensing",
            "blocks": [
                "askandwait",
                "answer"
            ]
        },
        {
            "category": "operators",
            "blocks": [
                "add",
                "random",
                "equals"
            ]
        },
        {
            "category": "variables"
        }
    ]
}