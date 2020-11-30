class Employee{

    setEmpDetails(name,id,phoneNo){

        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getEmpName(){
        return this.name;
    }
    getEmpid(){
        return this.id;
    }
    getEmpphoneNo(){
        return this.phoneNo;
    }
}

let emp1 = new Employee();
emp1.setEmpDetails('john',1001,1234567891)
console.log(emp1.getEmpName());
console.log(emp1.getEmpid());
console.log(emp1.getEmpphoneNo());