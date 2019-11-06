
import {Account, AccountController} from './account.js';


test('Check constructor', () => {
  const checkingAccount = new Account("Checking Account", 25);
  expect(checkingAccount.accountName).toEqual("Checking Account")
  expect(checkingAccount.balance).toEqual(25)
});

test('Check deposit', () => {
  const checkingAccount = new Account("Checking Account", 25);
  checkingAccount.deposit(10);
  expect(checkingAccount.balance).toEqual(35);
});

test('Check withdrawal', () => {
  const checkingAccount = new Account("Checking Account", 35);
  checkingAccount.withdraw(30);
  expect(checkingAccount.balance).toEqual(5);
});

test('Check withdrawal', () => {
  const checkingAccount = new Account("Checking Account", 5);
  checkingAccount.showBalance();
  expect(checkingAccount.balance).toEqual(5);
});










