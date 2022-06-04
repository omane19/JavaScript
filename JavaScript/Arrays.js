// let numbers = [1,2,3,4,5];
// console.log(numbers);

// let fruits = ['apple','Banana','Grapes'];
// console.log(fruits);


// let cars = new Array('Ford', 'Toyota', 'BMW');
// console.log(cars);

// console.log(cars[2]);
// cars[1] = 'Honda';
// console.log (cars[1]);

// Adds new element to the array 
// fruits.push('Cherry');
// console.log(fruits);
// console.log(fruits.length);

// let x;
// for(x in fruits){
//     console.log(fruits[x]);
// }

// for (x of fruits){
//     console.log(x);
// }

/******ARRAY METHOD *****/

let fruits = ['Apple','Banana','Grapes'];
console.log (fruits);

//Removes last element from the array 
fruits.pop(); 
console.log(fruits);

// Removes first element for the array
fruits.shift();
console.log(fruits);

//Adds element at last of the array 
fruits.push('two Cherry');
console.log(fruits);

//Adds first element for the array 
fruits.unshift('Lemon');
console.log(fruits);


// delets element from specified index 
delete fruits[1];
console.log(fruits);

fruits[1] = 'Orange';
console.log (fruits);

//removes element from range of index
fruits.splice(1,2);
console.log(fruits);

//in this case nothing will be removed and we will be adding orange and  cherry 
fruits.splice(2,0,'Orange',' Cherry')
console.log(fruits);


//Slice
let citrusFruits = fruits.slice(0,2)
console.log(fruits);
console.log(citrusFruits);


//Concat
let evenNumbers = [2,4,6];
let oddNumbers = [1,3,5];
let primeNumbers = [2,3,5];

let numbers = evenNumbers.concat(oddNumbers,primeNumbers);
console.log (numbers);
