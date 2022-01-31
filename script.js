//variables
let shortGray = document.querySelector("#short-gray")
let calico = document.querySelector("#calico");
let snowWhite= document.querySelector("#snow-white");
let catSelector = document.querySelector("#cat-type");

// Step 1: Hide the cats!
function hideCats() {
  shortGray.style.display="none"
  calico.style.display="none"
  snowWhite.style.display="none"
}

// Step 2: Show a specific cat!
function displayCat() {
  // 2b: Click the drop down menu
  catSelector.addEventListener("change", function display() {
    // 2c: Select 'shortgray' from the drop-down
    let catVal = catSelector.value;
    // console.log(typeof catVal)
    // 2a: Change the "display" of the cat variable to [something]
    if (catVal === "short-gray") {
      hideCats()
      shortGray.style.display = "block"
    } else if (catVal === "calico") {
      hideCats()
      calico.style.display = "block"
    } else if (catVal === "snow-white") {
      hideCats()
      snowWhite.style.display = "block"
    }
   })
}

hideCats();
displayCat()

