import {Person, ooFunct} from './oostuff.js';

test('Check if npm test runs', () => {
  console.log("Hello from functions.test");
  ooFunct.test();
});

test('Check if getName works', () => {
  const l = new Person("Larry", 5);
  const d = new Person("Dean", 29);
  expect(l.getName()).toEqual("Larry")
  expect(d.getName()).toEqual("Dean")
});

test('Check if getAge works', () => {
  const l = new Person("Larry", 5);
  const d = new Person("Dean", 29);
  expect(l.getAge()).toEqual(5);
  l.getBirthday();
  expect(l.getAge()).toEqual(6);
  
  expect(d.getAge()).toEqual(29);
  d.getBirthday();
  expect(d.getAge()).toEqual(30);
});

