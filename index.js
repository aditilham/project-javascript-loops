"use strict"

alert("let's make a half pyramid")

let userInput = prompt("input your half pyramid height")
let outputBlock = "";

for (var i = 1; i <= userInput; i++) {
    for (var j = 1; j <= i; j++) {
        outputBlock += j + "     ";
    }
    console.log(outputBlock);
    outputBlock = "";
}