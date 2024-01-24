class BankAccount {
    balance;
    address;
    atmPin;
    accountId;
    cnicNumber;
    accountTitle;
    constructor(balance, address, accountId, cnicNumber, accountTitle) {
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
class character {
    name;
    age;
    height;
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}
class Lee extends character {
    walk() {
        throw new Error("Method not implemented.");
    }
    talk() {
        throw new Error("Method not implemented.");
    }
    constructor(name, age, height) {
        super(name, age, height);
    }
    action() {
        console.log("This is action");
        this.walk();
        this.name;
        this.talk();
    }
}
let a = new Lee("Sheraz", 23, 5.8);
a.walk();
export {};
