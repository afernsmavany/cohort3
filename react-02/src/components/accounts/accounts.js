import React, { Component } from 'react';
import './accounts.css';
import { AccountController } from './accountPSC.js';

class Accounts extends Component {
  constructor() {
    super()
    this.state = {
      accountName: "",
      accountBal: null,
      AController: new AccountController()
    }
  }
  // oldState =  () => {
  //   this.setState({accountName : ""});
  //   this.setState({accountBal : ""})
  // }

  accountName = (eValue) => {
    this.setState({ accountName: eValue })
  }

  accountBal = (eValue) => {
    this.setState({ accountBal: eValue })
  }

  // handleClick = (() =>{this.setState(AController: AController.createAccount(this.state.accountName, this.state.accountBal));
  handleClick = (() => {
    const arrayAccounts = this.state.AController;
    arrayAccounts.createAccount(this.state.accountName, this.state.accountBal);
    // this.setState(this.state.AController.createAccount(this.state.accountName, this.state.accountBal));
    this.setState({
      AController: arrayAccounts,
    })
  }
  )

  // addAccountCard = (() => {
  //   return (
  //     <div className="card">
  //       <h2 className="cardHeader">Current {this.state.accountName} {this.state.accountBal}
  //       </h2> <input className="inputField2" type="text" placeholder="Please enter amount.." />
  //       <button className="depositButton">Deposit</button>
  //       <button className="withdrawalButton">Withdrawal</button>
  //       <button className="deleteButton">Delete Account</button> <output class="outputBoxClass" id="outputBoxId"></output>
  //     </div>)
  // }
  // )

  render() {

    return (
      <div>
        <div id="cards" />
        <h2> My Accounts </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" className="leftPanel">Account Manager
            <input id="input1" type="text" placeholder="Add an Account Name" onBlur={(event) => this.accountName(event.target.value)} />
            <input id="input2" type="text" placeholder="Enter initial balance" onBlur={(event) => this.accountBal(event.target.value)} />
            <button className="addBalance" id="idAddBalance"
              onClick={() => { this.handleClick() }}> Create New Account</button>

            <div className="card">
              <h2 className="cardHeader">Current {this.state.accountName} {this.state.accountBal} ></h2>
                <button className="withdrawalButton">Withdrawal</button>
                <button className="deleteButton">Delete Account</button> <output class="outputBoxClass" id="outputBoxId"></output>
            </div>
      </div>
          </div>
          </div>
          
        ); 
      }
    }
    
    
export default Accounts; 