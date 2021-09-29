const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
 

const name = "ethan"


let age = 20

const isCool = true

let car = null

let height;

let x = 4 
let y = 10
let z = 7 + 8
let sum = x + y 


reader.question("do u like pumpkin pie?", function(answer) {
    if (answer === 'yes') {
        console.log("you're a good person")
    } else {
        console.log("you're living a sad life")
    }
  });