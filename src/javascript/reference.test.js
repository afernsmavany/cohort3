
// import functions from reference.js;

test('How do pointers work', () => {
  console.log("Reference");
  let a = {"name":"Larry", "bal":10};
  const arr = [];
  const obj = {};
  arr.push(a);

  console.log(arr[0]);
  console.log(arr);

  obj[a.name] = a; //points "Larry" (taken from object a), to the entire object a

  console.log(obj[a.name]);
  
  expect(a.bal).toBe(10);
  expect(arr[0].bal).toBe(10);
  expect(obj[a.name].bal).toBe(10);
  expect(obj.Larry.bal).toBe(10);

  a.bal+=1;
  expect(a.bal).toBe(11);
  expect(arr[0].bal).toBe(11);
  expect(obj[a.name].bal).toBe(11);
  expect(obj.Larry.bal).toBe(11);

  addThree(a);
  expect(a.bal).toBe(14);
  expect(arr[0].bal).toBe(14);
  expect(obj[a.name].bal).toBe(14);
  expect(obj.Larry.bal).toBe(14);
});

function addThree(thing) {
  thing.bal = thing.bal + 3;
}


