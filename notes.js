/*Javascript-Basics-FCC */
/*******UNCOMMENT FUNCTION CALLS TO VIEW IN BROWSER CONSOLE********/
//
//
//

const AssignOneVariableToAnother = () => {
  /* Assigning the Value of One Variable to Another*/
  //Assign the contents of a to variable b
  //Setup
  var a;
  a = 7;
  var b;
  b = a;
  console.log(b);
};
// AssignOneVariableToAnother();

const UnderstandingUninitializedVariables = () => {
  //-when js varioables are delcared, they haave intial val of undefined
  //-math operation on undefined variable will result in NaN
  //-concatenate a string with undefined var string will be undefined

  /*Initialize the three variables a, b, d with 5, 10 and "i am a"
  respectively so that they will not be undefined */
  const setupDONTmodify = () => {
    //only change code below this line
    var a;
    var b;
    var c;
    //only change code above this line

    a = a + 1;
    b = b + 5;
    c = c + "string!";
  };
  setupDONTmodify();

  const codeToModify = () => {
    //only change code below this line
    var a = 5; //initializing variables
    var b = 10;
    var c = "I am a";
    //only change code above this line

    a = a + 1;
    b = b + 5;
    c = c + " string!";
    console.log(a, b, c);
  };
  codeToModify();
};
// UnderstandingUninitializedVariables();

const DifferenceBetweenLetAndVar = () => {
  // with var you can redeclare variables
  const varExample = () => {
    var camper = "James";
    var camper = "David";
    console.log(camper);
  };
  varExample();
  /*In larger codebase you might overwrite a variable that you
  didn't mean to. behaviour doesn't throw an error so it's
  hard for bug fixes */
  const letExample = () => {
    // let camper = "James";
    // let camper = "David"; // you can already see red-underline
    console.log(camper);
    /*in browser console, this is the error
        Uncaught SyntaxError: redeclaration of let campernotes.js:68:9note: Previously declared at line 67, column 9 */
  };
  // letExample();
};
// DifferenceBetweenLetAndVar();

const DeclareReadOnlyVariableWithConstKeyword = () => {
  //NOTE= common practice for devs to name consts with all UPPERCASE_SNAKE syntax
  const SETUP = () => {
    var fCC = "freeCodeCamp";
    var fact = "is cool!";
    fact = "is awesome!";
    console.log(fCC, fact);
  };
  SETUP();
  /*Change the code so that all the variables are declared using
LET or CONST */
  const MODIFIED_CODE = () => {
    const FCC = "freeCodeCamp"; // Change this line
    let fact = "is cool!"; // Change this line
    fact = "is awesome!";
    console.log(FCC, fact); // Change this line
  };
  MODIFIED_CODE();
};
// DeclareReadOnlyVariableWithConstKeyword();

const CompoundAssignmentWithAugmentedAddition = () => {
  /*IN Programming, it is common to use assignments to modify the contents of a variable */
  /*Use the += operator instead of
  -  myVar = myVar + 1
  - will be myVar += 1 */
  //
  //
  //
  /*other operators with augmented operations are
  - subtraction -=
  - multiplication *=
  - division /= */
};
// CompoundAssignmentWithAugmentedAddition();

const EscapeSequencesInStrings = () => {
  /*Escape sequyences allow you to use characters you may not otherwise be able to use in a string */
  //
  //
  //
  /*Code and Ouput */
  // \' --- single quote
  // \" --- double quote
  // \\ --- backslash
  // \n --- newline
  // \t --- tab
  // \r --- carriage return
  // \b --- backspace
  // \f --- form feed
  const ESCAPED_SEQUENCES = () => {
    const myStr = "FirstLine\n \t \\Secondline\n ThirdLine";
    console.log(myStr);
  };
  ESCAPED_SEQUENCES();
};
// EscapeSequencesInStrings();

const ConcatenatingStringWithPlusOperator = () => {
  /*can you += just like with nums */
  let ourStr = "I come first then ";
  ourStr += "I come second";
  console.log(ourStr);
};
// ConcatenatingStringWithPlusOperator();

const AppendingVariablesToStrings = () => {
  /*You can also append variables to a string using += */
  const anAdjective = "awesome!";
  let ourStr = "freeCodeCamp is ";
  let result = (ourStr += anAdjective);
  console.log(result);
};
// AppendingVariablesToStrings();

const understandStringImmutability = () => {
  let myStr = "Bob";
  myStr[0] = "J";
  //will still console.log "Bob" because string values are immutable
  console.log(myStr);
};
// understandStringImmutability();

const bracketNotationToFindLastCharacterInString = () => {
  const firstName = "Ada";
  const lasatLetter = firstName[firstName.length - 1]; //has to be  - 1 because index starts at 0
  console.log(lasatLetter);
};
// bracketNotationToFindLastCharacterInString();

const storeMultipleVariablesUsingJSArrays = () => {
  const myArray = ["bread", 23];
  console.log(myArray);
};
// storeMultipleVariablesUsingJSArrays();

const nestOneArrayWithinAnother = () => {
  const teams = [
    ["Bulls", 23],
    ["Lakers", 8],
  ];
  console.log(teams);
};
// nestOneArrayWithinAnother();

const accessMultiDimensionalArrWithIndexes = () => {
  const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  const myData = myArray[3][0]; // will display the 4th index "[3]"
  const innerData = myArray[3][0][2]; // will display
  console.log(myData);
  console.log(innerData);
};
// accessMultiDimensionalArrWithIndexes();

const manipulateArraysWithPushMethod = () => {
  const arr1 = [1, 2, 3];
  arr1.push(4, 5);

  const arr2 = ["Stimpson", "J", "cat"];
  arr2.push(["happy", "joy"]);
  console.log(arr1, arr2);
};
// manipulateArraysWithPushMethod();

const manipulateArraysWithPopMethod = () => {
  //.pop method is used to pop a value off the end of an array.
  //can store this popped off val by assigning it to a variable
  const myArr = [1, 4, 6];
  console.log(myArr); //this will show all 3 elements in arr because the pop hasn't happened yet
  const poppedElement = myArr.pop();
  console.log(poppedElement);
  console.log(myArr); //this will show the updated myArr after the pop method has been used
};
// manipulateArraysWithPopMethod();

const manipulateArraysWithShiftMethod = () => {
  //shift method removes first element of array and shifts it to another array stored as a variable
  const ourArray = ["Stimpson", "J", ["cat"]];
  const removedFromOurArray = ourArray.shift();
  console.log(removedFromOurArray);
};
// manipulateArraysWithShiftMethod();

const manipulateArraysWithUnshiftMethod = () => {
  //unshift adds elements to the beginning of the array
  const ourArray = ["Stimpson", "J", "cat"];
  ourArray.shift();
  ourArray.unshift("Happy");
  console.log(ourArray);
};
// manipulateArraysWithUnshiftMethod();

const SHOPPING_LIST = () => {
  // create a shopping list that's a multi-dimensional arr
  const myList = [
    ["Orange Juice", 7],
    ["Kit-Kats", 24],
    ["Lube", 103],
    ["Draino", -1],
    ["Watermelon", 3],
    ["Microwave", 50],
  ];
  console.log(myList);
};
SHOPPING_LIST();

const WRITE_REUSABLE_JAVASCRIPT_WITH_FUNCTIONS = () => {
  // can INVOKE a function by using it's name followed by parentheses
  // all code between curly braces {} will be executed each time the function is called
  function reusableFunction() {
    console.log("Hi World");
  }

  reusableFunction();
};
WRITE_REUSABLE_JAVASCRIPT_WITH_FUNCTIONS();

const PASSING_VALUES_TO_FUNCTIONS_WITH_ARGUMENTS = () => {
  // PARAMETERS are placeholders eg. function myFunc(val, obj) // myFunc is defined with two parameters
  // ARGUMENTS are  the values passed into a function. example below
  function myFunc(val, obj) {
    console.log(val, obj);
  }
  myFunc(2, "someObject");

  function addNumbers(num1, num2) {
    console.log(num1 + num2);
  }
  addNumbers(5, 7);
};
PASSING_VALUES_TO_FUNCTIONS_WITH_ARGUMENTS();

const RETURN_A_VALUE_FROM_A_FUNCTION_WITH_RETURN = () => {
  // we just learned that you can pass values into a function with args
  // we can also use a return statement to send a VALUE BACK OUT of a function
  // example below
  const EXAMPLE_ONE = () => {
    function plusThree(num) {
      return num + 3;
      // now if I call plusThree with an argument of any number it will take that number and add 3
    }
    let result = plusThree(20);
    console.log(result);
  };
  EXAMPLE_ONE();

  const EXAMPLE_TWO = () => {
    function timesFive(shit) {
      let numbum = shit * 5;
      return numbum;
    }
    let answer = timesFive(5);
    console.log(answer);
  };
  EXAMPLE_TWO();
};
RETURN_A_VALUE_FROM_A_FUNCTION_WITH_RETURN();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//
//
//past notes below
function containedExample() {
  const demoArray = [1, 2, 3, 4, 5];

  const arrayEx = [];
  arrayEx.push(demoArray[0]); //pushing index 0 into arrayEx
  console.log(arrayEx);
}
// containedExample();

//iteration example//
function multiplyItr(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product; //
}
// console.log(multiplyItr([2, 5, 8], 2));

//recursion example//
//multiply(arr, n) == multiply(arr, n - 1) * arr[n-1]
function multiplyRec(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiplyRec(arr, n - 1) * arr[n - 1];
  }
}

// console.log(multiplyRec([2, 5, 8], 2));

//Iterative sum of "n" elements in an array

function sumItr(arr, n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }
  return sum;
}

// console.log(sumItr([1, 1, 1], 2));

//Recursive sum of "n" elements in an array
function sumRec(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sumRec(arr, n - 1) + arr[n - 1];
  }
}
// console.log(sumRec([2, 3, 4, 5], 5));

//Generate Random Numbers Within a Range//
function RandomNumWithRange(smol, tol) {
  return Math.floor(Math.random() * (tol - smol) + 1) + smol;
}

// console.log(RandomNumWithRange(5, 15));

/*
-
-
-
-
-
    UPDATE RECORD COLLECTION

    SETUP:
      - RECORDS - an objet containing several individual albums
      - ID - a number representing a specific album in the records object
      - PROP - a string representing the name of the album's property to update
      - Value - a string containing the information used to update th album's property

    REQUIREMENTS:
      - Your function must always return the entire RECORDS object
      - If VALUE is an empty string, delete the given prop property from the album
      - If PROP isn't TRACKS and VALUE isn't an empty string, assign the VALUE to that album's PROP
      - If PROP !== TRACKS && VALUE !== "" need to update the album's TRACK's array. First,
        if the album does not have a tracks property, assign it an empty array.
        Then add the value as thelast item in the album's tracks array

*/
const gameCollection = {
  eldenRing: {
    playstation: {
      releaseYear: "2022",
      genre: "RPG",
      criticScore: "10/10",
      delivery: ["disk", "digital"],
    },
  },

  bioshock: {
    xbox: {
      releaseYear: "2007",
      genre: "RPG",
      criticScore: "9/10",
      delivery: ["disk", "cartridge"],
    },
  },

  newHorizons: {
    nintendo: {
      releaseYear: "2020",
      genre: "Social Simulation",
      delivery: [],
    },
  },

  ageOfEmpiresII: {
    pc: {
      releaseYear: "1999",
    },
  },
};

function updateGameInfoMeta(games, title, platform, prop, value) {
  if (value === "") {
    delete games[title][platform][prop];
  } else if (prop !== "delivery" && value !== "") {
    games[title][platform][prop] = value;
  } else if (prop === "delivery" && value !== "") {
    if (games[title][platform].hasOwnProperty("delivery") === false) {
      games[title][platform][prop] = [];
    }
    return games[title][platform][prop].push(value);
  }

  return games;
}
updateGameInfoMeta(gameCollection, "ageOfEmpiresII", "pc", "genre", "CRPG :)");

// console.log(JSON.stringify(gameCollection, null, 2));
// console.log(gameCollection);

/*
-
-
-
RECURSION TO CREATE A COUNTDOWN
-
-
-
*/
function countUp(n) {
  if (n < 5) {
    return [];
  } else {
    const countArray = countUp(n - 1);
    countArray.push(n);
    return countArray;
  }
}

// console.log(countUp(10));

/*
-
-
-
RECURSION TO CREATE RANGE OF NUMBERS
-
-
-
*/
/* 
REBOOT'S NOTES ON IT
- 
- 
-
1. have end condition. condition that returns the array []
that is also the conditional that stops the recursion.

2. check if endNum is less than startNum. Going to recurse down from
EndNum or eg.5 to startNum or eg.1 and it will return all the recrused function calls within it


3. entire recursive call stack has to be resolved until it hits base case before the push happens

*/

function rangeofNumbers1(startNum, endNum) {
  if (endNum < startNum) {
    console.log(
      `I am the function rangeofNumbers1(${startNum}, ${endNum}) and I am about to return []`
    );
    return [];
  } else {
    console.log(
      `I'm rangeofNumbers1(${startNum}, ${endNum}) and about to call rangeofNumbers1(${startNum}, ${
        endNum - 1
      })`
    );
    let recursionPart = rangeofNumbers1(startNum, endNum - 1);
    console.log(
      `I'm rangeofNumbers1(${startNum}, ${endNum}) and just recieved the array [${recursionPart}] from
      rangeofNumbers1(${startNum}, ${endNum - 1})`
    );

    recursionPart.push(endNum); //entire recrusive callstack has to resolve first
    console.log(`I'm rangeofNumbers1(${startNum}, ${endNum}) and just pushed ${endNum} in the array
      about to return [${recursionPart}] `);
    return recursionPart;
  }
}
// console.log(rangeofNumbers1(1, 5));
//
//
//

/*
How I solved it the second time
*/

function mySecondSolution() {
  function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
      console.log(`func(${startNum}, ${endNum}) about to return []`);
      return [];
    } else {
      console.log(
        `R.O.N(${startNum}, ${endNum}) about to call R.O.N(${
          startNum + 1
        }, ${endNum})`
      );
      const recursionPart = rangeOfNumbers(startNum + 1, endNum);
      console.log(` I'm R.O.N(${startNum}, ${endNum}) about to recieve 
      the array ${recursionPart} from R.O.N(${startNum + 1}, ${endNum})`);
      recursionPart.unshift(startNum);
      console.log(`R.O.N(${startNum}, ${endNum}) and unshifted ${startNum} in the array
      and about to return [node${recursionPart}]`);
      return recursionPart;
    }
  }
  console.log(rangeOfNumbers(1, 5));
}
// mySecondSolution();

//
//
//

/* using recursion to represent factorial */

function factorial(n) {
  // console.log(n); //this is a check to see if it's recursing down to base case
  if (n <= 0) {
    return 1;
  } else {
    const factorialComputation = n * factorial(n - 1); //this is the recursion, will call itself again
    // console.log(`${n} * factorial(${n - 1}) = ${factorialComputation}`);
    return factorialComputation;
  }
}

// console.log(factorial(4));

/** 
 
 PROFILE LOOK UP BAD CODE
 
 */

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// function lookUpProfile(name, prop) {
//   for (let i = 0; i < contacts.length; i++)
//     if (contacts[i]["firstName"] === name && contacts[i].hasOwnProperty(prop)) {
//       // the && operator is where I mess up. should be nested if statements
//       return contacts[i][prop];
//     } else if (contacts[i]["firstName"] !== name) {
//       //doesn't work because function ends at a return statement
//       return "no such contact";
//     } else if (contacts[i].hasOwnProperty(prop) !== prop) {
//       return "no such property";
//     }
// }

// let data = lookUpProfile("Harry", "likes");

// console.log(data);
//
//
//

/* The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property. */

function profileLookUp(name, prop) {
  //have iterate through the array
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i]["firstName"] === name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop]; // if both those conditions are met then return the value of the property
      }
      return "no such property";
    }
  }
  return "no such contact"; // has to be outside of for loop if it iterates and doesn't find it NOT outside the first if statement
}

// let data = profileLookUp("Harry", "likes");
// console.log(data);

/**
 
 Abstract Data Structure - QUEUE
  
 
 */
// queue is when new items are added to the back of the list and old ones are removed from the front

function containerQueue() {
  function nextInLine(arr, ping) {
    arr.push(ping);
    return arr.shift(); // removes and returns first item on the list
  }

  let testArr = [4, 5, 7, 9, 10, 15];

  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 69));
  console.log("After: " + JSON.stringify(testArr));
}
// containerQueue();

/**
 
 GOLF CODE!!

 strokes=====return
 1==========="Hole-in-one!"
 <= par-2===="Eagle"
 par-1======="Birdie"
 par ========"par"
 par+1======="Bogey"
 par+2======="Double Bogey"
 >= par+3===="Go Home!"
 
 */
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  // Only change code below this line
  // iterate through the array
  for (let i = 0; i < names.length; i++) {
    if (strokes === 1) {
      return names[0];
    } else if (strokes <= par - 2) {
      return names[1];
    } else if (strokes == par - 1) {
      return names[2];
    } else if (strokes == par) {
      return names[3];
    } else if (strokes == par + 1) {
      return names[4];
    } else if (strokes == par + 2) {
      return names[5];
    } else if (strokes >= par + 3) {
      return names[6];
    }
  }
}

/*

Counting Cards

In the casino game Blackjack, a player can determine whether they have an advantage on the next hand over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
Count Change-|||||-Cards
+1-|||||||||||||||-2, 3, 4, 5, 6
0-||||||||||||||||-7, 8, 9
-1-|||||||||||||||-	10, 'J', 'Q', 'K', 'A'

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.


*/
function countingCardContainer() {
  let count = 0;

  function cc(card) {
    // Only change code below this line
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++; //don't need to declare this variable
        break;

      case 7:
      case 8:
      case 9:
        break;

      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
    if (count > 0) {
      return count + " Bet";
    } else if (count <= 0) {
      return count + " Hold";
    }
    cc(2);
    cc(3);
    cc(7);
    cc("K");
    cc("A");
    // Only change code above this line
  }
}
