function homepage() {
    location.replace ("SadPad.html")
}

function showNomad() {
    document.getElementById("nomadImg")
    .style.display = "block";
    document.getElementById("listitem1")
    .style.display = "none";
}
    // let that last line blank becuase it's the only thing that 
    // seemed to work for some reason

function showNomadButton() {
    document.getElementById("nomadImg")
    .style.display = "none"
    document.getElementById("listItem1")
    .style.document = "flex"
}

function showArcher() {
    document.getElementById("archerImg")
    .style.diplay = "block";
    document.getElementById("listItem2")
    .style.diplay = "";
}

function showArcherButton(){
    document.getElementById("archerImg")
    .style.diplay = "none";
    document.getElementById("listItem2")
    .style.display = "button";
}
