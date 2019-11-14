
const domFuncs = {

  createAccountCard: (accountName, balance) => {
    // functions.counter++;
    console.log("from createAccountCard: Hello World");
    let newAcct = document.createElement("div");
    newAcct.id = accountName;
    newAcct.className = "acctCard";
  }
};

export default domFuncs;






