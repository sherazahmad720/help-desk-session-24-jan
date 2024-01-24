
class BankAccount {
    private balance: number;
    private address: string;
    private atmPin: number | undefined;
    accountId: number;
    private cnicNumber: number;
    accountTitle: string;
    logs: string[] = [];

    get getBalance(): number {
        return this.balance;
    }

    debosit(amount: number): void {
        this.balance += amount;
        this.logs.push(`You have debosit ${amount}`);
    }

    withdraw(amount: number): void {
        this.balance -= amount;
        this.logs.push(`You have withdraw ${amount}`);
    }

    get getLogs(): string[] {
        return this.logs;
    }

    constructor(balance: number, address: string, accountId: number, cnicNumber: number, accountTitle: string) {
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
    constructor(balance: number, address: string, accountId: number, cnicNumber: number, accountTitle: string) {
        super(balance, address, accountId, cnicNumber, accountTitle);
    }

    withdraw(amount: number): void {
        if (this.getBalance >= amount) {
            super.withdraw(amount);
        } else {
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


