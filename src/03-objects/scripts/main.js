import { Account, AccountController } from './account.js';
import domFuncs from './domFuncs.js';

const accountManager = new AccountController;

idAddBalance.addEventListener("click", () => {
    let accountName = (input1.value);
    let balance = Number(input2.value);
    accountManager.createAccount(accountName, balance);
    domFuncs.createAccountCard(accountName, balance);
    console.log(accountManager.accountList);

    idDeposit.addEventListener("click", () => {
        // let accountName = (input1.value);
        // let balance = Number(input2.value);
        accountManager.deposit(amount);
        // domFuncs.createAccountCard(accountName, balance);
        console.log(accountManager.accountList);


        // idWithdrawal.addEventListener("click", () => {
        //     let accountName = (input1.value);
        //     let balance = Number(input2.value);
        //     accountManager.createAccount(accountName, balance);
        //     domFuncs.createAccountCard(accountName, balance);
        //     console.log(accountManager.accountList);

        //     idDelAcct.addEventListener("click", () => {
        //         let accountName = (input1.value);
        //         let balance = Number(input2.value);
        //         accountManager.createAccount(accountName, balance);
        //         domFuncs.createAccountCard(accountName, balance);
        //         console.log(accountManager.accountList);



            });






