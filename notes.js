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

console.log(RandomNumWithRange(5, 15));

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

console.log(JSON.stringify(gameCollection, null, 2));
console.log(gameCollection);

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
