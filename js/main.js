// Onload Effect
const header = document.querySelector("header");
const content = document.querySelector(".content");
const ul = document.querySelector("#landing ul");

window.onload = function () {
  header.classList.add("loaded");
  content.classList.add("loaded");
  ul.classList.add("loaded");
};
// Dark Mode
let dark = document.querySelector(".dark");
let light = document.querySelector(".light");

dark.onclick = function () {
  dark.classList.toggle("active");
  light.classList.toggle("active");
  document.body.style.cssText =
    "background-image: linear-gradient(-45deg, white, #666);color: black;";
};
light.onclick = function () {
  dark.classList.toggle("active");
  light.classList.toggle("active");
  document.body.style.cssText =
    "background-image: linear-gradient(-45deg, black, #222);color: white;";
  document.links.style.color = "black";
};

// h1 color Changer
let h1 = document.querySelector("h1");
let colors1 = [
  "#14C38E",
  "#E3FCBF",
  "#905E96",
  "#00d7ff",
  "#FF99D7",
  "#FFD372",
];

setInterval(change, 1500);
function change() {
  let index = Math.floor(Math.random() * colors1.length);
  h1.style.color = colors1[index];
}

//Icons
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const js = document.querySelector(".js");
const jquery = document.querySelector(".jquery");
const react = document.querySelector(".react");

html.onmouseover = function () {
  html.setAttribute(
    "src",
    "https://img.icons8.com/color/35/000000/html-5--v1.png"
  );
};
html.onmouseout = function () {
  html.setAttribute(
    "src",
    "https://img.icons8.com/material-sharp/35/ffffff/html-5.png"
  );
};
css.onmouseover = function () {
  css.setAttribute("src", "https://img.icons8.com/color/35/000000/css3.png");
};
css.onmouseout = function () {
  css.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/35/ffffff/css3.png"
  );
};
js.onmouseover = function () {
  js.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/35/FFD600/javascript.png"
  );
};
js.onmouseout = function () {
  js.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/35/ffffff/javascript.png"
  );
};
jquery.onmouseover = function () {
  jquery.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/35/1266A9/jquery.png"
  );
};
jquery.onmouseout = function () {
  jquery.setAttribute(
    "src",
    "https://img.icons8.com/ios-filled/35/ffffff/jquery.png"
  );
};
react.onmouseover = function () {
  react.setAttribute(
    "src",
    "https://img.icons8.com/ios/35/61DBFB/react-native--v1.png"
  );
};
react.onmouseout = function () {
  "src",
    react.setAttribute(
      "src",
      "https://img.icons8.com/ios/35/ffffff/react-native--v1.png"
    );
};
