"use strict"
window.onload = function (){
var income = document.getElementById("income");

var food = document.getElementById("food");
var gas = document.getElementById("gas");
var rent = document.getElementById("rent");
var ins = document.getElementById("ins");
var misc = document.getElementById("misc");    
var submit = document.querySelector(".submit");
var reset = document.querySelector(".reset")



var warning1 = "You may be spending too much in this area.";
var warning2 = "You're spending too much in this area.";
var warning3 = "You're doing okay in this area.";

// var warnings = [warning1, warning2, warning3];

function resetValues (){
    food.value = "0";
    gas.value = "0";
    rent.value = "0";
    ins.value = "0";
    misc.value = "0";
    // for (var c = 0; c > warnings.length; c++)
    // {
    //     warnings[c].innerHTML = " ";
    //     console.log(warnings.length);
    // }
    // warning1, warning2, warning3= " ";
    // input.value= " ";

}


var foodWarning = document.getElementById("foodWarning");
var gasWarning = document.getElementById("gasWarning");
var rentWarning = document.getElementById("rentWarning");
var insWarning = document.getElementById("insWarning");
var miscWarning = document.getElementById("miscWarning"); 



function submitOrder(){
    // console.log("hello");
    var incometotal = income.value;

    var foodcost = food.value ;
    var gascost = gas.value;
    var rentcost = rent.value;
    var inscost = ins.value;
    var misccost = misc.value;   


    food.value = incometotal - foodcost;
    gas.value = food.value - gascost;
    rent.value = gas.value - rentcost;
    ins.value = rent.value - inscost;
    misc.value = ins.value - misccost;

//  var rem = [food.value,gas.value,rent.value,ins.value,misc.value];
//  console.log(rem);

// Promise.all (rem).then(function(values){
//     console.log(values);
//     if (rem >= (incometotal * .50))
//     {
//         warnings.innerHTML = warning2;
//     } else if   (rem >= (incometotal *.38) ){
//         warnings.innerHTML = warning1;
//     } else {
//         warnings.innerHTML = warning3;
//     }
// })


    if (foodcost >= (incometotal * .50))
    {
        foodWarning.innerHTML = warning2;
    } else if   (foodcost >= (incometotal *.38) ){
        foodWarning.innerHTML = warning1;
    } else {
        foodWarning.innerHTML = warning3;
    }
};
reset.addEventListener("click", resetValues)
submit.addEventListener("click", submitOrder)
};


// var runningtotal = 
