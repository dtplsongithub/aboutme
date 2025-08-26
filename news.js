let siteNews = [
	`<h4>26 August 2025</h4>
	Fixed "Expected color but found 'null'"<br>
	You can now use the website font if you don't already have MS Gothic font (<a href="./assets/fonts/msgothic-01-preview.png">preview</a>) installed<br>
	Cleaned up code (a lot)<br>
	Fancy Buttons!`,
	`<h4>23 August 2025</h4>
	Added news!<br>
	And also stuff I made in previous years!`
];
let siteNewsSelected = 0;
let siteNewsElement;
let siteNewsUpdate = (() => { newsElement = document.getElementById("news").innerHTML = siteNews[siteNewsSelected] });
let buttonStatusUpdate = (() => {
	// everything is active by default
	document.getElementById("first").classList.remove("controlinactive");
	document.getElementById("prev").classList.remove("controlinactive");
	document.getElementById("last").classList.remove("controlinactive");
	document.getElementById("next").classList.remove("controlinactive");
	if (siteNewsSelected == 0) {
		document.getElementById("last").classList.add("controlinactive");
		document.getElementById("next").classList.add("controlinactive");
	}
	else if (siteNewsSelected == siteNews.length-1) {
		document.getElementById("first").classList.add("controlinactive");
		document.getElementById("prev").classList.add("controlinactive");
	}
});
siteNewsUpdate();
buttonStatusUpdate();

document.getElementById("first").addEventListener("click", () => {
	siteNewsSelected = siteNews.length-1;
	siteNewsUpdate();
	buttonStatusUpdate();
})
document.getElementById("prev").addEventListener("click", () => {
	siteNewsSelected++;
	if (siteNewsSelected >= siteNews.length) siteNewsSelected = siteNews.length-1;
	siteNewsUpdate();
	buttonStatusUpdate();
})
document.getElementById("next").addEventListener("click", () => {
	siteNewsSelected--;
	if (siteNewsSelected <= -1) siteNewsSelected = 0;
	siteNewsUpdate();
	buttonStatusUpdate();
})
document.getElementById("last").addEventListener("click", () => {
	siteNewsSelected = 0;
	siteNewsUpdate();
	buttonStatusUpdate();
})