//break


var x = 42534
let eval = "memocan" 

document.writeln("eval " + eval + "</br>")
for(let i=0; i<10; i++){

    if (i==3) {
        continue
    }

    if (i==7) {
        break
    }
    document.writeln("i = ", i + "</br>")
}

//string

let answer = " hi my name is 'memo', what is yours? "

document.writeln("answer = ", answer + "</br>")

 let age = 20

 let myAge = ` MY age is ${age}, what is your  ` //string
document.writeln("myAge = ", myAge + "</br>")


document.writeln("myAganswere length = ", myAge.length + "</br>")

document.writeln("myAganswere toLowerCase = ", myAge.toLowerCase() + "</br>")
document.writeln("myAganswere toUpperCase = ", myAge.toUpperCase() + "</br>")

document.writeln("myAganswere includes = ", myAge.includes("age") + "</br>")


let price = 2.3435 //number


document.writeln("price toExponential = ", price.toFixed(3) + "</br>")


//Functions

function sayHello() {
    document.writeln("Hello I am Cinarrr "+ "</br>") 
}

sayHello()
sayHello()
sayHello()

function sayHello1(name) {
      document.writeln("Hello I am " + name + "</br>") 
}

sayHello1("memo")
sayHello1("Markus")

function subTotal(first, second){
    let result = first + second
    document.writeln("result=  " + result + "</br>") 
}


subTotal(3,5)


function subThem(first, second) {
    let result = first - second
    return result
}

let result2  = subThem(10,5)//5

document.writeln("result2=  " + result2 + "</br>") 

// confirm("hellooo")

//Object 



const car = {
    type: "proche",
    model: 2021,
    color: "black",
    driveTheCar: function(){
        document.writeln("driveTheCar the car is running =  " + this.type+ "</br>") 
    }
}


document.writeln("car model =  " + car.model + "</br>") 

document.writeln("car color =  " + car.color + "</br>") 

car.driveTheCar()
