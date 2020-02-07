
import React, { Component } from 'react';
import './cities.css';
import Community from './citiesPSC.js';
import CitiesCard from './citiesCard.js';

class Cities extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      latitude: "",
      longitude: "",
      population: "",
      northernMost: "",
      southernMost: "",
      totalPopulation: "",
    }
    this.citiesManager = new Community();
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCreateNewCity = () => {
    //minor validition
    //get values from inputs
    //call pojo create handler
    this.citiesManager.createCity(this.state.key, this.state.nameInput, this.state.latitude,
      this.state.longitude, this.state.population);
    this.calculate();

    this.setState({
      nameInput: "",
      latitude: "",
      longitude: "",
      population: ""
    })
    // console.log(this.accountManager.highestAccount().balance);
    // console.log(this.accountManager.accountList);
  }

  handleDelete = (accountName) => {
    this.citiesManager.deleteCity(this.key);
    this.calculate();
    this.setState({
      nameInput: "",
      latitude: "",
      longitude: "",
      population: ""
    })
  }

  calculate = () => {
    this.setState({
      northernMost: this.citiesManager.getMostNorthern(),
      southernMost: this.citiesManager.getMostSouthern().balance,
      totalPopulation: this.citiesManager.getPopulation().balance,
    })
  }

  renderCards = () => {
    return this.citiesManager.cities.map(cityEach => {
      return <CitiesCard
        key={cityEach.name}
        account={cityEach}
        calculate={this.calculate}
        removeCity={this.handleDelete}
      />
    })
  }

  render() {
    return (

      <section >
        <h2> My Cities </h2>
        <div id="idPanelContainer">
          <div id="idLeftPanel" className="leftPanel">Cities Manager
            <input
              id="input1"
              type="text"
              placeholder="Add a City Name"
              name="nameInput"
              value={this.state.nameInput}
              onChange={this.handleInputChange} />
            <input
              id="input2"
              type="number"
              placeholder="Add latitude"
              name="latitude"
              value={this.state.latitude}
              onChange={this.handleInputChange} />
            <input
              id="input3"
              type="number"
              placeholder="Add longitude"
              name="longitude"
              value={this.state.longitude}
              onChange={this.handleInputChange} />
            <input
              id="input4"
              type="number"
              placeholder="Add population"
              name="population"
              value={this.state.population}
              onChange={this.handleInputChange} />

            <button className="addBalance" id="idAddBalance" onClick={this.handleCreateNewCity}>Create New City</button>

            {/* <h2> Account List </h2> */}
            {this.renderCards()}

          </div>

          <div id="idRightPanel" className="rightPanel"> City Statistics
            <h3 id="display">The northern most city is: {this.state.totalDisplay}</h3>
            <h3 id="display">The southern most city is: {this.state.highestDisplay}</h3>
            <h3 id="display">The total population of all cities is: {this.state.lowestDisplay}</h3>

          </div>
        </div>

      </section>
    );
  }
}

export default Cities;


