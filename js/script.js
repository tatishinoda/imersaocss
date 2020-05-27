//Off Canvas Menu
function openNav() {
    document.getElementById("menu-celular").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("menu-celular").style.width = "0";
  }

//Sticky on Scroll 
window.onscroll = function() {myFunction()};
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}