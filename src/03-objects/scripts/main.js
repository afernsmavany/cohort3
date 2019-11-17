import { Account, AccountController } from './account.js';
import domFuncs from './domFuncs.js';

const accountManager = new AccountController;
// const userInput2 = document.getElementsByClassName("inputField2");
const account = new Account;

idAddBalance.addEventListener("click", () => {
    let accountName = (input1.value);
    let balance = Number(input2.value);
    accountManager.createAccount(accountName, balance);
    domFuncs.createAccountCard(accountName, balance);
    console.log(accountManager.accountList);
});

idLeftPanel.addEventListener("click", (e) => {
    if (e.target.className === "depositButton") {
        let currentCard = e.toElement.parentElement;
        let cardInputVal = Number(currentCard.children[1].value);
        console.log(cardInputVal);
        console.log(accountManager[0]);
    //    accountManager[0].deposit(cardInputVal);
        console.log("Hello Deposit");
        console.log(accountManager.accountList);
    };

});



    // idWithdrawal.addEventListener("click", () => {
    //     let accountName = (input1.value);
    //     let balance = Number(input2.value);
    //     accountManager.createAccount(accountName, balance);
    //     console.log(accountManager.accountList);

    //     idDelAcct.addEventListener("click", () => {
    //         let accountName = (input1.value);
    //         let balance = Number(input2.value);
    //         accountManager.createAccount(accountName, balance);
    //         console.log(accountManager.accountList);








