
class Account {

  constructor(accountName, balance) {
    this.accountName = accountName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdrawal(amount) {
    this.balance -= amount;
  }

  showBalance() {
    return this.balance;
  }
}

class AccountController {

  constructor() {
    this.accountList = [];
  }
  
  createAccount(accountName, balance) {
    this.accountList.push(new Account(accountName, balance));
  }

  removeAccount(accountName) {
    this.accountList = this.accountList.filter(account => {
      account.accountName !== accountName
    });
  }

  totalAccounts() {
    return this.accountList.reduce(((acc, cur) => acc + cur.balance), 0);
  }

  highestAccount() {
    return this.accountList.sort((a,b) => b.balance - a.balance)[0];
    // let highestVal = this.accountList.reduce((a, b) => {return Math.max(a, b)});
    // return highestVal;
  }

  lowestAccount() {
    return this.accountList.sort((a,b) => a.balance - b.balance)[0];
  }

}

export { Account, AccountController };