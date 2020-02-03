
import React, { Component } from 'react';
import './accounts.css';
import AccountController from './accountPSC.js';
import AccountCard from './accountCard.js';

class Accounts extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      startingBalanceInput: ""
    }
    this.accountManager = new AccountController();
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewAccount = () => {
    //minor validition
    //get values from inputs
    //call pojo create handler
    this.accountManager.createAccount(this.state.nameInput, Number(this.state.startingBalanceInput));

    this.setState({
      nameInput: "",
      startingBalanceInput: ""
    })

    console.log(this.accountManager.accountList);
  }

  renderCards = () => {
    console.log(this.accountManager.accountList.map(accountEach => {
      return <AccountCard
        key={accountEach.accountName}
        account={accountEach}
      // calcReport = {accountEach.calcReport}     
      // removeAccount = {this.removeAccount}
      />
    }))

    return this.accountManager.accountList.map(accountEach => {
      return <AccountCard
        key={accountEach.accountName}
        account={accountEach}
      // calcReport = {accountEach.calcReport}     
      // removeAccount = {this.removeAccount}
      />
    })
  }

  render() {
    return (

      <section >
        <h2> My Accounts </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" className="leftPanel">Account Manager
            <input
              id="input1"
              type="text"
              placeholder="Add an Account Name"
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.handleInputChange} />
            <input
              id="input2"
              type="text"
              placeholder="Enter initial balance"
              name="startingBalanceInput"
              value={this.state.startingBalanceInput}
              onChange={this.handleInputChange} />
            <button className="addBalance" id="idAddBalance" onClick={this.handleCreateNewAccount}>Create New Account</button>

            {/* <h2> Account List </h2> */}
            {this.renderCards()}

          </div>

          <div id="idRightPanel" className="rightPanel"> My Current Balances
            <h3 id="display">Display Status</h3>
          </div>
        </div>

      </section>

    );
  }
}

export default Accounts;


