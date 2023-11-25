var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var color5 = document.querySelector(".color5");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
  "linear-gradient(to right,"
   + color1.value
   + ","
   + color2.value
   + ")";
   css.textContent = body.style.background + ";";

}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandom() {
  var randomOne = getRandomColor()
  var randomTwo = getRandomColor()
  body.style.background =
  "linear-gradient(to right,"
   + randomOne
   + ","
   + randomTwo
   + ")";
   css.textContent = body.style.background + ";";
   color1.value = randomOne;
   color2.value = randomTwo;

}

function setRandom1() {
  if(color4.clicked == false){
    color5.value = "#b3b3b3";
  } else {
  body.style.background =
  "linear-gradient(to right,"
   + getRandomColor()
   + ","
   + color5.value
   + ")";

   css.textContent = body.style.background + ";";
 }
}

function setRandom2() {
  if(color5.clicked == false){
    color4.value = "#FFC0CB";
  } else {
  body.style.background =
  "linear-gradient(to right,"
   + color4.value
   + ","
   + getRandomColor()
   + ")";

   css.textContent = body.style.background + ";";
 }
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
color3.addEventListener("click", setRandom)
color4.addEventListener("click", setRandom1)
color5.addEventListener("click", setRandom2)
