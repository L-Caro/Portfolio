// == Menu burger == //
let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}
function closeNav() {
  sidenav.classList.remove("active");
}
// == == //


document.getElementById("switchTheme").addEventListener("change", function() {
  if (document.getElementById("switchTheme").checked == false) {
    document.documentElement.setAttribute("style", "background-color: black;");
    document.getElementsByTagName('body')[0].setAttribute("style", "color: white;");

  } else {
    document.documentElement.setAttribute("style", "background-color: white;");
    document.getElementsByTagName('body')[0].setAttribute("style", "color: black;");
  }
});
document.getElementById("switchTheme").addEventListener("change", function() {
  if (document.getElementById("switchTheme").checked == false) {
    document.documentElement.setAttribute("style", "background-color: black;");
    document.getElementsByTagName('header')[0].setAttribute("style", "color: white;");

  } else {
    document.documentElement.setAttribute("style", "background-color: white;");
    document.getElementsByTagName('header')[0].setAttribute("style", "color: black;");
  }
});
