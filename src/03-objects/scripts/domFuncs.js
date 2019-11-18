
const domFuncs = {

  createAccountCard: (accountName, balance) => {
    let newAcct = document.createElement("div");
    newAcct.id = accountName;
    newAcct.className = "card";
    // newAcct.textContent = `${accountName}`;
    idLeftPanel.appendChild(newAcct);

    let newCardHeader = document.createElement("h2");
    newCardHeader.className = "cardHeader";
    newCardHeader.textContent = `${accountName}`;
    newAcct.appendChild(newCardHeader);

    let newAcctInput = document.createElement("input");
    newAcctInput.setAttribute('class', "inputField2");
    newAcctInput.setAttribute("type", "text");
    newAcctInput.placeholder = "Please enter amount..";
    newAcct.appendChild(newAcctInput);

    let buttonDeposit = document.createElement("button");
    buttonDeposit.setAttribute('class', "depositButton");
    buttonDeposit.textContent = "Deposit";
    newAcct.appendChild(buttonDeposit);

    let buttonWithdrawal = document.createElement("button");
    buttonWithdrawal.setAttribute('class', "withdrawalButton");
    buttonWithdrawal.textContent = "Withdrawal";
    newAcct.appendChild(buttonWithdrawal);

    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute('class', "deleteButton");
    buttonDelete.textContent = "Delete Account";
    newAcct.appendChild(buttonDelete);
  },

  deleteAccountCard: (currentAccount) => {
    idLeftPanel.removeChild(currentAccount);
  },
};

export default domFuncs;






