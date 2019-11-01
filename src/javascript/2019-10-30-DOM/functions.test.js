import functions from './functions.js';

test('Check if npm test runs', () => {
  console.log("Hello from functions.test");
  functions.test();
});

test('Check if card exists', () => {
const bigDiv = document.createElement("div");  
const div = functions.createCard(bigDiv);
expect(div.getAttribute("count")).toEqual("1"); 
expect(div.textContent).toEqual("Count 1"); 

const div2 = functions.createCard(bigDiv);
expect(div2.getAttribute("count")).toEqual("2"); 
expect(div2.textContent).toEqual("Count 2"); 
});

test('Check card count', () => {
let bigDiv = document.createElement("div");
expect(bigDiv.childElementCount).toEqual(0);

functions.addCard(bigDiv); 
expect(bigDiv.childElementCount).toEqual(1); 

functions.addCard(bigDiv); 
expect(bigDiv.childElementCount).toEqual(2); 

functions.addCard(bigDiv); 
expect(bigDiv.childElementCount).toEqual(3); 
});