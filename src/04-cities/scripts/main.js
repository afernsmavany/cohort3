import { City, Community } from './city.js';
import domFuncs from './domFuncs.js';

const cityManager = new Community;

idAddCity.addEventListener("click", () => {
    let key = 0; 
    key += 1;
    let name = (input1.value);
    let latitude = Number(input2.value);
    let longitude = Number(input3.value);
    let population = Number(input4.value);
    cityManager.createCity(key, name, latitude, longitude, population);
    domFuncs.createCityCard(key, name, latitude, longitude, population);
});

idLeftPanel.addEventListener("click", (e) => {
    if (e.target.className === "movedInButton") {
        let currentCity = e.target.parentElement;
        let number = Number(currentCity.children[1].value);
        if (number > 0) {
            let currentCityType = currentCity.children[0].textContent;
            console.log(currentCityType);
            let currentCityIndex = cityManager.cities.findIndex
                ((name) => name.key === currentCityType);
            console.log(currentCityIndex);
            cityManager.cities[currentCityIndex].movedIn(number);
            currentCity.children[1].value = "";
            console.log(cityManager.cities[0]);
            currentCity.children[5].textContent = cityManager.cities[currentCityIndex]
                .show();
        };
    };

    if (e.target.className === "movedOutButton") {
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
