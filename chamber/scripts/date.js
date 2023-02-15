const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.querySelector("#date").textContent = fulldate;


document.getElementById("copyrightyear").textContent = year;

//Displays last date the web page was modified
let lastModif = document.lastModified;
document.getElementById("lastModified").textContent = lastModif;

//Display event banner on Mondays and Tuesdays
function bannerDisplay(){
	if (dayName == "Monday"){
		document.querySelector(".reminderBanner").style.display = "grid";}

	else if (dayName == "Tuesday"){
		document.querySelector(".reminderBanner").style.display = "grid";}	

	else {
		document.querySelector(".reminderBanner").style.display = "none";}	
}

bannerDisplay()