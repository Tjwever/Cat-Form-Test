//variables to reference the DOM
let catForm = document.forms["cat-form"];
let catType = document.querySelector(".cat-type");
let shortGray = document.getElementById("short-gray");
let calico = document.getElementById("calico");
let snowWhite = document.getElementById("snow-white");

hideAll();

function getDropdown(sel) {
  hideAll();
  let theValue = document.getElementById(sel.options[sel.selectedIndex].value);
  if(theValue == "default") {
    hideAll();
    theValue.style.display = "none";
  }
  theValue.style.display = "block";

}

function hideAll() {
  shortGray.style.display = "none";
  calico.style.display = "none";
  snowWhite.style.display = "none";

}