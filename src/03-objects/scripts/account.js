
class Account {

  constructor(accountName, balance) {
    this.accountName = accountName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

  showBalance() {
    return this.balance;
  }
}

class AccountController {

  // constructor(accountName, balance) {
  //   this.accountName = accountName;
  //   this.balance = balance;
  // }
}

export {Account, AccountController};