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

dark.onclick = function darkMode() {
  dark.classList.toggle("active");
  light.classList.toggle("active");
  document
    .querySelector("header img")
    .setAttribute("src", "images/Adham-black.png");
  document.documentElement.style.setProperty("--active-background", "white");
  document.documentElement.style.setProperty("--active-text-color", "#222");
  document.documentElement.style.setProperty(
    "--active-gradient",
    "linear-gradient(-45deg, #666, white)"
  );
  document.documentElement.style.setProperty(
    "--active-text-gradient",
    "linear-gradient(-45deg, #3F0071,#FB2576 )"
  );
};
light.onclick = function lightMode() {
  dark.classList.toggle("active");
  light.classList.toggle("active");
  document.querySelector("header img").setAttribute("src", "images/Adham.png");
  document.documentElement.style.setProperty("--active-background", "black");
  document.documentElement.style.setProperty("--active-text-color", "white");
  document.documentElement.style.setProperty(
    "--active-gradient",
    "linear-gradient(-45deg, black, #222)"
  );
  document.documentElement.style.setProperty(
    "--active-text-gradient",
    "linear-gradient(to right, #bce29e, #ff8787)"
  );
};

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
