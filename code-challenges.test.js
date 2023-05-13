// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]

//TEST

// describe("shuffleArray",() => {
//   it ("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
//     expect (shuffleArray(colors1)).toEqual(expect.arrayContaining(shuffleArray(colors1)));
//     expect (shuffleArray(colors2)).toEqual(expect.arrayContaining(shuffleArray(colors2)));
//   })
// })


// b) Create the function that makes the test pass.

//Pseudo Code:
// Name: shuffleArray
// Input: Array (colors1, colors2)
// Output: New array with the first element removed and the remaining elements shuffled 
// Process: 
//- Create a function named shuffleArray with an array as the input. 
//- Use the .slice(1) method with a 1 in the parantheses to return only the elements after the first element, excluding the first element. 
//- Then use the .sort method (which takes in the comparison function Math.random() -0.5,) to shuffle the array 
//- The Math.random() -0.5 function returns a random number that is either positive or negative (between 0.5 and -0.5)
//- .sort uses the value of Math.random() -0.5 to compare two elements in the array and determines their relative order. 
//- Since the value of the comparison function is random, the order of the elements in the array is random too. 

// const shuffleArray = (array) => {
//   return array.slice(1).sort(() => Math.random() -0.5)

// }

// PASS  ./code-challenges.test.js
// shuffleArray
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (3 ms)






// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31


// describe("tallyIt", () => {
//   it("takes in an object that contains up votes and down votes and returns the end tally", () => {
//     expect(tallyIt(votes1)).toEqual(11);
//     expect(tallyIt(votes2)).toEqual(-31)
//   })
// })

// // ReferenceError: tallyIt is not defined

// // b) Create the function that makes the test pass.

// const tallyIt = (object) => {
//   return Object.values(object).reduce((a,b) => a-b)
//   }

// PASS  ./code-challenges.test.js
// tallyIt
//   ✓ takes in an object that contains up votes and down votes and returns the end tally (8 ms)




// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

//TEST
// describe("noDupes",() => {
//   it ("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//   expect(noDupes(dataTypesArray1, dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
 
//   })
// })
//ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

//Pseudocode:
//Name: noDupes
//input: 2 arrays (dataTypesArray1, dataTypesArray2)
//output: The 2 arrays combined with duplicates removed
//process: Name the function noDupes with the 2 arrays as input. 
//- Create a new variable called newArray that uses the .concat() method to combine the two arrays. 
//- Next return a new array using the spread syntax [...new] and the Set object constructor and pass newArray as an argument to remove the the duplicates from the combined newArray and return only the unique values.
//- The Set object is a built in JS object that lets us store unique values. 

// const noDupes = (array1, array2) => {
//   let newArray = array1.concat(array2)
//   return [...new Set(newArray)]
// }
// PASS  ./code-challenges.test.js
  // noDupes
  // ✓ takes in two arrays as arguments and returns one array with no duplicate values (6 ms)
