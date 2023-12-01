/*Adds and removes the "responsive" class to the hamburgermenu class when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("sitenav");
    if (x.className === "hamburgermenu") {
      x.className += " responsive";
    } else {
      x.className = "hamburgermenu";
    }
  }