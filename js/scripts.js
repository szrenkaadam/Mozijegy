function szamolas() {
    let szam = parseInt(document.getElementById("szam").value)
    let sor = parseInt(document.getElementById("sor").value)
    let eredmeny = 0 


    if (sor < 16) {
        eredmeny * 1500

    } else if (sor < 21 ) {
        eredmeny * 1700

    } else if (sor < 26) {
        eredmeny * 2000

    }

    kiiras.innerText = ` Összesen: ${eredmeny} * ${szam} Ft `
}