let fruits = new Array('Apple', 'Banana', 'Cherry');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.push('Orange');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift('Cherry');
console.log(fruits);

console.log('==================================================');

delete fruits[1];
console.log(fruits);

fruits[1] = 'Lemon';
console.log(fruits);

console.log('==================================================');

fruits.push('Banna');
console.log(fruits);

fruits.splice(0,1);
console.log(fruits);

fruits.splice(1,2,'Grape','Jackfruit');
console.log(fruits);

console.log('==================================================');

let childFruits = fruits.slice(0, 2);
console.log(childFruits);
console.log(fruits);

console.log('==================================================');

let evenNumbers = [2, 4, 6];
let oddNumbers = [1, 3, 5];
let numbers = evenNumbers.concat(evenNumbers);
console.log(numbers);
numbers = evenNumbers.concat(oddNumbers);
console.log(numbers);
let randomNumbers = [32, 42, 65];
numbers = randomNumbers.concat(evenNumbers, oddNumbers);
console.log(numbers);
numbers = evenNumbers.concat(oddNumbers, randomNumbers);
console.log(numbers);







