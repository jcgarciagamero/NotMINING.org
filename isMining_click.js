﻿function isMining() {
    var codigoWeb = document.documentElement.outerHTML;

    var array = ["miner.start", "coinhive.min.js", "simple-monero-miner-coin"];

    var detecciones = 0;

    for (actual in array) {
        var buscador = codigoWeb.indexOf(array[actual]);
        if (buscador != -1) {
            detecciones++;
        }
    }

    if (detecciones == 0) {
        alert("EN:\nThere is not trace of miners in this webpage. You are safe in this place.\n\nES:\nNo se ha encontrado rastro de código de mineo de coins. Puedes navegar seguro en esta web.");
    } else {
        alert("EN:\nThere is a trace of miners in this webpage. Maybe this site is using your CPU power without your consent.\n\nES:\nSe ha encontrado rastros de código de mineo de coins. Esta página puede estar utilizando tu CPU sin permiso previo.");
    }
}

isMining();