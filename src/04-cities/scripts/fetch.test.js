import apiFunctions from './fetch.js';
import { City, Community } from './city.js';

global.fetch = require('node-fetch');

const url = 'http://localhost:5000/';

const calgary = {"key":1, "name":"Calgary", "latitude":51.05, "longitude":-114.05, "population":1200000}
const edmonton = {"key":2, "name":"Edmonton", "latitude":53.55, "longitude":-113.49, "population":2200000}
const redDeer = {"key":3, "name":"Red Deer", "latitude":52.28, "longitude":-113.81, "population":20000}

test('test that the fetch works?', async () => {
  // Check that the server is running and clear any data
  let data = await apiFunctions.postData(url + 'clear');

  data = await apiFunctions.postData(url + 'all');
  expect(data.status).toEqual(200);
  expect(data.length).toBe(0);
});

test('test that load works?', async () => {
  let data = await apiFunctions.postData(url + 'clear');
  const cityManager = new Community();

  data = await apiFunctions.postData(url + 'add', calgary);
  data = await apiFunctions.postData(url + 'add', edmonton);
  data = await apiFunctions.postData(url + 'all');

  expect(data.status).toEqual(200);
  expect(data.length).toBe(2);

  // below is our function:
  await apiFunctions.loadData(cityManager);

  expect(data.status).toEqual(200);
  expect(data.length).toBe(2);

  expect(cityManager.cities.length).toBe(2);
  expect(cityManager.cities[0].key).toBe(1);
});