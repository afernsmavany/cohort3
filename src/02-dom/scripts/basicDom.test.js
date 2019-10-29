import domFunc from './basicDom.js';

test('Check children', () => {
  expect(functions.displayChild()).toEqual("Item 1", "Item 2", "Item 3");
});