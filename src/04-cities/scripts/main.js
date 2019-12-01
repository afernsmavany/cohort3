import { City, Community } from './city.js';
import domFuncs from './domFuncs.js';

const cityManager = new Community;

idAddCity.addEventListener("click", () => {
    let name = (input1.value);
    let latitude = Number(input2.value);
    let longitude = Number(input3.value);
    let population = Number(input4.value);
    cityManager.createCity(name, latitude, longitude, population);
    domFuncs.createCityCard(name, latitude, longitude, population);
});

idLeftPanel.addEventListener("click", (e) => {
    if (e.target.className === "depositButton") {
        let currentAccount = e.target.parentElement;
        let amount = Number(currentAccount.children[1].value);
        if (amount > 0) {
            let currentAccountType = currentAccount.children[0].textContent;
            let currentAccountIndex = accountManager.accountList.findIndex
                ((account) => account.accountName === currentAccountType);
            // let indexSelector = currentAccount.getElementsByClassName("outputBoxClass")[0];
            // accountManager.accountList[currentAccountIndex].deposit(indexSelector.value);
            accountManager.accountList[currentAccountIndex].deposit(amount);
            currentAccount.children[1].value = "";
            currentAccount.children[5].textContent = accountManager.accountList[currentAccountIndex]
                .showBalance();
        };
    };

    if (e.target.className === "withdrawalButton") {
        let currentAccount = e.target.parentElement;
        let amount = Number(currentAccount.children[1].value);
        if (amount > 0) {
            let currentAccountType = currentAccount.children[0].textContent;
            let currentAccountIndex = accountManager.accountList.findIndex
                ((account) => account.accountName === currentAccountType);
            accountManager.accountList[currentAccountIndex].withdrawal(amount);
            currentAccount.children[1].value = "";
            currentAccount.children[5].textContent = accountManager.accountList[currentAccountIndex]
                .showBalance();
        };
    };

    if (e.target.className === "deleteButton") {
        let currentAccount = e.target.parentElement;
        let currentAccountType = currentAccount.children[0].textContent;
        accountManager.removeAccount(currentAccountType);
        domFuncs.deleteAccountCard(currentAccount);
    };
});
