import aL03 from './assets/L03.png';
import a001 from '../shared_assets/start.png';
import ax001 from './assets/x001.png';
import a003 from '../shared_assets/start.png';
import astart from '../shared_assets/start.png';
import astop from '../shared_assets/stop.png';
import a004 from './assets/004.png';
import a005 from './assets/005.png';
import a006 from './assets/006.png';
import a008 from './assets/008.png';
import ax008 from './assets/x008.png';
import ax002 from './assets/x002.png';
import ax003 from './assets/x003.png';
import ax004 from './assets/x004.png';
import ax005 from './assets/x005.png';
import ax007 from './assets/x007.png';
import ax14 from './assets/x14.png';
import agut_gemacht from '../shared_assets/gut_gemacht.png';
import aspeichern from '../shared_assets/speichern.png';
import asuper from '../shared_assets/super.png';

export default {
    id: '03',
    name: 'Die Maus tanzt!',
    subtitle: '03 Schleifen',
    image: aL03,
    "slides": [
        {
            "asset": aL03,
            "caption": "Du programmierst:"
        },
        {
            "asset": a001,
            "caption": "Füge Ton 'Disko' hinzu:"
        },
        {
            "asset": ax001,
            "caption": "⬅  Das Musik-Programm:"
        },
        {
            "asset": a003,
            "caption": "⬅ Bei Klang, wähle Disko:"
        },
        {
            "asset": astart,
            "caption": "Starte die Disko:"
        },
        {
            "asset": astop,
            "caption": "Stoppe mit:"
        },
        {
            "asset": a004,
            "caption": "1. Füge Kostüm 'Tanzt-2' hinzu"
        },
        {
            "asset": a005,
            "caption": "2. Füge Kostüm 'Sprung-2' hinzu"
        },
        {
            "asset": a006,
            "caption": "3. Füge Kostüm 'Sprung-3' hinzu"
        },
        {
            "asset": a008,
            "caption": "Lösche Kostüm 'Blinzelt'"
        },
        {
            "asset": ax008,
            "caption": "⬅ Jetzt das Tanz-Programm:"
        },
        {
            "asset": ax002,
            "caption": "⬅ Außen: 'für immer'"
        },
        {
            "asset": ax003,
            "caption": "⬅ Innen: zwei mal '10-mal'"
        },
        {
            "asset": ax004,
            "caption": "⬅ Ändere die Zahlen:"
        },
        {
            "asset": ax005,
            "caption": "⬅ 1. Tanz-Schleife:"
        },
        {
            "asset": astart,
            "caption": "Teste den Tanz:"
        },
        {
            "asset": ax007,
            "caption": "⬅ 2. Tanz-Schleife: Sprung"
        },
        {
            "asset": ax14,
            "caption": "⬅ Ändere die Zahl:"
        },
        {
            "asset": astart,
            "caption": "Teste noch mal:"
        },
        {
            "asset": agut_gemacht,
            "caption": "Jetzt du! Ändere, wie du magst"
        },
        {
            "asset": aspeichern,
            "caption": "⬆️ Denke ans Speichern!"
        },
        {
            "asset": asuper,
            "caption": "Fertig. 👣 Stehe auf und tanze"
        }
    ],
    "nextGame": "04",
    "blocks": [
        {
            "category": "motion",
            "blocks": [
                "movesteps",
                "turnright",
                "turnleft",
                "--",
                "glideto"
            ]
        },
        {
            "category": "looks",
            "blocks": [
                "switchcostumeto",
                "nextcostume"
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
                "whenthisspriteclicked"
            ]
        },
        {
            "category": "control",
            "blocks": [
                "wait",
                "repeat",
                "forever"
            ]
        }
    ]
}