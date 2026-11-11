/* // Data types ==================================================================
const fName : string = "vishal" // String
const age : number = 32 // number
const isEmployed : boolean = true // boolean
const newJob : undefined = undefined
const salary : null = null
const increment  = NaN // Not a Number
const colleagues : string[] = ['mayuresh', 'rohan', 'sarika'] // any[] for homogeneous array
const empdetails : {name : string, age: number, id: string, isPermanent:boolean}= {  // object
    name : "vishal",
    age : 32,
    id : "SP3217",
    isPermanent : false
}
console.log(`${fName}, ${age}, ${isEmployed}, ${newJob}, ${salary}, ${increment}, ${empdetails.id}`)
for(const colleague of colleagues){
    console.log(colleague)
}*/
/* // Functions ==================================================================
function arithmatic(num1 : number, num2: number, name?:string):number{ // : void if nothing returns // use ? to make argument optional
    const result : number = num1 + num2
    console.log(`${name} the operation get result = (${num1 + num2})`)
    return result
}
const add = arithmatic(10,20)
console.log(add)  // console.log(arithmatic(10,20))

const arithmatic2 = (num1:number, num2:number, name?:string) :number =>  { // : void if nothing returns // use ? to make argument optional
    let result: number
    if(num1>num2){
        result = num1 - num2
    } else if(num2 > num1 ){
        result = num2 - num1
    } else{
        result = num1 - num2
    }
    console.log(`${name} the operation get result = (${num1 + num2})`)
    return result
}
const substraction = arithmatic2(10,20,"vishal")
console.log(substraction) */
/* // Arithmatic Operators =======================================================
let a:number = 10
let b:number = 20
console.log(a + b, a - b, a * b, a / b, a % b) */
/* // Comparison Operator ========================================================
let a : number = 10
let b : number = 20
console.log(a>b, a<b, a>=b, a<=b, a==b, a!=b, a===b, a!==b) */
/* // Logical Operators ==========================================================
let a : number = 10
let b : number = 20
console.log(a<b && b<a, a>b || b>a) */
/* // Control Statement ==========================================================
const age : number = 32
const fName : string = "vishal"
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
    console.log(`${fName} can drive now but in city`)
} else if(age>30 && age<=60){
    console.log(`${fName} can drive freely now`)
} else{
    console.log(`${fName} don't drive now`)
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
    if(i == 5){
        // break
        continue
    }
    console.log(i)
}

const colleagues : string[] = ['mayuresh', 'rohan', 'sarika']
for (const collegue of colleagues){
    console.log(collegue)
}

let num : number = 1
while(num<=5){
    console.log(`while loop ${num}`)
    num++
}

do{
    console.log(`do while loop ${num}`)
    num++
} while(num<=10) */
/* // Interface and Types
interface User{
    userName : string,
    userId : number,
    userDept : string,
}
let user01 : User = {
    userName : "vishal",
    userId : 32,
    userDept : "mech"
}
console.log(user01.userName)

type Employee = {
    userName : string,
    userId : number,
    userDept : string,
}
let emp01 : Employee = {
    userName : "vishal",
    userId : 32,
    userDept : "mech"
}
console.log(emp01.userDept) */
// Classes, Methods, Objects, Constructor
export class HelloWorld {
    name;
    age;
    company;
    constructor(companyName) {
        this.name = "vishal";
        this.age = 32;
        this.company = companyName;
    }
    greetings() {
        console.log(`Hello World ${this.company}`);
    }
}
/* const hello1 = new HelloWorld() // argument is necessary
console.log(hello1.name)
console.log(hello1.company)
hello1.greetings() */
const hello3 = new HelloWorld("Velocity");
console.log(hello3.name);
console.log(hello3.age);
console.log(hello3.company);
hello3.greetings();
