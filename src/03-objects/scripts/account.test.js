
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










// test('Check if accName works', () => {
//     const checkingAccount = new Account("Checking Account", 25);
//     expect(checkingAccount.deposit()).toEqual("Larry")
//     expect(d.getName()).toEqual("Dean")
//   });
  
  // test('Check if getAge works', () => {
  //   const l = new Person("Larry", 5);
  //   const d = new Person("Dean", 29);
  //   expect(l.getAge()).toEqual(5);
  //   l.getBirthday();
  //   expect(l.getAge()).toEqual(6);
    
  //   expect(d.getAge()).toEqual(29);
  //   d.getBirthday();
  //   expect(d.getAge()).toEqual(30);
  // });