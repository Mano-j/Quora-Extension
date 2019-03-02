var quoraCss = document.createElement("link");
quoraCss.type = "text/css";
quoraCss.rel = "stylesheet";
var src = chrome.extension.getURL("quoraWithoutComments.css");
console.log(src);
quoraCss.href = src;

// document.body.appendChild(quoraCss);

// chrome.tabs.insertCSS({file:"style.css"});


// chrome.browserAction.onClicked.addListener(function(tab) {
//     chrome.tabs.insertCSS({file:"style.css"});
//   });