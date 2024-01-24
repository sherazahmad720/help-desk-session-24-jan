class BankAccount {
    balance;
    address;
    atmPin;
    accountId;
    cnicNumber;
    accountTitle;
    logs = [];
    get getBalance() {
        return this.balance;
    }
    debosit(amount) {
        this.balance += amount;
        this.logs.push(`You have debosit ${amount}`);
    }
    withdraw(amount) {
        this.balance -= amount;
        this.logs.push(`You have withdraw ${amount}`);
    }
    get getLogs() {
        return this.logs;
    }
    constructor(balance, address, accountId, cnicNumber, accountTitle) {
        console.log("This is constructor of BankAccount");
        this.balance = balance;
        this.address = address;
        this.accountId = accountId;
        this.atmPin = 1234;
        this.cnicNumber = cnicNumber;
        this.accountTitle = accountTitle;
    }
}
class Atm extends BankAccount {
    constructor(balance, address, accountId, cnicNumber, accountTitle) {
        super(balance, address, accountId, cnicNumber, accountTitle);
    }
    withdraw(amount) {
        if (this.getBalance >= amount) {
            super.withdraw(amount);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
}
let myBank = new BankAccount(100000, "Islamabad", 123456789, 1234567891234, "Sajad Meezan Bank");
console.log(myBank.getBalance);
myBank.debosit(100000);
console.log(myBank.getBalance);
console.log(myBank.getLogs);
myBank.withdraw(50000);
console.log(myBank.getBalance);
console.log(myBank.getLogs);
let meezanCard = new Atm(100000, "Islamabad", 123456789, 1234567891234, "Sajad Meezan Bank");
meezanCard.withdraw(5000000);
export {};
