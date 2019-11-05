import functions from './basicDom.js';

const inpt = document.querySelector(`#inpt`);
const ordList = document.querySelector(`#orderedList`)
const showCont = showDiv;

add.addEventListener("click", () => {
  if (inpt.value.length > 1) {
    functions.addListItem(inpt.value);
    inpt.value = "";
  }
});

del.addEventListener("click", () => {
  if (ordList.childElementCount > 0) {
    functions.deleteItem(ordList);
  }
});

show.addEventListener("click", () => {
  functions.showItems(ordList, showCont);
});

// Exercise 2

idLeftPanel.addEventListener("click", (event) => {
  console.log("Ex2Click:", event.target);
  let idLeftClick = event.target.id;
  console.log("leftClick:", idLeftClick);

  let elClicked = event.target;
  switch (elClicked.className) {
    case "addCard": {
      console.log("inAddCard Case :", event.target);
      const newCard = functions.addCard(idLeftPanel);
      break;
    }
    case "addBef": {
      //console.log("addBef Case :", event.target.parentElement.);

      let parentposition = elClicked.parentElement;
      // position = "beforebegin";  property of the method           
      const newCard = functions.positionCard(parentposition, "beforebegin")
      break;
    }
    case "addAft": {
      //console.log("addBef Case :", event.target.parentElement.);

      let parentposition = elClicked.parentElement;
      const newCard = functions.positionCard(parentposition, "afterend");
      break;

    }

    case "del": {
      console.log("inDel :", event.target.parentElement);
      let parentposition = elClicked.parentElement;
      const newCard = functions.delCard(parentposition);
      //console.log("in del newCard",newCard);
      break;
    }

    default: {
      console.log("Not Programmed for :", event.target);
    }
  }