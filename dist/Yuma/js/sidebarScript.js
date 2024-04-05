const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

sidebar.addEventListener("mouseenter", () => {
  sidebar.classList.toggle("close");
});
sidebar.addEventListener("mouseleave", () => {
  sidebar.classList.toggle("close");
});


searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});