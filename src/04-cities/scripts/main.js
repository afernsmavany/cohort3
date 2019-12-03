import { City, Community } from './city.js';
import domFuncs from './domFuncs.js';

const cityManager = new Community;
let key = 0;

idAddCity.addEventListener("click", () => {
    let name = (input1.value);
    let latitude = Number(input2.value);
    let longitude = Number(input3.value);
    let population = Number(input4.value);
    cityManager.createCity(key, name, latitude, longitude, population);
    domFuncs.createCityCard(key, name, latitude, longitude, population);
    key += 1;
    let cityNorthern = cityManager.getMostNorthern();
    output2.textContent = cityNorthern.name;
    let citySouthern = cityManager.getMostSouthern();
    output4.textContent = citySouthern.name;
    output6.textContent = cityManager.getPopulation();
});

idLeftPanel.addEventListener("click", (e) => {
    if (e.target.className === "movedInButton") {
        let currentCity = e.target.parentElement;
        let number = Number(currentCity.children[1].value);
        if (number > 0) {
            let currentCityType = currentCity.children[0].textContent;
            // console.log(currentCityType);
            // console.log(cityManager.cities);
            let currentCityIndex = cityManager.cities.findIndex
                ((city) => city.name === currentCityType);
            // console.log(currentCityIndex);

            let currentCityKey = cityManager.cities[currentCityIndex].key;
            // console.log(currentCityKey);
            // console.log(currentCityIndex);

            cityManager.cities[currentCityKey].movedIn(number);
            output6.textContent = cityManager.getPopulation();
            currentCity.children[1].value = "";
            // console.log(cityManager.cities[currentCityKey]);
            currentCity.children[5].textContent = cityManager.cities
            [currentCityKey].show();
        };
    };

    if (e.target.className === "movedOutButton") {
        let currentCity = e.target.parentElement;
        let number = Number(currentCity.children[1].value);
        if (number > 0) {
            let currentCityType = currentCity.children[0].textContent;
            let currentCityIndex = cityManager.cities.findIndex
                ((city) => city.name === currentCityType);
            let currentCityKey = cityManager.cities[currentCityIndex].key;
            cityManager.cities[currentCityKey].movedOut(number);
            output6.textContent = cityManager.getPopulation();
            currentCity.children[1].value = "";
            currentCity.children[5].textContent = cityManager.cities
            [currentCityKey].show(currentCity);
        };
    };

    if (e.target.className === "deleteButton") {
        let currentCity = e.target.parentElement;
        let currentCityType = currentCity.children[0].textContent;
        let currentCityIndex = cityManager.cities.findIndex
            ((city) => city.name === currentCityType);
        let currentCityKey = cityManager.cities[currentCityIndex].key;
        console.log(currentCityKey);
        // cityManager.cities[currentCityKey].deleteCity(0);
        cityManager.deleteCity(currentCityKey);
        console.log(currentCity.parentElement);
        domFuncs.deleteCityCard(currentCity);
        console.log(cityManager.cities);
    };
});
