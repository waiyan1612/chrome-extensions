// https://stackoverflow.com/a/9517879
var s = document.createElement('script');
s.src = chrome.runtime.getURL('mm-embassy.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
