import functions from './functions.js';

let big = document.getElementById("bigDiv");

add.addEventListener("click", () => {
  functions.test();
});

let count = 4;
click.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  newDiv.className = "container";
  newDiv.setAttribute("count", count++);
  newDiv.textContent = `Count ${count}`;
  big.appendChild(newDiv);
  console.log(bigDiv);
});

addBefore.addEventListener("click", () => {
  let newDiv = document.createElement("div");
  let current = event.target;
  newDiv.className = "container";
  newDiv.setAttribute("count", count++);
  newDiv.textContent = `Count ${count}`;
  big.appendChild(newDiv);
  current.insertBefore(newDiv, current);
  console.log(bigDiv);
});

bigDiv.addEventListener("click", () => {
  console.log(event.target);
  console.log(event.target.getAttribute("count"));
  console.log(event.target.parentNode);
  console.log(event.target.parentNode.children);
});





