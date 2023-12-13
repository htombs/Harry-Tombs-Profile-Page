function greeting() {
    var greeting=prompt ("What's your name?")

    if (greeting.length >= 1) {
        alert ("Welcome to HarryT Productions " + greeting + "! Have a look around to see what's what");
    }
    else if (greeting.length < 1) {
        alert ("Fine, I didn't want to talk to you anyway");
    }
}


function areyousure() {
    var review=prompt ("Are you sure?")

if (review.length >=1) {
    alert = ("goodday");
}
else {
    alert ("poop");
    }  
}

var menu = document.getElementsByClassName("dropdown");
var acc = document.getElementsByClassName("accordian")
var i;

for (let index = 0; index < menu.length; index++) {
    const element = menu[index];
    var panel = element.getElementsByClassName("panel")[0];
    panel.style.display = "none";
}

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
     var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}