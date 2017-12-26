function isMining() {
    var codigoWeb = document.getElementsByTagName('script');
    var codigoMarcos = document.getElementsByTagName('iframe');

    var array = ["authedmine.com/media/miner.html", "miner.start", "simple-monero-miner-coin", "coinHive.", "coinhive.min.js", "poolWallet", "CoinHive.Anonymous", "CoinHive.User", "CRLT.Anonymous", "CRLT.User", "coin-have.com"];
    
    var detecciones = 0;

    for (var actualMiner in array) {
        for (var actualScript in codigoWeb){
            var codigoInner = "" + codigoWeb[actualScript].innerHTML;
            var codigoOuter = "" + codigoWeb[actualScript].outerHTML;

            var buscadorInner = codigoInner.indexOf(array[actualMiner]);
            var buscadorOuter = codigoOuter.indexOf(array[actualMiner]);
                
            if ((buscadorInner != -1) || (buscadorOuter != -1)) {
                detecciones++;
            }
        }
    }

    for (var actualMiner in array) {
        for (var actualMarco in codigoMarcos){
            var codigoSRC = "" + codigoMarcos[actualMarco].src;
            var codigoFramesOuter = "" + codigoMarcos[actualMarco].outerHTML;

            var buscadorSRC = codigoSRC.indexOf(array[actualMiner]);
            var buscadorOuter = codigoFramesOuter.indexOf(array[actualMiner]);
                
            if (buscadorSRC != -1) {
                detecciones++;
            }

            if (buscadorOuter != -1) {
                detecciones++;
            }
        }
    }

    if (detecciones > 0) {
        alert("EN:\nThere is a trace of cryptominers in this webpage. Maybe this site is using your CPU power without your consent.\n\nES:\nSe ha encontrado rastros de código de minado de criptomoneda. Esta página puede estar utilizando tu CPU sin permiso previo.");
    } else if (detecciones == 0){
        alert("EN:\nThere is not trace of cryptominers in this webpage. You are safe in this place.\n\nES:\nNo se ha encontrado rastro de código de minado de criptomoneda. Puedes navegar seguro en esta web.");
    }
}

isMining();