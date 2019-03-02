
var check = document.getElementById("togBtn");

check.onclick = function() {
    // document.getElementById("hello").innerHTML = "poda";

    

    if(check.checked){
        // alert("checked");
        chrome.tabs.insertCSS({file:"quora.css"});
    }
    else{

        // alert("unchecked");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.reload(tabs[0].id);
          });
    }
}