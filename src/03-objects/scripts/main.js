import { Account, AccountController } from './account.js';
import domFuncs from './domFuncs.js';

const accountManager = new AccountController;
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
        let currentAccount = e.target.parentElement;
        let amount = Number(currentAccount.children[1].value);
        if (amount > 0) {
            let currentAccountType = currentAccount.children[0].textContent;
            console.log(currentAccountType);
            let currentAccountIndex = accountManager.accountList.findIndex
                ((account) => account.name === currentAccountType);
            console.log(currentAccountIndex);
            accountManager.accountList[currentAccountIndex].deposit(amount);
            currentAccount.children[1].value = "";
        };
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








