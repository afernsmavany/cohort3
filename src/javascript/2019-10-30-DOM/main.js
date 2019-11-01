import functions from './functions.js';

add.addEventListener("click", () => {
  functions.test();
});

click.addEventListener("click", () => {
  functions.createCard(bigDiv);
});











// addBefore.addEventListener("click", () => {
//   let newDiv = document.createElement("div");
//   let current = event.target;
//   newDiv.className = "container";
//   newDiv.setAttribute("count", count++);
//   newDiv.textContent = `Count ${count}`;
//   bigDiv.insertBefore(newDiv, current);    
// });

// bigDiv.addEventListener("click", () => {
//   console.log(event.target);
//   console.log(event.target.getAttribute("count"));
//   console.log(event.target.parentNode);
//   console.log(event.target.parentNode.children);
// });

  // let newDiv = document.createElement("div");
  // newDiv.className = "container";
  // newDiv.setAttribute("count", count++);
  // newDiv.textContent = `Count ${count}`;
  // bigDiv.appendChild(newDiv);
  // console.log(bigDiv);
// });



