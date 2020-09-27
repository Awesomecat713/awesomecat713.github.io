console.log("Well, the page loaded, is this good?");
localStorage.setItem("one", "1");
console.log(Number(localstorage.getItem("one")));

if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
{
	alert("Sorry! Idle doesn't support mobile yet.")
}
else
{
	// Get the user-agent string 
	let userAgentString =  
		navigator.userAgent; 

	// Detect Chrome 
	let chromeAgent =  
		userAgentString.indexOf("Chrome") > -1; 

	// Detect Internet Explorer 
	let IExplorerAgent =  
		userAgentString.indexOf("MSIE") > -1 ||  
		userAgentString.indexOf("rv:") > -1; 

	// Detect Firefox 
	let firefoxAgent =  
		userAgentString.indexOf("Firefox") > -1; 

	// Detect Safari 
	let safariAgent =  
		userAgentString.indexOf("Safari") > -1; 
		  
	// Discard Safari since it also matches Chrome 
	if ((chromeAgent) && (safariAgent))  
		safariAgent = false; 

	// Detect Opera 
	let operaAgent =  
		userAgentString.indexOf("OP") > -1; 
		  
	// Discard Chrome since it also matches Opera      
	if ((chromeAgent) && (operaAgent))  
		chromeAgent = false;
				
	if (chromeAgent)
	{
		alert("Chrome supports Idle, and only very old versions do not. Please check if Chrome is above version 4.")
	}
	else if (IExplorerAgent)
	{
		alert("Please consider switching to a different browser, the game might not work the way it's supposed to on IE.")
	}
	else if (firefoxAgent)
	{
		alert("Firefox supports Idle from versions 3.5+. Consider checking if your browser is up to date.")
	}
	else if (/Edge/.test(navigator.userAgent)) 
	{
		alert("Edge supports Idle!");
	}
	else if (safariAgent)
	{
		alert("Are you above version 4? Awesome! You can play Idle.")
	}
	else
	{
		alert("Only newer versions of Opera support this site. Please consider updating to a newer version above 10.5 if you are below version 10.5.")
	}
}
	