
import functions from './daily'

// 14th Daily:- Destructuring-assignment - November 26, 2019

test('To test destructuring array', () => {
    expect(functions.destructArr()).toEqual("Asif Mavany EvolveU Calgary");
});

test('To test destructuring object', () => {
    expect(functions.destructObj()).toEqual("Checking Account 100000");
});

// 13th Daily:- November 22, 2019 - Three ways of functions
let myArray = [
    { num: 5, str: "apples", origin: "BC" },
    { num: 7, str: "oranges", origin: "Florida" },
    { num: 2, str: "lemons", origin: "Mexico" },
    { num: 8, str: "bananas", origin: "Ecuador" },
    { num: 6, str: "avocados", origin: "Mexico" },
    { num: 4, str: "pineapple", origin: "Brazil" },
    { num: 3, str: "blueberries", origin: "Chile" },
    { num: 9, str: "pears", origin: "Oregon" },
    { num: 1, str: "cantaloupe", origin: "California" }
  ];

test('To sort the array by number', () => {
    expect(functions.numberSort(myArray)).toEqual([{ "num": 1, "origin": "California", "str": "cantaloupe" }, { "num": 2, "origin": "Mexico", "str": "lemons" },
    { "num": 3, "origin": "Chile", "str": "blueberries" }, { "num": 4, "origin": "Brazil", "str": "pineapple" }, { "num": 5, "origin": "BC", "str": "apples" },
    { "num": 6, "origin": "Mexico", "str": "avocados" }, { "num": 7, "origin": "Florida", "str": "oranges" },
    { "num": 8, "origin": "Ecuador", "str": "bananas" }, { "num": 9, "origin": "Oregon", "str": "pears" }]
    )
});

test('To sort the array by fruit', () => {
    expect(functions.fruitSort).toEqual([{ "num": 5, "origin": "BC", "str": "apples" }, { "num": 6, "origin": "Mexico", "str": "avocados" },
    { "num": 8, "origin": "Ecuador", "str": "bananas" }, { "num": 3, "origin": "Chile", "str": "blueberries" }, { "num": 1, "origin": "California", "str": "cantaloupe" },
    { "num": 2, "origin": "Mexico", "str": "lemons" }, { "num": 7, "origin": "Florida", "str": "oranges" }, { "num": 9, "origin": "Oregon", "str": "pears" },
    { "num": 4, "origin": "Brazil", "str": "pineapple" }]
    )
});

test('To sort the array by origin', () => {
    expect(functions.originSort).toEqual(
        [{ "num": 9, "origin": "Oregon", "str": "pears" }, { "num": 2, "origin": "Mexico", "str": "lemons" },
        { "num": 6, "origin": "Mexico", "str": "avocados" }, { "num": 7, "origin": "Florida", "str": "oranges" },
        { "num": 8, "origin": "Ecuador", "str": "bananas" }, { "num": 3, "origin": "Chile", "str": "blueberries" },
        { "num": 1, "origin": "California", "str": "cantaloupe" }, { "num": 4, "origin": "Brazil", "str": "pineapple" },
        { "num": 5, "origin": "BC", "str": "apples" }]
    )
});

// 12th Daily:- November 21, 2019 - Callback Exercise (Part 2)

test('To return total people, total age and average age', () => {
    const totalAll = functions.filterProvinces(people, functions.totals);
    expect(totalAll).toEqual({
        "averageAge": 38,
        "totalAge": 838,
        "totalPeople": 22,
    });
});

// 11th Daily:- Callback Exercise (Part 1) - November 8, 2019

const people = [
    { fname: "Alex", lname: "Smith", province: "BC", age: 33 },
    { fname: "Angela", lname: "Jones", province: "AB", age: 61 },
    { fname: "Anne", lname: "Bird", province: "SK", age: 35 },
    { fname: "Brent", lname: "Riddle", province: "MN", age: 79 },
    { fname: "Byron", lname: "Cardenas", province: "BC", age: 38 },
    { fname: "Carrie", lname: "Ramirez", province: "AB", age: 89 },
    { fname: "Cheryl", lname: "Glenn", province: "SK", age: 70 },
    { fname: "Dima", lname: "Curry", province: "MN", age: 67 },
    { fname: "Dustin", lname: "Bullock", province: "BC", age: 59 },
    { fname: "Eva", lname: "Keiths", province: "AB", age: 24 },
    { fname: "Faith", lname: "Liu", province: "SK", age: 46 },
    { fname: "Fawad", lname: "Bowman", province: "MN", age: 69 },
    { fname: "Forest", lname: "Vaughn", province: "BC", age: 52 },
    { fname: "Giovanni", lname: "Browning", province: "AB", age: 32 },
    { fname: "Greg", lname: "Hogan", province: "SK", age: 55 },
    { fname: "Harpreet", lname: "Ramsey", province: "MN", age: 18 },
    { fname: "Ian", lname: "Fitzgerald", province: "BC", age: 16 },
    { fname: "James", lname: "Kramer", province: "AB", age: 57 },
    { fname: "Jarvis", lname: "Ortega", province: "SK", age: 69 },
    { fname: "Jawad", lname: "Huerta", province: "MN", age: 35 },
    { fname: "Jinbong", lname: "Robinson", province: "BC", age: 26 },
    { fname: "Jingnan", lname: "Hatfield", province: "AB", age: 71 },
    { fname: "Joe", lname: "Banks", province: "SK", age: 37 },
    { fname: "Kristina", lname: "Dalton", province: "MN", age: 73 },
    { fname: "Latora", lname: "Matthews", province: "BC", age: 25 },
    { fname: "Lauren", lname: "McClure", province: "AB", age: 42 },
    { fname: "Licedt", lname: "Rasmussen", province: "SK", age: 30 },
    { fname: "Linden", lname: "Pierce", province: "MN", age: 68 },
    { fname: "Luis", lname: "Price", province: "BC", age: 23 },
    { fname: "Marcela", lname: "Perez", province: "AB", age: 20 },
    { fname: "Marilou", lname: "Graham", province: "SK", age: 32 },
    { fname: "Matt", lname: "Novak", province: "MN", age: 29 },
    { fname: "Monica", lname: "Giles", province: "BC", age: 34 },
    { fname: "Niloufar", lname: "Carson", province: "AB", age: 29 },
    { fname: "Omar", lname: "Olson", province: "SK", age: 69 },
    { fname: "Roger", lname: "Woodard", province: "MN", age: 84 },
    { fname: "Roman", lname: "Swanson", province: "BC", age: 21 },
    { fname: "Seun", lname: "Kelly", province: "AB", age: 60 },
    { fname: "Shane", lname: "Frost", province: "SK", age: 87 },
    { fname: "Steven", lname: "Haynes", province: "MN", age: 47 },
    { fname: "Thomas", lname: "Hart", province: "BC", age: 14 },
    { fname: "Trent", lname: "Kerr", province: "AB", age: 12 },
    { fname: "Darrell", lname: "Koch", province: "SK", age: 10 },
    { fname: "Tylor", lname: "Torres", province: "MN", age: 98 }
];

test('To check provincial data', () => {
    console.log(functions.filterProvinces(people, functions.names));
    expect(functions.filterProvinces(people, arr => arr)[0].province).toEqual("BC");
    expect(functions.filterProvinces(people, arr => arr)[1].province).toEqual("AB");
    expect(functions.filterProvinces(people, functions.names)[4]).toEqual("Dustin Bullock")
    expect(functions.filterProvinces(people, functions.names)[9]).toEqual("James Kramer")
});

// 10th Daily:- More Array Exercises (Really) - November 6, 2019

test('To return balances >= 1000', () => {
    expect(functions.filterBalances(data.staff)).toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },]);

    // OR:
    const staffFilter = functions.filterBalances(data.staff);
    expect(staffFilter).toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 }])
});

// 9th Daily:- More Array Exercises - October 29, 2019

test('To return the total of balances', () => {
    const staffTotal = functions.totalBalances(data.staff);
    expect(staffTotal).toEqual(3823)
});

test('To return the average balance', () => {
    const staffAverage = functions.avgBalances(data.staff);
    expect(staffAverage).toEqual(546)
});


// 8th Daily:- loopStaff each / map - October 25, 2019

test('For each email builder for company', () => {
    const eachStaffEmail = functions.loopStaffForEach(data.staff);
    expect(eachStaffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(eachStaffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(eachStaffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('Map email builder for company', () => {
    const mapStaffEmail = functions.loopStaffMap(data.staff);
    expect(mapStaffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(mapStaffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(mapStaffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// 7th Daily:- loopStaff: in / of - October 24, 2019

test('For in loop Staff Email for company', () => {
    const loopStaffEmail = functions.loopStaffIn(data.staff);
    expect(loopStaffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(loopStaffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(loopStaffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('For of loop Staff Email for company', () => {
    const ofStaffEmail = functions.loopStaffOf(data.staff);
    expect(ofStaffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(ofStaffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(ofStaffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


// // 6th Daily (October 21, 2019): 
// /*
//     Sample data for the next few exercises.
// */

const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

/*Write the function to build email addresses for the company.*/

test('email builder for company', () => {
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

// 5th Daily: More Array Work - (October 16-17): 

test('Check if Slice works', () => {
    expect(functions.sliceFunc(['Paris', 'Calgary', 'Mumbai', 'Philadelphia'])).toEqual(['Calgary', 'Mumbai', 'Philadelphia'])
});

test('Check if Splice works', () => {
    expect(functions.spliceFunc(['Ferrari', 'Bugatti', 'Maserati'])).toEqual(['Ferrari', 'Lotus', 'Bugatti', 'Maserati'])
});

test('Check if For Each Loop works', () => {
    expect(functions.forEachLoop([5, 6, 7])).toEqual([5, 6, 7])
});

test('Check if Map method works', () => {
    expect(functions.mapFunc([1, 2, 3])).toEqual([8, 16, 24])
});

test('Check if Reduce method works', () => {
    expect(functions.reduceFunc([1, 2, 3])).toEqual(6)
});

test('Check if Filter method works', () => {
    expect(functions.filterFunc([18, 25, 35, 48, 60])).toEqual([18, 48, 60])
});

test('Check if Sort method works', () => {
    expect(functions.sortFunc([8, 9, 10])).toEqual([10, 8, 9])
});

// 1st Daily (7th Oct, 2019):

test('Check equality', () => {
    expect(functions.assertEquals(1, 1)).toBe(true);
    expect(functions.assertEquals("a", "b")).toBe(false);
    expect(functions.assertEquals("a", "a")).toBe(true);
    expect(functions.assertEquals(1, 2)).toBe(false);
    expect(functions.assertEquals(2, 2)).toBe(true);
    expect(functions.assertEquals("2", 2)).toBe(true);
    expect(functions.assertEquals("This value", "This value")).toBe(true);
});

/* 2nd Daily (9th Oct, 2019):
Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

/*	3rd Daily (11th Oct, 2019):
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});

// 4th Daily: Prepare for Array Work - October 15, 2019

test('Check if For Loop works', () => {
    expect(functions.forLoop([0, 1, 2, 3])).toEqual([0, 1, 2, 3])
});

test('Check if While Loop works', () => {
    expect(functions.whileLoop([7, 8, 9])).toEqual([7, 8, 9])
});

test('Check if Do While Loop works', () => {
    expect(functions.doWhileLoop([5, 6, 7])).toEqual([5])
});

test('Check if For In Loop works', () => {
    expect(functions.forInLoop()).toEqual("Jerry Seinfeld 12 ")
});

test('Check if For Of Loop works', () => {
    expect(functions.forOfLoop([1, 2, 3])).toEqual([1, 2, 3])
});
