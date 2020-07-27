//Timer displaying function
function displayTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    var t = setTimeout(displayTime, 1000);
    if(hours >= 0 && hours <= 12){   
        hours = checkTime(hours);
        document.getElementById("displayTime").innerHTML = hours + ":" + minutes + ":" + seconds + " AM" ;
    }
    else{
        hours = hours-12;
        hours = checkTime(hours);
        document.getElementById("displayTime").innerHTML = hours + ":" + minutes + ":" + seconds + " PM" ;   
    }
}
function displayDate(){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    document.getElementById("displayDate").innerHTML = date;
}
//checking time to add 0's before single digit minutes and seconds
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    };  // add zero in front of numbers < 10
    return i;
}

//to top

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}