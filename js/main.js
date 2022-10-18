let menuIcon = document.querySelector(".menu-icon");
let resMenu = document.querySelector(".res-menu");
menuIcon.onclick = function () {
  menuIcon.classList.toggle("menu-icon-active");
  resMenu.classList.toggle("res-menu-active");
};

// Project Section
let projSec = document.querySelector("#projects");
let projects = [
  "Leon",
  "Kasper",
  "HoodieGo",
  "Clipboard-Landing-page",
  "Fylo",
  "AppLand",
  "Muvine",
  "Patrol",
  "JavaScript-App",
];
let container = document.createElement("div");
container.classList.add("container");
for (i = 0; i < projects.length; i++) {
  let project = document.createElement("div");
  project.classList.add("class", projects[i]);
  project.classList.add("class", "project");
  let projImg = document.createElement("img");
  projImg.setAttribute("src", `./images/${projects[i]}.png`);
  let projText = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.textContent = `${projects[i]}`;
  let more = document.createElement("a");
  more.setAttribute("href", `https://adham-emam.github.io/${projects[i]}/`);
  more.setAttribute("target", "_blank");
  more.textContent = "More Details";
  project.appendChild(projImg);
  projText.appendChild(h3);
  projText.appendChild(more);
  project.appendChild(projText);
  container.appendChild(project);
}
projSec.appendChild(container);
