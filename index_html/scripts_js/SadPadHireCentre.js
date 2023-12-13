function getAdultBikeHirePrices3hrs() {
    var list = document.getElementById ("adultbike3hrs");

    fetch("bike_hire_3hrs.json").then(res => res.json())
    .then(data => {
        bikes3hr = data["bikehirepricelist3hrs"];
        console.log(bikes3hr);
        bikes3hr.forEach((bike) => {
            var listItem = document.createElement("li")
            listItem.innerText = `Price: ${bike.price}`;
            // `Equipment: ${bike.name}, Length of Hire: ${bike.duration}, Price: ${bike.price}`;
            // another way to dispay lists is: listItem.innerText = bike.name + bike.duration + bike.price;
            list.appendChild(listItem);
        })
    })
}

document.getElementById("activity").onchange = function(){
    var pricelist = document.getElementById("price");
    fetch("SadPadHireCentre.json").then(res => res.json()).then(data => {
        supprices = data["paddleboardpricelist"];
        console.log(supprices);

        item1 = document.createElement("li");
        item1.innerText = supprices["1hr"]
        pricelist.appendChild(item1)

        item2 = document.createElement("li");
        item2.innerText = supprices["2hr"]
        pricelist.appendChild(item2)

        item2 = document.createElement("li");
        item2.innerText = supprices["3hr"]
        pricelist.appendChild(item2)

        item2 = document.createElement("li");
        item2.innerText = supprices["4hr"]
        pricelist.appendChild(item2)

        item2 = document.createElement("li");
        item2.innerText = supprices["5hr"]
        pricelist.appendChild(item2)

        item2 = document.createElement("li");
        item2.innerText = supprices["Full Day"]
        pricelist.appendChild(item2)
    })
}
    
function homepage1(){
    location.replace("SadPad.html")
}

// function getAdultBikeHirePricesFullDay(){
//     var list = document.getElementById ("activity");

//     fetch("bike_hire_full_day.json").then(res => res.json())
//     .then(data => {
//         bikesFD = data["bikeHirePriceListFullDay"];
//         console.log(bikesFD);
//         bikesFD.forEach((bike) => {
//             var listItem = document.createElement("li")
//             listItem.innerText = bike.price;
//             list.appendChild(listItem);
//         })
//     })
// }
