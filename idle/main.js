console.log("Well, the page loaded, is this good?");
localStorage.setItem("one", "1");
console.log(Number(localstorage.getItem("one")));

var ua = window.navigator.userAgent;
var msie = ua.indexOf('MSIE ');
if (msie > 0) {
   // IE 10 or older => return version number
        alert("This browser does not support localStorage. Your game will not save.");
	}