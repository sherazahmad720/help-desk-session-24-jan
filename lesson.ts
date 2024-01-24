class Human {
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
class Animal {
    name:string;
    age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age=age;
    }
}

let human = new Human("test");
let animal = new Animal("Dog", 2);

human = animal; //

// animal = human; //Error 

let a = {name:"test", age:2};
// a = {name:"test", age:2, height:5}; //Error

let humanB:Human=new Animal("test", 2); 

console.log(humanB);
