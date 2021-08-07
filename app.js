"use strict";

//// Random Trip Generator Project ////
//// Created by: Cody Orr          ////

//// Step 1) pick a random destination randomly ////
function destination(city){

    return city[Math.floor(Math.random()*city.length)];

}

let city = ['Washington DC', 'Boston', 'Pittsburgh', 'Ocean City, MD'];
console.log(`you're going to ${destination(city)}!`);

//// Step 1a) be able to re-select destination ////

let userDestPrompt = confirm ('are you happy with this Destination?');    
    while(userDestPrompt !== true){  //if userDestPrompt = false, statement becomes true
        if(userDestPrompt === false){   //if user selects "ok", userDestPrompt becomes opposite of true
            let city = ['Washington DC', 'Boston', 'Pittsburgh', 'Ocean City, MD'];
            console.log(`you're going to ${destination(city)}!`);
            confirm('are you happy with this destination?');
        }
        else if(userDestPrompt === true){
            break;
        }
    }




//// Step 2) pick a random restuarant(food type) randomly////

function restuarant(foodType){

    return foodType[Math.floor(Math.random()*foodType.length)];
}

let foodType = ['Italian', 'Chinese', 'Mexican', 'Steak'];
console.log(`you're going to have ${restuarant(foodType)} for dinner`);

//// Step 2a) be able to re-select restuarant ////




//// Step 3) pick a mode of transportation randomly ////

function transportation(typeOfVehicle){
    
    return typeOfVehicle[Math.floor(Math.random()*typeOfVehicle.length)];
}

let typeOfVehicle = ['luxury car', 'jeep', 'convertable', 'truck'];
    console.log(`you'll be driving a ${transportation(typeOfVehicle)}!`);

//// Step 3a) be able to re-select transportation ////




//// Step 4) pick a form of entertainment randomly ////

function entertainment(typeOfFun){
    
    return typeOfFun[Math.floor(Math.random()*typeOfFun.length)];
}

let typeOfFun = ['Concert', 'Museum', 'Zoo', 'Club'];
    console.log(`for entertainment you'll be going to a ${entertainment(typeOfFun)}`);

//// Step 4a) be able to re-select entertainment ////
