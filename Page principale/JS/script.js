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

// == Menu switch dark mode == //

document.getElementById("switchTheme").addEventListener("change", function() {
  if (document.getElementById("switchTheme").checked == false) {
    document.documentElement.setAttribute("style", "background-color: #121212;");
    document.getElementsByTagName("body")[0].setAttribute("style", "color: #c7c7c7;");

  } else {
    document.documentElement.setAttribute("style", "background-color: white;");
    document.getElementsByTagName("body")[0].setAttribute("style", "color: black;");
  }
});

document.getElementById("switchTheme2").addEventListener("change", function() {
  if (document.getElementById("switchTheme2").checked == false) {
    document.documentElement.setAttribute("style", "background-color: #121212;");
    document.getElementsByTagName("body")[0].setAttribute("style", "color: #c7c7c7;");

  } else {
    document.documentElement.setAttribute("style", "background-color: white;");
    document.getElementsByTagName("body")[0].setAttribute("style", "color: black;");
  }
});
// == == //