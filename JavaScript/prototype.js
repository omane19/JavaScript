let EmpDetails = function(name,age,salary){

    this.name = name;
    this.age = age;
    this.salary = salary;

    this.getName =function(){
        return this.name;
    };

    this.getAge = function(){
        return this.age;
    };
};


EmpDetails.prototype.getSalary = function(){
    return this.salary;
};

let emp1 = new EmpDetails('John', 30, 100000);
let emp2 = new EmpDetails('Peter', 40, 20000);
let emp3 = new EmpDetails('Hello', 2, 800000);
console.log (emp1.getName());
console.log (emp2.getAge());
console.log (emp3.getSalary());