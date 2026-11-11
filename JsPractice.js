/* // Variables ==================================================================
{
    var name = "vishal"
}
console.log(name)  // var has global scope

{
    let age = 32
    age = 33
    console.log(age) 
}
// console.log(age) // let has block scope

{
    // const isEmployed // ------- 'const' declarations must be initialized
    const isEmployed = true
    // isEmployed = false // ------ TypeError: Assignment to constant variable.
    console.log(isEmployed)
}
// console.log(isEmployed) // const has block scope */

/*// Data types ==================================================================
const name = "vishal" // String
const age = 32 // number
const isEmployed = true // boolean
const newJob = undefined
const salary = null
const increment = NaN // Not a Number
const colleagues = ['mayuresh', 'rohan', 'sarika'] // array
const empdetails = {  // object
    name : "vishal",
    age : 32, 
    id : "SP3217",
    isPermanent : false
}
console.log(`${name}, ${age}, ${isEmployed}, ${newJob}, ${salary}, ${increment}, ${empdetails.id}`)
for(const colleague of colleagues){
    console.log(colleague)
}*/

/* // Functions ==================================================================
function arithmatic(num1, num2){
    const result = num1 + num2
    return result
}
const add = arithmatic(10,20)
console.log(add)  // console.log(arithmatic(10,20))

const arithmatic2 = (num1, num2) => {
    let result
    if(num1>num2){
        result = num1 - num2
    } else if(num2 > num1 ){
        result = num2 - num1
    } else{
        result = num1 - num2
    }
    return result
}
const substraction = arithmatic2(10,20)
console.log(substraction) */

/* // Arithmatic Operators =======================================================
console.log(10 + 20, 10 - 20, 10 * 20, 10 / 20, 10 % 20)*/

/* // Comparison Operator ========================================================
console.log(10>20, 10<20, 10>=20, 10<=20, 10==20, 10!=20, 10===20, 10!==20)*/

/* // Logical Operators ==========================================================
console.log(10<20 && 20<10, 10>20 || 20>10) */

/* // Control Statement ==========================================================
const age = 32
const name = "vishal"
// If statement
if(age>18){
    console.log("is an adult")
}

// If-Else control statement
if(age>18){
    console.log("can drive now")
} else{
    console.log("cannot drive yet")
}

// If-Else-If constrol Statement
if(age>18 && age<=30){
    console.log(`${name} can drive now but in city`)
} else if(age>30 && age<=60){
    console.log(`${name} can drive freely now`)
} else{
    console.log(`${name} don't drive now`)
}

// Nested If control Statement
if(age>18){
    if(age<60){
        console.log("eligible to drive")
    }
} else{
    console.log("not eligible to drive")
} */

/* // Loops ======================================================================
for(let i = 1; i <= 10; i++){
    if(i==5){
        // break
        continue
    }
    console.log(i)
}

const colleagues = ['mayuresh', 'rohan', 'sarika']
for (const collegue of colleagues){
    console.log(collegue)
}

let num=1
while(num<=5){
    console.log(`while loop ${num}`)
    num++
}

do{
    console.log(`do while loop ${num}`)
    num++
} while(num<=10)*/

// Classes, Methods, Objects, Constructor
export class HelloWorld {
    constructor(company){
        this.name = "vishal"
        this.age = 32
        this.company = company
    }
    greetings(){
        console.log(`Hello World ${this.company}`)
    }
}

const hello1 = new HelloWorld()
console.log(hello1.name)
console.log(hello1.company)
hello1.greetings()

const hello3 = new HelloWorld("Velocity")
console.log(hello3.name)
console.log(hello3.company)
hello3.greetings()