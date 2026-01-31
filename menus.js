// MENUING
let buttons = document.getElementById("navbar").childNodes;
for (let i in buttons) {
	if (buttons[i].nodeName == "BUTTON" && buttons[i].id != "back") buttons[i].addEventListener("click", () => { // navbar button events
		for (let j in buttons) {
			if (buttons[j].nodeName == "BUTTON") buttons[j].classList.add("inactive"); // make other buttons inactive
		}
		buttons[i].classList.remove("inactive"); // make self button active
		// buttons[i].classList.add("active"); // not neccesary
		document.getElementById("back").classList.remove("inactive"); // make the back button appear
		//document.getElementById("back").classList.add("active");
		document.getElementById("canv").style.display = "none"; // hide -1
		for (let j in document.getElementsByClassName("main")[0].childNodes) { // do the thing !
			if (document.getElementsByClassName("main")[0].childNodes[j].nodeName == "DIV") {
				if (document.getElementsByClassName("main")[0].childNodes[j].id == buttons[i].id + "m") {
					document.getElementsByClassName("main")[0].childNodes[j].style.display = "block";
				} else {
					document.getElementsByClassName("main")[0].childNodes[j].style.display = "none";
				}
			}
		}
	});
}
document.getElementById("back").addEventListener("click", () => {
	for (let j in buttons) {
		if (buttons[j].nodeName == "BUTTON") buttons[j].classList.remove("inactive");
		//if (buttons[j].nodeName=="BUTTON") buttons[j].classList.remove("active");
	}
	//document.getElementById("back").classList.remove("active");
	document.getElementById("back").classList.add("inactive");
	document.getElementById("canv").style.display = "block";
	for (let j in document.getElementsByClassName("main")[0].childNodes) {
		if (document.getElementsByClassName("main")[0].childNodes[j].nodeName == "DIV") {
			document.getElementsByClassName("main")[0].childNodes[j].style.display = "none";
		}
	}
});

for (let j in document.getElementsByClassName("main")[0].childNodes) { // hide everything
	if (document.getElementsByClassName("main")[0].childNodes[j].nodeName == "DIV") {
		document.getElementsByClassName("main")[0].childNodes[j].style.display = "none";
	}
}

// use web font
let useWebFont = "false";
if (localStorage.getItem("useWebFont") === null) { // on refresh update local variable
	localStorage.setItem("useWebFont", "false"); // first time visiting? alright
} else {
	useWebFont = localStorage.getItem("useWebFont"); // firsrif //
}
document.getElementById("usewebfont").addEventListener("click", () => { // Click! CliClick the b! button!
	useWebFont = useWebFont=="true"?"false":"true";
	localStorage.setItem("useWebFont", useWebFont);
	location.reload();
});

// updateWebFonts
if (useWebFont == "true")
	document.head.innerHTML+=`<style>@font-face {  font-family: "MS Gothic";  src:url(./assets/fonts/msgothic-01.ttf);  }</style>`;
// i dont care, this is the best way to do it, fight me