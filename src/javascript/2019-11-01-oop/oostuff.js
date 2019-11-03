
const ooFunct = {

  test: () => {
    console.log("Hello from functions");
  }
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

getName() {
return this.name;
}

getAge() {
return this.age;
}

getBirthday() {
return this.age += 1;
}
}

export { Person, ooFunct}; 