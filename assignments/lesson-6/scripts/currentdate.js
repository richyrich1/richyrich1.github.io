// To get current day

var days = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var days = weekday[days.getDay()];

// To get current day (number)

var dayNumber = new Date();

dayNumber = dayNumber.getDate();

// To get current month

var months = new Date();
var monthYear = new Array(12);
monthYear[0] = "January";
monthYear[1] = "February";
monthYear[2] = "March";
monthYear[3] = "April";
monthYear[4] = "May";
monthYear[5] = "June";
monthYear[6] = "July";
monthYear[7] = "August";
monthYear[8] = "September";
monthYear[9] = "October";
monthYear[10] = "November";
monthYear[11] = "December";

var months = monthYear[months.getMonth()];

// To get current day

var year = new Date();

year = year.getFullYear();

//document.getElementById("copyright-year").innerHTML = date.getFullYear();

// To display date in HTML

document.getElementById("copyright-year").innerHTML = days + ', ' + dayNumber + ' ' + months + ' ' + year;

// To make hamburger icon interective

function toggleMenu() 
{
	document.getElementsByClassName("fullMenu")[0].classList.toggle("responsive");
}