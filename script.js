let sideNavbar = document.getElementById("sideNav")
let body = document.getElementById("main")


function openNav() {
 sideNavbar.style.width = "230px";
 body.style.opacity = ".2"
}
function closeNav() {
sideNavbar.style.width = "0";
body.style.opacity = "1"
}
