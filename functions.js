function functionName(param1, param2){
    //statements
}

function add(){
    console.log(2 + 4);
}

add();

function addNumber(a, b){
    // console.log(a + b);
    return (a + b);
}

let result = addNumber(4, 19);
console.log(result);

function comparison(a, b){
    if (a > b){
        console.log(a + ' is greater than ' + b);
    }
    else if (a == b){
        console.log(a + ' is equal to ' + b);
    }
    else {
        console.log(a + ' is less than ' + b);
    }
}

comparison(25, 25);

