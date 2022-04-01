class employee{

    // setDetails(name, id){
    //     this.name = name;
    //     this.id = id;
    // }

    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}


// let emp1 = new employee();
// emp1.setDetails('Thi', '122788');
// console.log(emp1.name);
// console.log(emp1.id);

let emp1 = new employee('Thi', 122788);
console.log(emp1.name);
console.log(emp1.id);

let emp2 = new employee('Ken', 122888);
console.log(emp2.name);
console.log(emp2.id);