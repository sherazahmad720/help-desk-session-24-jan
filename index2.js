class user {
    name;
    age;
    email;
    get userName() {
        return this.name;
    }
    set userName(name) {
        this.name = name;
    }
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    walk() {
        console.log("walk");
    }
    talk() {
        console.log("talk");
    }
}
class Teacher extends user {
    constructor(name, age, email) {
        super(name, age, email);
    }
    teach() {
        console.log("teach");
    }
    talk() {
        console.log(" Teacher can talk loudly ");
    }
}
let hassan = new Teacher("Hassan", 20, 'test@gmail.com');
console.log(hassan.userName);
hassan.userName = "Hassan Farooq";
console.log(hassan.userName);
export {};
