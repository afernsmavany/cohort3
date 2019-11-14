import { Account, AccountController } from './account.js';
import domFuncs from './domFuncs.js';

const accountController = new AccountController;

idAddBalance.addEventListener("click", () => {
    console.log("Hello");
    let accountName = (input1.value);
    let balance = Number(input2.value);
    accountController.createAccount(accountName, balance);
    domFuncs.createAccountCard(accountName, balance);

    // const newAccount = domFuncs.addCard(idLeftPanel);
});





