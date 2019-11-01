
const functions = {

  test: () => {
    console.log("Hello from functions");
  },

  cardCount: 0,

  createCard: (bigDiv) => {
    let divTwo = document.createElement("div");
    functions.cardCount++;
    bigDiv.appendChild(divTwo);
    divTwo.className = "container";
    divTwo.setAttribute("count", functions.cardCount);
    divTwo.textContent = `Count ${functions.cardCount}`;
    return divTwo;
  },

  addCard: (bigDiv) => {
    let cardInGrp = functions.createCard(bigDiv);
    bigDiv.appendChild(cardInGrp);
   return;
  }

};
export default functions; 