import functions from './basicDom.js';

test('check Add ', () => {

  const ol = document.createElement("ol");
  document.body.appendChild(ol);
  ol.id = "orderedList";
  let listCount = ol.childElementCount;

  functions.addListItem("star");
  // console.log(listCount,  ol.childElementCount);
  functions.addListItem("cat");
  // console.log(listCount,  ol.childElementCount);

  expect(ol.childElementCount).toEqual(listCount + 2);
});

// 2nd Exercise:

test('check Show ', () => {

  //   const ol = document.createElement("ol");
  //   document.body.appendChild(ol);
  //   ol.id = "list-cont";
  //   let listCount = ol.childElementCount;


  //   functions.addListItem("star");
  //   // console.log(listCount,  ol.childElementCount);
  //   functions.addListItem("cat");
  //  // console.log(listCount,  ol.childElementCount);

  //   expect(ol.childElementCount).toEqual(listCount + 2);


});