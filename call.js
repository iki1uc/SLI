// call.js — Universal-Respo-Router

import { ANKER } from "../MODULE/anker.js";
import { RESPO_3ALL } from "../MODULE/3all.js";
import { RESPO_4ALL } from "../MODULE/4all.js";
import { RESPO_8ALL } from "../MODULE/8all.js";
import { RESPO_12ALL } from "../MODULE/12all.js";

export function CALL(input) {
    const msg = String(input || "");

    // 1) Universal-Respo-Form
    const respo = {
        ok: true,
        sys: "CALL",
        input: msg,
        len: msg.length,
        time: Date.now()
    };

    // 2) ANKER entscheidet, wohin es geht
    const route = ANKER(msg);

    // 3) Weiterleitung
    switch(route) {
        case "3all": return RESPO_3ALL(respo);
        case "4all": return RESPO_4ALL(respo);
        case "8all": return RESPO_8ALL(respo);
        case "12all": return RESPO_12ALL(respo);
        default:
            return {
                ...respo,
                sys: "CALL",
                info: "Kein Modul gefunden, bleibt CALL"
            };
    }
}

