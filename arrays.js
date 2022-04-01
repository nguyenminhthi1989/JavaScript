let numbers = [1, 3, 5, 7];
console.log(numbers);
console.log(numbers[0], numbers[1], numbers[2], numbers[3]);

console.log('==================================================');

let fruits = ['Apple', 'Banna', 'Grape']
console.log(fruits);
fruits.push('Orange');
console.log(fruits);
console.log(fruits.length);

console.log('==================================================');

let cars = new Array('Ford', 'Toyota', 'Mercedes');
console.log(cars);
console.log(cars[1]);
cars[1] = 'Honda';
console.log(cars[1]);
console.log(cars);
console.log(cars.length);

let x;
for (x in cars){
    console.log(x);
    console.log(cars[x]);
}

for (x of cars){
    console.log(x);
}