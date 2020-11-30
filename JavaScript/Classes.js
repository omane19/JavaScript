// class ClassName{

// }


class Employee{

    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    // setDetails(name,id){
    //     this.name = name;
    //     this.id = id;
    // }
}

let emp1 = new Employee('John', 1001);
let emp2 = new Employee('Peter', 1002);
// emp1.setDetails('John', 1001);
console.log(emp1.name);
console.log(emp1.id);

console.log(emp2.name);
console.log(emp2.id);