let siteNews = [
	`<h4>2025 September 6</h4>
	(myself) ep.04 :)`,
	`<h4>2025 August 27</h4>
	added the news from previous years	`,
	`<h4>2025 August 26 (again)</h4>
	Fixed most links (i say most because i could not find RMTROLLBOX anymore)<br>
	I plan on adding news from wayy before I added news. It's possible because of github commit and also replit history.`,
	`<h4>2025 August 26</h4>
	Fixed "Expected color but found 'null'"<br>
	You can now use the website font if you don't already have MS Gothic font (<a href="./assets/fonts/msgothic-01-preview.png">preview</a>) installed<br>
	Cleaned up code (a lot)<br>
	Fancy Buttons!`,
	`<h4>2025 August 23</h4>
	Added news!<br>
	And also stuff I made in previous years!`,
	`<h4>2025 August 21</h4>
	added font, maze screnshots, basalt, (myself), and other stuff`,
	`<h4>2025 August 20</h4>
	test`,
	`<h4>2025 August 16</h4>
	<a href="./13.wav">test</a>`,
	`<h4>2025 April 23</h4>
	test`,
	`<h4>2025 April 17</h4>
	new background! its cool isnt it<br>
	also added other stuff i've made (plot twist: it was always empty and "coming soon")`,
	`<h4>2025 January 16</h4>
	updated timeline`,
	`<h4>2024 May 11</h4>
	bug fixes.`,
	`<h4>2024 May 10</h4>
	<b>MASSIVE SITE REDESIGN!!!</b>`,
	`<h4>2024 February 21</h4>
	fixed a link`,
	`<h4>2024 February 20</h4>
	completely banished scratch, and any reference of it.<br>
	(dont worry i added it back a year later :)))))`,
	`<h4>2024 February 19</h4>
	<b>MOVED TO GITHUB!!!</b><br>
	Added PLACEHOLDERNAME game`,
	`<h4>2023 December 15</h4>
	updated some stuff`,
	`<h4>2023 November 4</h4>
	i made smth in arduino`,
	`<h4>2023 October 27-28</h4>
	tweaks`,
	`<h4>2023 October 26</h4>
	Site redesign!!`,
	`<h4>2023 August 22</h4>
	Working with ilovelampadaire to make chaoszone (no link available)<br>
	more site modifications. i don't know what though. i'll check later`,
	`<h4>2023 August 4</h4>
	SITE REDESIGN!! ADDED CANVAS!!
	Updated the description for HEXEc<br>
	Added my youtube channel (because i just created it)<br>
	+ my friends' socials<br>
	+ radixsort`,
	`<h4>2022 January 4</h4>
	added other stuff i made`,
	`<h4>2022 January 3</h4>
	Site launch!<br>
	Only my socials and what I'm working are available`
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