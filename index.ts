
class BankAccount {
    balance: number;
    private address: string;
    private atmPin: number | undefined;
    accountId: number;
   private cnicNumber: number;
    accountTitle: string;

    constructor(balance: number, address: string, accountId: number, cnicNumber: number, accountTitle: string) {
        this.balance = balance;
        this.address = address;
        this.accountId = accountId;
        this.atmPin = 1234;
        this.cnicNumber = cnicNumber;
        this.accountTitle = accountTitle;
    }
}

let sherazMeezanBank = new BankAccount(100000, "Karachi", 123456789, 1234567891234, "Sheraz Meezan Bank");
let sherazHblBank = new BankAccount(100000, "Karachi", 123456789, 1234567891234, "Sheraz HBL Bank");

console.log(sherazMeezanBank.balance);
// console.log(sherazHblBank.atmPin);


abstract class character {
    public name: string;
    public age: number;
    public height: number;

    constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    abstract walk(): void;
    abstract talk(): void;
    
}

class Lee extends character{
    walk(): void {
        throw new Error("Method not implemented.");
    }
    talk(): void {
        throw new Error("Method not implemented.");
    }
    constructor(name: string, age: number, height: number) {
        super(name, age, height);

    }

    action(): void {
        console.log("This is action");
        this.walk();
        this.name;
        this.talk();
    }
    

}

let a =new Lee("Sheraz", 23, 5.8);
a.walk();
