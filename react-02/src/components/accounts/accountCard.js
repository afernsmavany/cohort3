
import React, { Component } from 'react';
import './accounts.css';

class AccountCard extends Component {
  // constructor() {
  //   super(props);
   
  // }

  render() {
    return (

      <div id="singleCard">
        <h2> {this.props.account.name} </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" class="leftPanel">Account Manager
            <input id="input1" type="number" placeholder="Please enter amount" />
            <button className="addBalance" id="idAddBalance">Deposit</button>
            <button className="addBalance" id="idAddBalance">Withdrawal</button>
            <button className="addBalance" id="idAddBalance">Delete Account</button>
          </div>
        </div>
        </div>
        );
      }
    }
    
    export default AccountCard;
    
    
