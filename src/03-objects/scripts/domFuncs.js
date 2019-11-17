
const domFuncs = {

  createAccountCard: (accountName, balance) => {
    // functions.counter++;
    console.log("from createAccountCard: Hello World");
    let newAcct = document.createElement("div");
    newAcct.id = accountName;
    newAcct.className = "card";
    newAcct.textContent = accountName;


    let newAcctInput = document.createElement("input");
    // let newInputId = accountName + 'input';
    // newAcctInput.setAttribute('id', newInputId);
    newAcctInput.setAttribute('class', "inputField2");
    newAcctInput.setAttribute("type", "text");
    newAcctInput.placeholder = "Please enter amount..";
    newAcct.appendChild(newAcctInput);

    let buttonDeposit = document.createElement("button");
    // let newDepositId = accountName + 'deposit';
    buttonDeposit.setAttribute('class', "depositButton");
    // buttonDeposit.setAttribute('id', newDepositId);
    buttonDeposit.textContent = "Deposit";
    newAcct.appendChild(buttonDeposit);


    let buttonWithdrawal = document.createElement("button");

    buttonWithdrawal.textContent = "Withdrawal";
    newAcct.appendChild(buttonWithdrawal);


    let buttonDelete = document.createElement("button");

    buttonDelete.textContent = "Delete Account";
    newAcct.appendChild(buttonDelete);

    idLeftPanel.appendChild(newAcct);
   

  }
};

export default domFuncs;






