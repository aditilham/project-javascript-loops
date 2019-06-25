"use strict"

alert("let's make a pyramid")

let userInput = prompt("input your pyramid height")
let outputBlock = "";

for (var i = 1; i <= userInput; i++) {
    for (var j = 1; j <= i; j++) {
        outputBlock += j + "     ";
    }
    console.log(outputBlock);
    outputBlock = "";
}