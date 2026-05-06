// JS Conditionals

let number1 = 4

if (number1 > 3) {
    document.writeln("number1  is higher than 3" + "</br>")
}

if (number1 > 5) {
    document.writeln("number1  is higher than 5" + "</br>")
} else {
     document.writeln("number1 is not higher than 5" + "</br>")
}

if (number1 == 3) {
    document.writeln("number1  is equal to 3" + "</br>")
} else if(number1 == 4){
    document.writeln("number1  is equal to 4" + "</br>")
} else {
    document.writeln("number1  is not  equal to 3 or 4" + "</br>")
}

let day = "memo"

switch(day){
       case "sunday":
       document.writeln("today is sunday" + "</br>") 
       break;
       case "monday":
       document.writeln("today is monday" + "</br>") 
       break;
       case "tue":
       document.writeln("today is tue" + "</br>") 
       break;
       case "wed":
       document.writeln("today is wed" + "</br>") 
       break;
       case "thu":
       document.writeln("today is thu" + "</br>") 
       break;
       case "fri":
       document.writeln("today is fri" + "</br>") 
       break;
       case "sat":
       document.writeln("today is sat" + "</br>") 
       break;
       default:
       document.writeln("unkown day" + "</br>") 
       break;
}


let age = 17

let result = age > 18 ? "have a car" : "not allowed to have a car"


document.writeln("result: "  + result + "</br>") 

/*

let input1 = Number(prompt("please give a number1"))
let input2 = Number(prompt("please give a number2"))

let result2 = input1 + input2

console.log(result2)


A javascript script that takes two values from the use, 
adds them together, and logs the result
*/

let isItRaining = false


if (isItRaining) {
    document.writeln("yeah today it is raining: " + "</br>") 
}

let name = null

let text = "missing"

let result3 = name ?? text

document.writeln("result3: "  + result3 + "</br>") 

let myname

document.writeln("myname: "  + myname + "</br>") 

//Loop

for (let index = 0; index < 10; index++) {
    
    document.writeln("index: "  + index + "</br>") 
}

let counter = 1

while (counter < 10) {
     document.writeln("counter: "  + counter + "</br>") 
     counter = counter + 1
}



let newCounter = 1
do{
 document.writeln("newCounter: "  + newCounter + "</br>") 
 newCounter = newCounter + 1
}while (newCounter < 5)
