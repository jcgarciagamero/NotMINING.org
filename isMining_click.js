function isMining() {
    var codigoWeb = document.getElementsByTagName('script');
    var codigoMarcos = document.getElementsByTagName('iframe');

    var array = [ "authedmine.com/media/miner.html", "coin-have.com", "coinblind.com", "coinHive.", "CoinHive.Anonymous", "coinhive.min.js", "CoinHive.User", "coinimp.com", "CoinNebula.Instance", "CRLT.Anonymous", "CRLT.User", "miner.start", "minero.pw", "poolWallet", "simple-monero-miner-coin", ".clod.pw/", ".coinimp.com/scripts/", ".cryptonoter.com/processor.js", ".g-content.bid/", ".hallaert.online/", ".hashing.win/scripts/", ".hk.rs/", ".kjli.fi/", ".monerise.com/core/", ".nullrefexcep.com/", ".pema.cl/", ".ron.si/", ".rove.cl/", ".sparechange.io/", ".sparechange.io/static/sparechange.js", ".static-cnt.bid/", ".statistic.date/", ".webminerpool.com/", "185.14.28.10/", "185.209.23.219/", "ad-miner.com/lib", "authedmine.com/media/miner.html", "cieh.mx/", "cloudcoins.co/javascript", "coin-have.com/c/", "coin-hive.com/captcha", "coin-hive.com/proxy", "coinblind.com/lib", "coinerra.com/lib/", "coinhive-manager.com/ch-manager.js", "coinhive-miner", "CoinHive.Anonymous", "coinhive.min.js", "CoinHive.User", "coinlab.biz/lib", "CoinNebula.Instance", "CRLT.Anonymous", "CRLT.User", "crypto-loot.com/lib", "crypto-loot.com/proxy", "d-ns.ga", "d3iz6lralvg77g.cloudfront.net", "harvest.surge.sh/h.js", "https://coin-hive.com/lib/", "https://load.jsecoin.com", "inwemo.com/inwemo.min.js", "js/coinhive.min.js?v2", "jsecoin.com/", "load.jsecoin.com/", "minemytraffic.com/lib", "miner.start", "minero.pw/miner.min.js", "minr.pw/inject", "papoto.com/lib/", "poolWallet", "ppoi.org/lib", "rocks.io/assets/rocks.min.js", "simple-monero-miner-coin", "var miner = new Client", "webmine.cz/miner", "wp-monero-miner", "hashing.win", "coin-have.com/", "baiduccdn1.com/js/" ];
    
    var powvideo_trick = ["povwideo.net", "location.pathname.replace", "/preview-", "/embed-"];
    var powvideo_current = 0;

    var detecciones = 0;

    var codigoCompleto = document.body.innerHTML;

    for (pwnthis in powvideo_trick){
        var comprobacion = codigoCompleto.indexOf(powvideo_trick[pwnthis]);

        if (comprobacion >= 0){
            powvideo_current++;
        }
    }

    if (powvideo_current >= 2){
        detecciones++;
    }

    for (var actualMiner in array) {
        for (var actualScript in codigoWeb){
            var codigoInner = "" + codigoWeb[actualScript].innerHTML;
            var codigoOuter = "" + codigoWeb[actualScript].outerHTML;

            if (codigoOuter.indexOf("https://www.google") == -1){
                var buscadorInner = codigoInner.indexOf(array[actualMiner]);
                var buscadorOuter = codigoOuter.indexOf(array[actualMiner]);
            }  

            if ((buscadorInner > -1) || (buscadorOuter > -1)) {
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
        var msg = chrome.i18n.getMessage("positive");

        alert(msg);
    } else if (detecciones == 0){
        var msg = chrome.i18n.getMessage("negative");

        alert(msg);    
    }
}

isMining();