function toggleMenu(){
    document.getElementById("navItems").classList.toggle("open");
    document.getElementById("menuButton").classList.toggle("open");
}

const x = document.getElementById("menuButton");
x.onclick = toggleMenu;