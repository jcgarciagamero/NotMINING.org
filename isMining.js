function isMining() {
    var codigoWeb = document.getElementsByTagName('script');

    var array = ["miner.start", "coinhive.min.js", "simple-monero-miner-coin"];

    var detecciones = 0;

    for (actualMiner in array) {
        for (actualScript in codigoWeb)
            var buscadorInner = codigoWeb[actualScript].innerHTML.indexOf(array[actualMiner]);
            var buscadorOuter = codigoWeb[actualScript].outerHTML.indexOf(array[actualMiner]);
                
            if ((buscadorInner != -1) || (buscadorOuter != -1)) {
                detecciones++;
            }
    }
    
    if (detecciones > 0) {
                alert("EN:\nThere is a trace of miners in this webpage. Maybe this site is using your CPU power without your consent.\n\nES:\nSe ha encontrado rastros de código de minado de criptomoneda. Esta página puede estar utilizando tu CPU sin permiso previo.");
    }
}

isMining();