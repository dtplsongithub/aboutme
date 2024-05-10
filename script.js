let c = document.getElementsByTagName("canvas")[0];
let load = document.getElementById("e");
let ctx = c.getContext("2d");
const FPS = 60;
c.height = 400;

//set things up for canvas
let wc = c.width / 2;
let hc = c.height / 2;
let t = 0;

// MENUING
let buttons = document.getElementById("navbar").childNodes;
for (let i in buttons) {
  if (buttons[i].nodeName=="BUTTON" && buttons[i].id != "back") buttons[i].addEventListener("click", () => {
    for (let j in buttons) {
      if (buttons[j].nodeName=="BUTTON") buttons[j].classList.add("inactive");
    }
    buttons[i].classList.remove("inactive");
    // buttons[i].classList.add("active");
    document.getElementById("back").classList.remove("inactive");
    //document.getElementById("back").classList.add("active");
    document.getElementById("-1m").style.display = "none";
    for (let j in document.getElementsByClassName("main")[0].childNodes) {
      if (document.getElementsByClassName("main")[0].childNodes[j].nodeName == "DIV") {
        if (document.getElementsByClassName("main")[0].childNodes[j].id == buttons[i].id) {
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
    if (buttons[j].nodeName=="BUTTON") buttons[j].classList.remove("inactive");
    //if (buttons[j].nodeName=="BUTTON") buttons[j].classList.remove("active");
  }
  //document.getElementById("back").classList.remove("active");
  document.getElementById("back").classList.add("inactive");
  document.getElementById("-1m").style.display = "block";
  for (let j in document.getElementsByClassName("main")[0].childNodes) {
    if (document.getElementsByClassName("main")[0].childNodes[j].nodeName == "DIV") {
      document.getElementsByClassName("main")[0].childNodes[j].style.display = "none";
    }
  }
});
for (let j in document.getElementsByClassName("main")[0].childNodes) {
  if (document.getElementsByClassName("main")[0].childNodes[j].nodeName == "DIV") {
    document.getElementsByClassName("main")[0].childNodes[j].style.display = "none";
  }
} // hide everything
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
  "привет",
  "no",
  "да я сейчас могу говорить по-русски, но я ещё учусь.",
  "⚠️ Expected color but found 'null'.",
  "da pot să vorbesc și română, evident",
  "i cost a hydrant",
  "yes this website DID get recently remade"
];
splashes.push(`there are currently a total of ${splashes.length+2} splashes`);
splashes.push(`there is a ${(100/(splashes.length+1)).toFixed(2)}% chance of you getting this splash. consider yourself lucky!`);
let randomSplash = splashes[Math.floor(Math.random()*(splashes.length))];

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
  gradient.addColorStop(0.15, `#${(Math.floor(Math.sin(-t*4.4)*25+25)+"").padStart(2, "0")}0066`);
  gradient.addColorStop(0.85, `#${(Math.floor(Math.sin(t*4.4)*25+25)+"").padStart(2, "0")}0066`);
  gradient.addColorStop(1, "white");

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, c.width, c.height);
  //bars
  ctx.fillRect(0, Math.sin(t * 4) * 220 + hc - 30, c.width, 60);
  let gradient2 = ctx.createLinearGradient(wc, Math.sin(t * 5) * 70 + hc - 20, wc, Math.sin(t * 5) * 70 + hc + 20);
  gradient2.addColorStop(0, "#00000000");
  gradient2.addColorStop(0.5, `#${(Math.floor(Math.sin(t*4.54)*49+49)+"").padStart(2, "0")}00ff88`);
  gradient2.addColorStop(1, "#00000000");
  ctx.fillStyle = gradient2;
  ctx.fillRect(0, Math.sin(t * 5) * 70 + hc - 20, c.width, 40);
  
  let gradient3 = ctx.createLinearGradient(wc, Math.sin(t * 3) * 70 + hc - 20, wc, Math.sin(t * 3) * 70 + hc + 20);
  gradient3.addColorStop(0, "#00000000");
  gradient3.addColorStop(0.5, `#${(Math.floor(Math.sin(t*4.29)*49+49)+"").padStart(2, "0")}00ff88`);
  gradient3.addColorStop(1, "#00000000");
  ctx.fillStyle = gradient3;
  ctx.fillRect(0, Math.sin(t * 3) * 70 + hc - 20, c.width, 40);
  
  writeint(wc, 25, "about me", "28px MS Gothic", 17, 0, 2, 7, 0.07, t, "n", [20, 90, 100], "#000");
  writeint(wc + Math.sin(t / 2 + 120) * 30, hc - 50, "hi there!", "48px MS Gothic", 26, 12, 6, 7, 0.07, t, "h", [0, 50, 75], "#000");
  writeint(wc + Math.sin(t / 3) * 15, hc, "im d. also known as dtpls or dateplays.", "32px MS Gothic", 21, 6, 4, 7, 0.07, t, "s", [Math.sin(t * 15) * 15 + 240, 60, 0], null);
  writeint(wc + Math.sin(t) * 25, hc + 50, "welcome to my about me page", "32px MS Gothic", 21, 6, 4, 7, 0.07, t, "h", [0, 60, 75], null);
  writeint(wc, c.height-20, randomSplash, "16px MS Gothic", 12, 0, 2, 4, 0.1, t, "n", [20, 90, 100], null);

}
function textwsh(x, y, color, text, styler, shadoOffset) {
  ctx.font = styler;
  // shadow
  ctx.fillStyle = "#00000099";
  ctx.fillText(text, x + shadoOffset, y + shadoOffset);
  //actual text render
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
}

function writeint(x, y, text, style, spacing, shadoOffset, sinmulti, speed, obt, time, colorstyle, color1, ncolor) {           // colors should be written as h,s,b except for ncolor
  let splittext = text.split('');
  let tempx = 0;
  let tempy = 0;
  let tempcolor = 0;
  if (colorstyle == "n") {
    tempcolor = ncolor;
  } else if (colorstyle == "h") {
    tempcolor = hslToHex(time * 100 % 360, color1[1], color1[2]);
  } else if (colorstyle == "s") {
    tempcolor = hslToHex(color1[0], color1[1], Math.sin(time * speed) * 12 + 82)
  } else {
    tempcolor = ncolor;
    console.warn("bad colorstyle: \"" + colorstyle + "\" !");
  }
  for (let i = 0; i < text.length; i++) {
    tempx = (i * spacing + x) - (spacing - 2) * text.length / 2 - spacing - 2;
    tempy = ((Math.sin((time + obt * i) * speed) * sinmulti) + y);
    textwsh(tempx, tempy, tempcolor, splittext[i], style, shadoOffset);
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