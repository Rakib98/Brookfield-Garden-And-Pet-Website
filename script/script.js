/*-------------------------------------------------------------------JAVASCRIPT FILE FOR CUSTOM SCRIPTS-------------------------------------------------------------*/

/*=========================FULL-PAGE NAVIGATION MENU=================================*/
/* This portion of scripts will allow to show and hide the full page navigation menu*/

//First create variables, that will containt HTML elements
var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');

//Create a function, that targets the variables created. This function will be executed when the click event is triggered
document.getElementById('open-menu').addEventListener('click', function () {
  overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function () {
  overlay.classList.remove('show-menu');
});

/*Directs user to the top when the menu button is clicked, so that the full page navigation menu is visible, as the menu would show on the top,
so when the user would be at the bottom of the page, the navigation menu would show, but the user would need to scroll up to see it,
so by using this function the page will automatically scroll up*/
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*--------------------------------------END-------------------------------------------*/


/*=========================DATE AND TIME=================================*/
/* This portion of scripts will allow to display the current date and time*/

/* Creates the dunction that will contain the scripts to execute*/
function showTime() {
  //Variables storing the date info
  //Date
  var date = new Date(); // Variable that is used to create a date object, this will be used by the other variables, to get specific piece of data from this object
  var day = date.getDate(); // Gets the day from the Date object
  var month = date.getMonth() + 1; // Gets the month from the Date object. It has a +1, at the end, as JavaScript assigns the number zero to January.
  var year = date.getFullYear(); // Gets the full year in a YYYY format from the Date object.
  // Time
  var hour = date.getHours(); // Gets the hour from the Date object.
  var minutes = date.getMinutes(); // Gets the minutes from the date object.

  // A function that will change how the time and dates are diplayed. If the numbers are less than 10, it will add a zero next to it, to make the formatting better.
  //For the minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  //For the hours
  if (hour < 10) {
    hour = "0" + hour;
  }
  //For the day
  if (day < 10) {
    day = "0" + day;
  }
  //For the month
  if (month < 10) {
    month = "0" + month;
  }

  // Function that actually displays the date and time; it targets the HTML element with the ID assigned.
  $('#date').text(day + "/" + month + "/" + year);
  $('#time').text(hour + ":" + minutes);

  //It sets a timeout, this allows to refresh the script automatically; so that the user doesn't have to refresh the page to get the updated date or time.
  setTimeout(showTime, 1000);
}
// Lastly we call the function
showTime();
/*--------------------------------------END-------------------------------------------*/

/*=========================RANDOM GREETING=================================*/
/*Function that will generate a random greeting from a list*/
function randGreeting() {
  //First a list of greetings is created
  var greetingsList = new Array("It's over Anakin! I have the high ground!", "You are tearing me apart Lisa!", "A bad penny always turns up", "A barking dog never bites", "A change is as good as a rest", "A good beginning makes a good ending", "You are tearing me apart Lisa!", "You are doing great");

  //A random number is created
  var randNum = Math.floor(Math.random() * 7);

  //A variable is created. This contains a greeting from the array, the item is chosen by using the random number created as the index.
  var greetinFromList = greetingsList[randNum];
  //Returns the greeting with some woutation marks around it
  return ('"' + greetinFromList + '"');
}
//Display the greeting in the HTML element with the assigned ID
document.getElementById('greeting').innerHTML = randGreeting();
/*--------------------------------------END-------------------------------------------*/


/*=========================ON SCREEN HELP=================================*/
/*Function that will display an on screen help as an alert*/
function help() {
  alert("1. To open the navigation menu, click the icon on the top right.\n2. To close the menu click the 'X'.\n3. To slide between images click the arrows.\n4. Hover on the product images to show buttons");
}