/******* Arithmetic Operators *******/

// let x = 5;
// let y = 3;
// let result = x ** y;

// console.log('The result is: ' + result)

// let a = 10;
// //a++
// //++a
// let q = 2 * a++;
// console.log('Value of q is: ' + q)
// console.log('Value of a is: ' + a)

// let p = 2 * ++a;
// console.log('Value of p is: ' + p)
// console.log('Value of a is: ' + a)

/******* Assignment Operators *******/

// let x = 3;
// let y = 2;

// x += y;
// console.log('The value of x is: ' + x)

// x -= y;
// console.log('The value of x is: ' + x)

// x *= y;
// console.log('The value of x is: ' + x)

// x /= y;
// console.log('The value of x is: ' + x)

// x %= y;
// console.log('The value of x is: ' + x)

// x **= y;
// console.log('The value of x is: ' + x)

/******* Comparison Operators *******/

// let x = 30;
// let y = 25;

// let result = x < y;
// console.log('Result is: ' + result)

// /*
// Ternary Operator: like if - then - else
// takes 3 arguments
// condition ? value if true : value if false
// */

// let a = x > y ? x : y
// console.log(a)

/******* Logical Operators *******/

// let a = true;
// let b = false;

// console.log(a && b)
// console.log(a || b)
// console.log(!a)
// console.log(!b)

/******* Type Operators *******/

// let firstName = 'Thi';

// console.log(typeof firstName)
// console.log(typeof ad) // Returns "undefined"
// console.log(typeof 134.333) // Returns "number"
// console.log(typeof true) // Returns "boolean"
// console.log(typeof NaN) // Returns "number"
// console.log(typeof [1, 2, 3, 4]) // Returns "object"
// console.log(typeof {name:'Peter', age:25}) // Returns "object"
// console.log(typeof new Date()) // Returns "object"
// console.log(typeof null) // Returns "object"
// console.log(typeof function() {}) // Returns "function"

// let lastName = new String('Nguyen');
// let number = new Number(23);
// console.log(lastName instanceof String)
// console.log(number instanceof Number)

/******* Bitwise Operators *******/

let a = 3;
let b = 2;

/* 0011
0010
AND --> 0010 = 2
OR --> 0011 = 3
XOR --> 0001 = 1
~ 00000011 --> 11111100 = 252 = -4
~ 00000010 --> 11111101 = 253 = -3
0101 --> 1010 = 10
0101 --> 0010 = 2 */

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(~a);
console.log(~b);
console.log(5 << 1);
console.log(5 >> 1);