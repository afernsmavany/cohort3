
// 10th Daily:- More Array Exercises (Really) - November 6, 2019
// Using one of the callback functions we researched in the last exercise (but may have not used previously) 
// create a new array for balances >= 1000 from the staff data. 

const functions = {

filterBalances: (arr) => {
  return arr.filter((item) => {return item.balance>=1000});
},

// 9th Daily:- More Array Exercises - October 29, 2019
// write a function to receive the same array (staff) and return the total of balances
// write a function to receive the same array (staff) and return the average the balances

  totalBalances: (staff) => {
    let balanceArr = [];
    for (let i in staff) {
      balanceArr.push(staff[i].balance);
    }
    let total = balanceArr.reduce((acc, curr) => acc + curr);
    return total;
  },

  avgBalances: (staff) => {
    let avgArr = [];
    for (let i in staff) {
      avgArr.push(staff[i].balance);
    }
    let total = avgArr.reduce((acc, curr) => acc + curr);
    let average = total / (staff.length);
    return Math.round(average);
  },

  // 8th Daily:- loopStaff each / map - October 25, 2019
  // Do the same assignment again, but this time use callback functions. 
  // Use the ‘forEach’ and ‘map’ built-in functions.

  loopStaffForEach: (staff) => {
    let eachStaffEmail = [];
    staff.forEach(function (element) {
      let eachEmail = functions.makeEmailObj(element);
      eachStaffEmail.push(eachEmail);
    });
    return eachStaffEmail;
  },

  loopStaffMap: (staff) => {
    let mapStaffEmail = staff.map((elements) => {
      return functions.makeEmailObj(elements);
    });
    return mapStaffEmail;
  },

  // 7th Daily:- loopStaff: in / of - October 24, 2019
  // Do the same assignment as the last one using the two forms of the “for” statement. 
  // Create your own tests but use the function names that are provided below.

  loopStaffIn: (data) => {
    let loopStaffEmail = [];
    for (let element in data) {
      let eachEmail = functions.makeEmailObj(data[element]);
      loopStaffEmail.push(eachEmail)
    };
    return loopStaffEmail;
  },

  loopStaffOf: (data) => {
    let ofStaffEmail = [];
    for (let element of data) {
      let perEmail = functions.makeEmailObj(element);
      ofStaffEmail.push(perEmail)
    };
    return ofStaffEmail;
  },

  // 6th Daily: loopStaff - October 21, 2019

  // Write a function that will take an array and return an array of emails. The new function you are writing today will 
  // call makeEmailObj that you have written in a previous exercise. 
  // Copy and paste the code provided and you know the rest of the stick...Test first.

  loopStaff: (staff) => {
    let staffEmail = [];
    staff.forEach(function (element) {
      let emailsEach = functions.makeEmailObj(element);
      staffEmail.push(emailsEach);
    });
    return staffEmail;
  },

  // loopStaff: (staff) => {
  //   let staffEmail = [];
  //   for (let i =0; i <= staff.length; i++) {
  //     let emailsEach = functions.makeEmailObj(i);
  //     staffEmail.push(emailsEach);
  //   };
  //   return staffEmail;
  // },

  // 5th Daily: More Array Work - (October 16-17) 
  // Read the documentation on the following and create examples of each one:
  //   slice
  //   splice
  //   forEach
  //   map
  //   reduce
  //   filter
  //   sort

  sliceFunc: () => {
    let cities = ['Paris', 'Calgary', 'Mumbai', 'Philadelphia'];
    let slicedCities = cities.slice(1);
    return slicedCities;
  },

  spliceFunc: () => {
    let cars = ['Ferrari', 'Bugatti', 'Maserati'];
    cars.splice(1, 0, 'Lotus');
    return cars;
  },

  forEachLoop: (arr) => {
    let arrArray = [];
    arr.forEach(function (item) {
      arrArray.push(item);
    });
    return arrArray;
  },

  mapFunc: () => {
    const array = [1, 2, 3];
    const mapArr = array.map(number => {
      return number * 8;
    })
    return mapArr;
  },

  reduceFunc: () => {
    const array2 = [1, 2, 3,];
    const reduceArr = array2.reduce((acc, curr) =>
      acc + curr);
    return reduceArr;
  },

  filterFunc: () => {
    const array1 = [18, 25, 35, 48, 60];
    const filterArr = array1.filter(number =>
      (number > 15 && number % 3 === 0)
    );
    return filterArr;
  },

  sortFunc: () => {
    const array3 = [8, 9, 10,];
    const sortedArr = array3.sort();
    return sortedArr;
  },

  /*	1st Daily - AssertEquals (October 7, 2019)
    Write the function that will create this output:
  
  *** the two values are not the same:
      p1--> a
      p2--> b
  *** the two values are not the same:
      p1--> 1
      p2--> 2
  *** the two values are not the same:
      p1--> 2
      p2--> 2
  */

  // Write the function after this comment ---

  assertEquals: (num1, num2) => {
    if (num1 == num2) {
      return true;
    }
    else {
      console.log("the two values are not the same:");
      console.log(`p1--> ${num1}`);
      console.log(`p2--> ${num2}`);
      return false;
    }
  },

  // 2nd Daily (9th Oct, 2019):

  makeEmailArr: (arr) => {
    let first = arr[0].toLowerCase();
    let last = arr[1].toLowerCase();
    let email = first + "." + last + "@evolveu.ca";
    return email;
  },

  // 3rd Daily (11th Oct, 2019):
  makeEmailObj: (obj) => {
    return (obj.fname.toLowerCase() +
      "." + obj.lname.toLowerCase() +
      "@evolveu.ca"
    );
  },

  // 4th Daily: Prepare for Array Work - October 15, 2019
  // Let’s dig deeper into arrays. Read the documentation on the following and create examples of each one:
  // **Basics
  //     for
  //     while
  //     do while
  // **Next Level
  //     for in
  //     for of

  forLoop: (arr) => {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
      newArray.push(i);
    }
    return newArray;
  },

  whileLoop: (arr) => {
    let arrayTwo = [];
    let i = 7;
    while (i < 10) {
      arrayTwo.push(i);
      i++;
    }
    return arrayTwo;
  },

  doWhileLoop: (arr) => {
    let arrayOne = [];
    let i = 5;
    do {
      arrayOne.push(i);
      i++;
    } while (i < 5);
    return arrayOne;
  },

  forInLoop: (obj) => {
    let users = { fName: "Jerry", lName: "Seinfeld", age: 12 };
    let result = "";
    let i;
    for (i in users) {
      result += users[i] + " ";
    };
    return result;
  },

  forOfLoop: (arr) => {
    let resultArr = [];
    for (const i of arr) {
      resultArr.push(i);
    }
    return resultArr;
  },

};
export default functions;



