const d = new Date();
const year = d.getFullYear();

let lastModif = document.lastModified;
document.getElementById("lastModified").textContent = lastModif;

document.getElementById("copyrightyear").textContent = year;