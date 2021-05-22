const smallScreen = window.matchMedia("(max-width: 1000px)");

if (smallScreen.matches) {
  document.getElementById("description").innerHTML =
    "An interactive course on<br> the basics of politics";
}
