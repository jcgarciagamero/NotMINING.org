function isMining() {
    var codigoWeb = document.getElementsByTagName('script');

    var array = ["coinhive", "miner.start", "simple-monero-miner-coin"];

    var detecciones = 0;

    for (actualScript in codigoWeb){    
        var codigoSRC = "" + codigoWeb[actualScript].src;

        if (!codigoSRC == undefined){
            var oReq = new XMLHttpRequest();
            var codigoJS = "";

            oReq.open("GET", codigoSRC, true);
            oReq.onload = function(e) {
                codigoJS += oReq.responseText; 
            }
            oReq.send();

            for (actualMiner in array) {
                var buscadorCodigoJS = codigoJS.indexOf(array[actualMiner]);

                if ((buscadorCodigoJS != -1)) {
                    detecciones++;
                }
            }
        }
    }

    if (detecciones > 0) {
        alert("EN:\nThere is a trace of miners in this webpage. Maybe this site is using your CPU power without your consent.\n\nES:\nSe ha encontrado rastros de código de minado de criptomoneda. Esta página puede estar utilizando tu CPU sin permiso previo.");
    }
}

isMining();