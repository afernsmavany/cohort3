
const domFuncs = {

  createCityCard: (name, latitude, longitude, population) => {
    let newCity = document.createElement("div");
    newCity.id = cityName;
    newCity.className = "card";
    idLeftPanel.appendChild(newCity);

    let newCityHeader = document.createElement("h2");
    newCityHeader.className = "cityHeader";
    newCityHeader.textContent = `${name}`;
    newCity.appendChild(newCityHeader);

    let newCityInput = document.createElement("input");
    newCityInput.setAttribute('class', "inputField2");
    newCityInput.setAttribute("type", "text");
    newCityInput.placeholder = "Please enter amount..";
    newCity.appendChild(newCityInput);

    let buttonDeposit = document.createElement("button");
    buttonDeposit.setAttribute('class', "depositButton");
    buttonDeposit.textContent = "Deposit";
    newCity.appendChild(buttonDeposit);

    let buttonWithdrawal = document.createElement("button");
    buttonWithdrawal.setAttribute('class', "withdrawalButton");
    buttonWithdrawal.textContent = "Withdrawal";
    newCity.appendChild(buttonWithdrawal);

    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute('class', "deleteButton");
    buttonDelete.textContent = "Delete Account";
    newCity.appendChild(buttonDelete);

    let outputArea = document.createElement("output");
    outputArea.setAttribute('class', "outputBoxClass");
    outputArea.setAttribute('id', "outputBoxId");
    newCity.appendChild(outputArea);
  },

  deleteAccountCard: (currentAccount) => {
    idLeftPanel.removeChild(currentAccount);
  },
};
export default domFuncs;






