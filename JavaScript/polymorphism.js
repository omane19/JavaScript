class Animal{

    constructor(name){
        this.name = name;
    }

    eats(){

        console.log(this.name+ ' eats food ');
    }
}

// Method overriding where the parent class method is overridden by child class method

class Alligator extends Animal{

eats(){

        super.eats(); // this will even run the parent class method 
        console.log(this.name+' eats fishes ');
    }
}
let murphy = new Alligator ('Murphy');
murphy.eats();
