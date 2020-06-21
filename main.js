// Kata 1 - Add
function add (x,y) {
    return x + y
}

const result = add(2,4)
console.log(result)

// Kata 2 -Multiply
function multiply (x,y) {
    let  value = 0
    for (let index = 0; index < y; index += 1) {
        value = add(value, x);
    }
    return value
}   
console.log(multiply(6,4))

// Kata 3 - Power/Exponentiation
function power (x,y) {
    let outcome = 1
    for( let index = 1; index <= y; index += 1) {
        outcome = multiply(outcome, x)
    }
    return outcome
}
let outcome = power(2,8)
console.log(outcome)
console.log(power(3,4))

// Kata 4 - Factorial
 function factorial (x) {
     let product = 1
     for (let index = x; index > 1; index -= 1) {
         product = multiply(product, index)
     }
     return product
 }
 let product = factorial(5)
 console.log(product)
 console.log(factorial(4))
 