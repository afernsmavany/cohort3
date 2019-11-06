
import functions from './daily'

// 10th Daily:- More Array Exercises (Really) - November 6, 2019

test('To return balances >= 1000', () => {
    expect(functions.filterBalances(data.staff)).toEqual([{ fname: "Liam", lname: "Henry", balance: 1000 },
    { fname: "Emma", lname: "Jones", balance: 1330 },]);

    // OR:
    const staffFilter= functions.filterBalances(data.staff);
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


