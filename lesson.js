class Human {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Animal {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let human = new Human("test");
let animal = new Animal("Dog", 2);
human = animal; //
// animal = human; //Error 
let a = { name: "test", age: 2 };
// a = {name:"test", age:2, height:5}; //Error
let humanB = new Animal("test", 2);
console.log(humanB);
export {};
