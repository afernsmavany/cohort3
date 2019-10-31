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
})
