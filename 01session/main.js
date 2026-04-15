// show it on the screen

document.writeln("mehmet can" + "</br>")

/* 
you can declare with var your variables
it is allowed to redeclare
*/
var name = " cinar "
var name = " cinar1 "


document.writeln("nameee: " + name  + "</br>")
let age = 15


const city = "istanbul"

//Operators 
/*
+.  addition
 -  substraction
 / divion
 * multiplication
 % modulus
 ++ increment
 -- decrement
*/

let number1 = 2
let number2 = 4

document.writeln(" -- -- - -- - - - - -: "  + "</br>")
document.writeln("number1: " + number1  + "</br>")
document.writeln("number2: " + number2  + "</br>")
document.writeln(" -- -- - -- - - - - -: "  + "</br>")
let result = number1 + number2

document.writeln("resulttt: " + result  + "</br>")


let result1 = number2 - number1

document.writeln("result1: " + result1  + "</br>")

let result2 = number1 * number2

document.writeln("result2: " + result2  + "</br>")

let relsult3 = number2 / number1

document.writeln("relsult3: " + relsult3  + "</br>")


number1++ // number1  = number1 + 1 

document.writeln("number1: " + number1  + "</br>")

number2-- // number2 = number2 - 1


let relsult4 =  number1 % number2

document.writeln("relsult4: " + relsult4  + "</br>")


//logical

let number3 = 5
let number4 = 8

document.writeln(" -- -- - -- - - - - -: "  + "</br>")
document.writeln("number3: " + number3  + "</br>")
document.writeln("number4: " + number4  + "</br>")
document.writeln(" -- -- - -- - - - - -: "  + "</br>")


/* 
 == equal to
 === equal value and equal type
 != not equal
 !== not equal value or not equal type
 > greater than
 < less than
 >= greater than or equal to
 <= less than or equal to
*/


if (number3 > 4) {
    document.writeln("5 is bigger than 4. That is correct "  + "</br>")
}

if (number4 < 9) {
     document.writeln("8 is less than 9. That is correct "  + "</br>")
}


if (number3 >= 5) {
     document.writeln("5 is greater than 5 or equal to 5. That is correct "  + "</br>")
}

if (number4 <= 8) {
    document.writeln("8 is less than 8 or equal to 8. That is correct "  + "</br>")
}
