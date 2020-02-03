
import React, { Component } from 'react';
import './accounts.css';

class AccountCard extends Component {
  // constructor() {
  //   super(props);

  // }

  render() {
    return (
  
          <div id ="card" className = "card">{this.props.account.accountName}
          <h3>Amount:{this.props.account.balance }</h3>
            <input id="input1" type="number" placeholder="Please enter amount" />
            <button className="addBalance" id="idAddBalance">Deposit</button>
            <button className="addBalance" id="idAddBalance">Withdrawal</button>
            <button className="addBalance" id="idAddBalance">Delete Account</button>
          </div>
        
    );
  }
}

export default AccountCard;


