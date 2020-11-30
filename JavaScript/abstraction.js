function Employee (name, age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    // this.monthlyBonus = 1000;
    // the above value can be done using abstaction so the value is hidden

    let monthlyBonus = 1000;
  
    // this.calculateFinalSalary = function()
    
    let calculateFinalSalary = function(){
        // let finaSalary = this.baseSalary + this.monthlyBonus;
        let finaSalary = baseSalary + monthlyBonus;
        console.log('Final Salary is : '+finaSalary);
    }
    this.getEmpDetails = function(){
        calculateFinalSalary();
        console.log('Name : '+this.name+' | Age : ' +this.age);
    }
}

let emp1 = new Employee(' John ', 30 ,2000);
emp1.getEmpDetails();
// emp1.calculateFinalSalary();
