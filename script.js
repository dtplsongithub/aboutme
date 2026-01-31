let c = document.getElementsByTagName("canvas")[0];
let load = document.getElementById("e");
let ctx = c.getContext("2d");
const FPS = 60;
c.height = 400;

//set things up for canvas
let wc = c.width / 2;
let hc = c.height / 2;
let t = 0;

let splashes = [
	"this is a splash",
	"real!!",
	"unreal...",
	"i forgor",
	"there are currently a total of ${splash.length+1} splashes",
	"click here to win absolutely nothing",
	"http response status code 102 is a processing reference",
	"also try hexahedron1's website!",
	"also try slinx92's website!",
	"also try ponali's website!",
	"fun fact: this was inspired by gdplayer's website",
	"I REMBER",
	"hey do you guys have any good splashes",
	"splish splash splosh",
	"no",
	"⚠️ Expected color but found 'null'.",
	"da pot să vorbesc și română, evident",
	"i cost a hydrant",
	"do try this at home!",
	"get out",
	"WELCOME TO THE BIG 2025!!!1!1!",
	"yes?",
	"this website was originally made in a website. crazy isnt it?",
	"my screen is flickering when i use visual studio code can someone help",
	"This website glows in the dark!",
	"some jokes are stolen from orteil, but thats just because i have been playing a lot of cookie clicker lately.",
	"oh thanks for reading this i guess",
	"WHO ARE YOU WHY ARE YOU HERE",
	"this website is very poorly made, dont trust me? try opening it in mobile!",
	"500 cigarettes",
	"don't you have something better to do?",
	"bababababababababababababa",
	"",
	"click this to breathe",
	"do NOT click this under any circumstances.",
	"i forgot what happens when you do click the splash tho",
	"fier",
	"you know what else is massi- wait no get out of my head",
	"sorry for some of the splashes",
	"no way for me to fix that",
	"d",
	"did you get the empty splash yet?",
	"lol im on the left                                                                 ",
	"                                                                 lol im on the right",
	"lol i am centered",
	"the quick brown fox jumps over the lazy dog",
	"MS Gothic is the best font, change my mind.",
	"SHUT UP \"DUBMOOD - YOU CAN DO IT (BUT NOT LIKE WE DO IT)\" IS PLAYING",
	// ah shit just remove the splash
	"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
	"pma pma pma pma tou pma pma tei pma pma pma pma tou pma tee toww pam t'r'r'r pma pma tou pma pma tei tch papa tch pe pe tch papa pa pepepepe pepe pe",
	"324342342342343243tegergergwerherhherhehhtrknhttrnrtlnrgnlrenlrenglnrnlglnergnlernlneveflvdmvfnmv,nvmnvmvfge",
	"no i dont really feel like it",
	"yes i really DO feel like it !!!1!!11",
	"e - the sequel to d",
	"coming soon to stores near hungary",
	"i may be able to",
	"i mayn't be able to",
	"nibbles",
	"заткнись 🔇☝️🤫🤐 курица 🐔😂😂",
	"Oh My God It's Loading Sources",
	"Hold On Don't Leave It's Loading Sources",
	"Wait",
	"Oh My God Loacl Storage Dorks",
	"GUIVO 2: The Return Of Xethalon",
	"this part is the best part because it has the most part",
	"my pronouns are C-3 G-3 C-4/B-3 G-3",
	"The level is video",
	"EVERYONE HAS NO NAME HAIR",
	"Endian",
	"kubé",
	"Also try Minecraft!",
	"Also try Minec...wait this ain't terraria",
	"suere ydah",
	"ă",
	"why did bro sign ouo ngis orb did yhw",
	"Wadduyu meen i knoWAA",
	"debian residence",
	"HELLO MARI TWO",
	"Fizzing",
	"WHAT ARE-",
	"if you saw a splash about 2025 please disregard it, focus on the present! 2026! (cant wait for this to become dated too)",
	"make a song wr newgroundsupload% world record (65 min)",
	"TOO MANY HORSES"
];
splashes.push(`there are currently a total of ${splashes.length + 3} splashes`);
splashes.push(`there is a ${(100 / (splashes.length + 2)).toFixed(2)}% chance of you getting this splash. consider yourself lucky! or not, i dont know.`);
splashes.push(`there is a ${(100 / (splashes.length + 1) / (splashes.length + 1)).toFixed(4)}% chance of you getting any splash twice in a row. if you did, consider yourself EXTRA lucky!`);
let randomSplash = splashes[Math.floor(Math.random() * (splashes.length))];

var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
if (isMobile) {
	document.getElementById("e").innerHTML = "You are on phone. this site is not mobile-friendly. :/ sorry";
} else {
	setInterval(update, 1000 / FPS);
	load.parentNode.removeChild(load); // basically deletes itself
}

function update() {
	t += 0.01;
	c.width = innerWidth - 47;
	wc = c.width / 2;
	hc = c.height / 2;
	let gradient = ctx.createLinearGradient(wc, 0, wc, c.height);
	gradient.addColorStop(0, "white");
	gradient.addColorStop(0.15, `#${(Math.floor(Math.sin(-t * 4.4) * 25 + 25) + "").padStart(2, "0")}0066`);
	gradient.addColorStop(0.85, `#${(Math.floor(Math.sin(t * 4.4) * 25 + 25) + "").padStart(2, "0")}0066`);
	gradient.addColorStop(1, "white");

	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, c.width, c.height);
	//bars
	ctx.fillRect(0, Math.sin(t * 4) * 220 + hc - 30, c.width, 60);
	let gradient2 = ctx.createLinearGradient(wc, Math.sin(t * 5) * 70 + hc - 20, wc, Math.sin(t * 5) * 70 + hc + 20);
	gradient2.addColorStop(0, "#00000000");
	gradient2.addColorStop(0.5, `#${(Math.floor(Math.sin(t * 4.54) * 49 + 49) + "").padStart(2, "0")}00ff88`);
	gradient2.addColorStop(1, "#00000000");
	ctx.fillStyle = gradient2;
	ctx.fillRect(0, Math.sin(t * 5) * 70 + hc - 20, c.width, 40);

	let gradient3 = ctx.createLinearGradient(wc, Math.sin(t * 3) * 70 + hc - 20, wc, Math.sin(t * 3) * 70 + hc + 20);
	gradient3.addColorStop(0, "#00000000");
	gradient3.addColorStop(0.5, `#${(Math.floor(Math.sin(t * 4.29) * 49 + 49) + "").padStart(2, "0")}00ff88`);
	gradient3.addColorStop(1, "#00000000");
	ctx.fillStyle = gradient3;
	ctx.fillRect(0, Math.sin(t * 3) * 70 + hc - 20, c.width, 40);

	renderText(wc, 25, "about me", "28px MS Gothic", 17, 0, 2, 7, 0.07, t, "n", [20, 90, 100], "#000");
	renderText(wc + Math.sin(t / 2 + 120) * 30, hc - 50, "hi there!", "48px MS Gothic", 26, 12, 6, 7, 0.07, t, "h", [0, 50, 75], "#000");
	renderText(wc + Math.sin(t / 3) * 15, hc, "im d. also known as dtpls or dateplays.", "32px MS Gothic", 21, 6, 4, 7, 0.07, t, "s", [Math.sin(t * 15) * 15 + 240, 60, 0], null, 99);
	renderText(wc + Math.sin(t) * 25, hc + 50, "welcome to my about me page", "32px MS Gothic", 21, 6, 4, 7, 0.07, t, "h", [0, 60, 75]);
	renderText(wc, c.height - 20, randomSplash, "16px MS Gothic", 12, 0, 2, 4, 0.1, t, "n", null, "#000");

}
function shadowText(x, y, color, text, styler, shadowOffset) {
	ctx.font = styler;
	// shadow
	ctx.fillStyle = "#00000099";
	ctx.fillText(text, x + shadowOffset, y + shadowOffset);
	//actual text render
	ctx.fillStyle = color;
	ctx.fillText(text, x, y);
}

function renderText(x, y, text, style, spacing, shadowOffset, xm, xf, xo, time, colorType, hsbColor, staticColor, xco) {
	// colors should be written as h,s,b except for staticColor
	let splittext = text.split('');
	let tx = 0;
	let ty = 0;
	let tempcolor = 0;
	for (let i = 0; i < text.length; i++) {
		tx = (i * spacing + x) - (spacing - 2) * text.length / 2 - spacing - 2;
		ty = ((Math.sin((time + xo * i) * xf) * xm) + y);
		if (colorType == "n") {
			tempcolor = staticColor;
		} else if (colorType == "h") {
			tempcolor = hslToHex(time * 100 % 360 + i * (xco == null ? 0 : xco), hsbColor[1], hsbColor[2]);
		} else if (colorType == "s") {
			tempcolor = hslToHex(hsbColor[0], hsbColor[1], Math.sin(time * xf) * 12 + 82)
		} else {
			tempcolor = staticColor;
			console.warn("bad colorType: \"" + colorType + "\" !");
		}
		shadowText(tx, ty, tempcolor, splittext[i], style, shadowOffset);
	}
}

function hslToHex(h, s, l) {
	l /= 100;
	const a = s * Math.min(l, 1 - l) / 100;
	const f = n => {
		const k = (n + h / 30) % 12;
		const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
		return Math.round(255 * color).toString(16).padStart(2, '0');
	};
	return `#${f(0)}${f(8)}${f(4)}`;
}