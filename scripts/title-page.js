const smallScreen = window.matchMedia("(max-width: 1000px)").matches;

if (smallScreen) {
  document.querySelector("#description").innerHTML =
    "An interactive course on<br> the basics of politics";
}
