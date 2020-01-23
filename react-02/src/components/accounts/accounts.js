
import React, { Component } from 'react';
import './accounts.css';
import AccountController from accountPSC.js;
import accountCard from accountCard.js;

class Accounts extends Component {
  constructor() {
    super();
    this.state = {
    
    }
    this.accountManager = new AccountController();
  }

renderCards = () => {
  return this.accountManager.accountList.map(accountEach => {
   return <
    key = {accountEach.name}     
    account = {accountEach}     
    calcReport = {accountEach.calcReport}     
    removeAccount = {this.removeAccount} />

  }


  )

}

render() {
  return (

    <section id="cards">
    <h2> My Accounts </h2>
    <div id="idPanelContainer">
        <div id="idLeftPanel" class="leftPanel">Account Manager
            <input id="input1" type="text" placeholder="Add an Account Name"/>
            <input id="input2" type="text" placeholder="Enter initial balance"/>
            <button class="addBalance" id="idAddBalance">Create New Account</button>
        </div>

        <div id="idRightPanel" class="rightPanel"> My Current Balances
            <h3 id="display"></h3>
      </div>
      </div>
   
</section>
    
  );
}
}

export default Accounts; 


