import aL05 from './assets/L05.png';
import ax11 from './assets/x11.png';
import a000 from './assets/000.png';
import a001 from '../shared_assets/start.png';
import a002 from './assets/002.png';
import a003 from '../shared_assets/start.png';
import a05_01 from './assets/05_01.png';
import ax01 from './assets/x01.png';
import ax02 from './assets/x02.png';
import a09 from './assets/09.gif';
import ax09 from './assets/x09.png';
import ax03 from './assets/x03.png';
import astart from '../shared_assets/start.png';
import asuper from '../shared_assets/super.png';
import a004 from './assets/004.png';
import a01 from './assets/01.png';
import a02 from './assets/02.png';
import a03 from './assets/03.png';
import a005 from './assets/005.png';
import a006 from './assets/006.png';
import a007 from './assets/007.png';
import a008 from './assets/008.png';
import ax10 from './assets/x10.png';
import ax05 from './assets/x05.png';
import ax06 from './assets/x06.png';
import ax07 from './assets/x07.png';
import aherz from '../shared_assets/herz.png';
import ax08 from './assets/x08.png';
import a009 from './assets/009.png';
import axx09 from './assets/xx09.png';
import aneu from './assets/neu.png';
import a04 from './assets/04.png';

export default {
    id: '05',
    name: 'Kugelfisch-Spiel',
    subtitle: '05 Spiel',
    image: aL05,
    "slides": [
        {
            "asset": aL05
        },
        {
            "asset": ax11,
            "caption": "Ziel: Fange mit dem Fisch die Äpfel."
        },
        {
            "asset": a000,
            "caption": "Hintergrund: Unterwasser"
        },
        {
            "asset": a001,
            "caption": "Füge Figur 'Fisch' hinzu:"
        },
        {
            "asset": a002,
            "caption": "Noch eine Figur: 'Apfel'"
        },
        {
            "asset": a003,
            "caption": "Lösche die Maus:"
        },
        {
            "asset": a05_01,
            "caption": "Los geht's beim Apfel:"
        },
        {
            "asset": ax01,
            "caption": "1. Block für den Apfel:"
        },
        {
            "asset": ax02,
            "caption": "2. Block für den Apfel:"
        },
        {
            "asset": a09,
            "caption": "Zufallszahlen hinzufügen"
        },
        {
            "asset": ax09,
            "caption": "Zahlen ändern"
        },
        {
            "asset": ax03,
            "caption": "3. Block für den Apfel:"
        },
        {
            "asset": astart,
            "caption": "Teste dein Programm:"
        },
        {
            "asset": asuper
        },
        {
            "asset": a004,
            "caption": "Nun zum Fisch:"
        },
        {
            "asset": a01,
            "caption": "Code für den Fisch Teil 1:"
        },
        {
            "asset": a02,
            "caption": "Wenn der Apfel berührt wird ...:"
        },
        {
            "asset": a03,
            "caption": "Nachricht, Ton, Bewegung"
        },
        {
            "asset": astart,
            "caption": "Teste dein Programm wieder:"
        },
        {
            "asset": a005,
            "caption": "Füge 2 mal Figur 'Pfeil' hinzu:"
        },
        {
            "asset": a006,
            "caption": "Wähle bei 'Pfeil': Kostüm 'links'"
        },
        {
            "asset": a007,
            "caption": "Bei 'Pfeil2': Kostüm 'rechts'"
        },
        {
            "asset": a008,
            "caption": "So sollen die Figuren aussehen:"
        },
        {
            "asset": ax10,
            "caption": "Ziehe die Figuren an ihren Platz:"
        },
        {
            "asset": ax05,
            "caption": "Code für 'Pfeil' links:"
        },
        {
            "asset": ax06,
            "caption": "Wähle 'Neue Nachricht'"
        },
        {
            "asset": ax07,
            "caption": "Gib 'links' ein:"
        },
        {
            "asset": aherz,
            "caption": "Kannst du rechts alleine?"
        },
        {
            "asset": ax08,
            "caption": "Code für 'Pfeil2' rechts:"
        },
        {
            "asset": a009,
            "caption": "Zurück zum Fisch:"
        },
        {
            "asset": axx09,
            "caption": "Um den Fisch zu steuern:"
        },
        {
            "asset": astart,
            "caption": "Teste dein Spiel"
        },
        {
            "asset": asuper,
            "caption": "Fertig. Du hast alle Lernspiele geschafft."
        },
        {
            "asset": aneu,
            "caption": "Mache dein eigenes Spiel mit +"
        },
        {
            "asset": a04,
            "caption": "Ideen findest du unter 'Beispiele'."
        }
    ],
    "blocks": [
        {
            "category": "motion",
            "blocks": [
                "movesteps",
                "turnright",
                "turnleft",
                "--",
                "goto",
                "gotoxy",
                "glideto",
                "glidesecstoxy",
                "--",
                "changexby",
                "setx",
                "changeyby",
                "sety"
            ]
        },
        {
            "category": "looks",
            "blocks": [
                "switchcostumeto",
                "nextcostume",
                "--",
                "changesizeby",
                "setsizeto",
                "--",
                "show",
                "hide",
                "--",
                "size"
            ]
        },
        {
            "category": "sound",
            "blocks": [
                "playuntildone"
            ]
        },
        {
            "category": "events",
            "blocks": [
                "whenflagclicked",
                "whenthisspriteclicked",
                "--",
                "whenbroadcastreceived",
                "broadcast",
                "broadcastandwait"
            ]
        },
        {
            "category": "control",
            "blocks": [
                "wait",
                "repeat",
                "forever",
                "--",
                "if",
                "if_else",
                "wait_until",
                "repeat_until",
                "--",
                "stop",
                "--",
                "start_as_clone",
                "create_clone_of",
                "delete_this_clone"
            ]
        },
        {
            "category": "sensing",
            "blocks": [
                "touchingobject",
                "--",
                "mousedown",
                "mousex",
                "mousey",
                "setdragmode",
                "--",
                "timer",
                "resettimer",
                "--",
                "of",
                "--",
                "current"
            ]
        },
        {
            "category": "operators",
            "blocks": [
                "random",
                "--",
                "gt",
                "lt",
                "equals",
                "--",
                "and",
                "or",
                "not"
            ]
        },
        {
            "category": "variables"
        }
    ]
}