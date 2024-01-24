
class user {
   private name: string;
    age: number;
    email: string;

    get userName(): string {
        return this.name;
    } 
    
    set userName(name: string) {
        this.name = name;
    }


    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    walk(): void {
        console.log("walk");
    }
    talk(): void {
        console.log("talk");
    }

}
class Teacher extends user {
    constructor(name: string, age: number, email: string) {
        super(name, age, email);
    }
    teach(): void {
        console.log("teach");
    }
    talk(): void {
        console.log(" Teacher can talk loudly ");
    }
}

let hassan = new Teacher("Hassan", 20, 'test@gmail.com')
console.log(hassan.userName);
hassan.userName = "Hassan Farooq";
console.log(hassan.userName);


