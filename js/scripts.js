function szamolas() {
    let darab = parseInt(document.getElementById("darab").value)
    let sor = parseInt(document.getElementById("sor").value)
    let fizetendo = 0
    let jegyar = 0

    if (sor < 16) {
        jegyar = 1500
    } else if (sor < 21) {
        jegyar = 1700
    } else {
        jegyar = 2000
    }

    fizetendo = jegyar * darab

    kiiras.innerText = ` Összesen: ${fizetendo} Ft `
}