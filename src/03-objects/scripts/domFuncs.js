
const domFuncs = {

  createAccountCard: (accountName, balance) => {
    // functions.counter++;
    console.log("from createAccountCard: Hello World");
    let newAcct = document.createElement("div");
    newAcct.id = accountName;
    newAcct.className = "card";
    newAcct.textContent = accountName;
    idLeftPanel.appendChild(newAcct);
   
    let buttonDeposit = document.createElement("button");
    buttonDeposit.id = idDeposit;
    buttonDeposit.textContent = "Deposit";
    newAcct.appendChild(buttonDeposit);

    let buttonWithdrawal = document.createElement("button");
    buttonWithdrawal.textContent = "Withdrawal";
    newAcct.appendChild(buttonWithdrawal);

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Delete Account";
    newAcct.appendChild(buttonDelete);

  }
};

export default domFuncs;






