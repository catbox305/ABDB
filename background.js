chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "changeDom.js"});
	chrome.tabs.executeScript(null, {file: "downloadPage.js"});
	
});
