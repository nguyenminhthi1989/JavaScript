let i;
for (i = 0; i <= 5; i++){
    console.log('The value of i is: ' +i);
}

fruits = ['Apple','Banana','Grapes','Jackfruit'];
let x;
for (x in fruits){
    console.log(x);
    console.log(fruits[x]);
}

console.log('=====================================')

for (x of fruits){
    console.log(x);
}