// anker.js — entscheidet wohin CALL geht

export function ANKER(msg) {
    const m = msg.toLowerCase();

    if (m.includes("3") || m.includes("tri") || m.includes("three"))
        return "3all";

    if (m.includes("4") || m.includes("quad") || m.includes("four"))
        return "4all";

    if (m.includes("8") || m.includes("oct") || m.includes("eight"))
        return "8all";

    if (m.includes("12") || m.includes("doz") || m.includes("twelve"))
        return "12all";

    return "none";
}

