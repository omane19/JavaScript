
/*ARITHEMATIC OPERATOR */

// let x = 5;
// let y = 2;

// let result = x ** y; 

// console.log('Result is : ' + result)


// let a = 10 
// let q = 2 * --a

// console.log('Value of a is: ' + a)
// console.log('Value of a is: ' + q)


/****ASSIGNMENT OPERATOR*****/

// let x = 10;
//x = 10 + 20;

// x **= 5 // x = x ** 5

// console.log('Value of x is : ' + x)


/****COMPARISON OPERATORS ****/

// let x = 11;
// let y = '12';
// console.log(x <= y);
// == equal , === equal value and type , != not equal to , !== not equal value and type, > greater than, < less than, >= greater than, <= less than or equal

/*Ternary Operator : like if-then-else 
takes 3 arguments
contion ? value if true : value if false
*/

// let result = x > y ? x : y
// console.log(result);

/***** LOGICAL OPERATORS *****/

//&& if both are T then T 
//  || OR if any condition is true 
//  ! will return true if condition is false or vice versa

// let A = true;
// let B = false;

// console.log(!A);


/***** TYPE OPERATORS *****/

// typeof returns data type or type of variable
// instanceof

// let firstName ='Omkar';

// console.log(typeof firstName);
// console.log(typeof 123.34);
// console.log(typeof true);

// let lastName = new String('Mane');
// let num1 = new Number(123)
// console.log(lastName instanceof String);
// console.log(num1 instanceof Number);


/**BITWSIE OPERATOR**/

// & AND  1 and 1 becomes 1 
// | OR   0 and 1 become 1 
// ^ XOR  0011 and  0101 if one of the bit is 1 it is 1 (0110)
// ~ NOT  8 bit it will convert 0 to 1 and 1 to 0 
// << Left Shift  (5<<1 it will shift left by 1, 0101 -> 1010)
// >> Right Shift (5>>1 it will shift left by 1, 0101 -> 0010)

// A = 1 = 0001
// B = 2 = 0010 
// A & B = 0000
// A | B = 0011

console.log('********Bitwise Operators********');

let A = 1;
let B = 2;
console.log(A & B);
console.log(A | B);

let C = 3;
let D = 5;
console.log(C ^ D);
console.log(~D);

console.log(5<<1);
console.log(5>>1);


