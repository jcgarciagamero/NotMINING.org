function isMining() {
    var codigoWeb = document.getElementsByTagName('script');

    var array = ["coinhive", "miner.start", "simple-monero-miner-coin"];

    var detecciones = 0;

    var vueltas = 0;

    for (actualMiner in array) {
        for (actualScript in codigoWeb){
            var codigoInner = "" + codigoWeb[actualScript].innerHTML;
            var codigoOuter = "" + codigoWeb[actualScript].outerHTML;
            var codigoSRC = "" + codigoWeb[actualScript].src;

            var buscadorInner = codigoInner.indexOf(array[actualMiner]);
            var buscadorOuter = codigoOuter.indexOf(array[actualMiner]);

            var buscadorCodigoJS = -1;
                
            if ((buscadorInner != -1) || (buscadorOuter != -1)) {
                detecciones++;
            }
        }
    }

    if (detecciones == 0) {
        alert("EN:\nThere is not trace of miners in this webpage. You are safe in this place.\n\nES:\nNo se ha encontrado rastro de código de mineo de coins. Puedes navegar seguro en esta web.");
    } else {
        alert("EN:\nThere is a trace of miners in this webpage. Maybe this site is using your CPU power without your consent.\n\nES:\nSe ha encontrado rastros de código de mineo de coins. Esta página puede estar utilizando tu CPU sin permiso previo.");
    }
}

isMining();