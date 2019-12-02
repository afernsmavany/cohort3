
const domFuncs = {

  createCityCard: (key, name, latitude, longitude, population) => {
    let newCity = document.createElement("div");
    newCity.id = name;
    newCity.className = "card";
    idLeftPanel.appendChild(newCity);

    let newCityHeader = document.createElement("h2");
    newCityHeader.className = "cityHeader";
    newCityHeader.textContent = `${name}`;
    newCity.appendChild(newCityHeader);

    let newCityInput = document.createElement("input");
    newCityInput.setAttribute('class', "inputField2");
    newCityInput.setAttribute("type", "text");
    newCityInput.placeholder = "Please enter population..";
    newCity.appendChild(newCityInput);

    let buttonMovedIn = document.createElement("button");
    buttonMovedIn.setAttribute('class', "movedInButton");
    buttonMovedIn.textContent = "Moved In";
    newCity.appendChild(buttonMovedIn);

    let buttonMovedOut = document.createElement("button");
    buttonMovedOut.setAttribute('class', "movedOutButton");
    buttonMovedOut.textContent = "Moved Out";
    newCity.appendChild(buttonMovedOut);

    let buttonDelete = document.createElement("button");
    buttonDelete.setAttribute('class', "deleteButton");
    buttonDelete.textContent = "Delete City";
    newCity.appendChild(buttonDelete);

    let outputArea = document.createElement("output");
    outputArea.setAttribute('class', "outputBoxClass");
    outputArea.setAttribute('id', "outputBoxId");
    newCity.appendChild(outputArea);
  },

  deleteCityCard: (currentCityKey) => {
    console.log("return");
    // idLeftPanel.removeChild(currentCityKey);
    currentCityKey.remove();
  },
};
export default domFuncs;






