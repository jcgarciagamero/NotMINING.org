chrome.browserAction.onClicked.addListener(function(tab) {
	var aviso = confirm("EN:\n Are you sure to try brute-force in this page? Maybe your browser freezes during the check. \n ES: \n ¿Estás seguro de ejecutar la detección por fuerza bruta? Puede que tu navegador se congele durante el chequeo. ");

	if(aviso){
		chrome.tabs.executeScript(null, {file: "isMining_bruteforce.js"});
	}
});
