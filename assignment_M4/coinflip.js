// For this program you will have two functions, one called main and the second called flip.This program is also required the use of a loop construct.

// Write a program that simulates tossing a coin.Prompt the user for how many times to toss the coin.Code a function called flip with no parameters that randomly(use the math library random) returns either the String "heads"or the string "tails".Call this function in main as many times as requested using a loop and report the results.See Example outputs below.

// Example Outputs

// How many times should I toss the coin ? 1000
// Results of 1000 tosses.
//   Heads: 483, tails: 517

// How many times should I toss the coin ? 1000000
// Results of 1000000 tosses.
//   Heads: 500074, tails: 499926
// Recheck the requirements before you submit.

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

//flip function that returns 'heads' or 'tails'
let flip = () => {
  //if the result is 0 return heads
  if (Math.floor(Math.random() * 2) == 0) {
    return "heads";
  }
  //else return tails
  else {
    return "tails";
  }
};

//main function
let main = () => {
  let mapper = { heads: 0, tails: 0 };
  // prompt the user for number of flips
  readline.question("How many times should I toss the coin? ", n => {
    //Iterate for the number opf times
    for (let i = 0; i < n; i++) {
      //call flip() to get the result
      result = flip();
      // increase the count of the mapper
      mapper[result]++;
    }
    // log the output
    console.log(`Result of ${n} tosses.`);
    console.log(`Heads: ${mapper["heads"]}, Tails: ${mapper["tails"]}`);
    //close the stream
    readline.close();
  });
};
//call the main function
main();



// Option 2
// Javascript program that simulates tossing a coin.

// let readline = require('readline-sync'); // module for taking input

// flip function that returns "heads" is random() returns a value <0.5 else "tails"
// simulates the flipping of a fair coin where probability of heads and tails are equal
// var flip = () => {
//   if (Math.random() < 0.5)
//     return "heads";
//   else
//     return "tails";
// }

// main function that includes a user prompt asking how many times to toss the coin.
// and records the number of heads and tails for that number of coin toss
// var main = () => {

  //input of number of coin toss
  // let num_toss = parseInt(readline.question("How many times should I toss the coin?"));
  // let i;
  // let num_heads = 0, num_tails = 0; // counter to store the number of heads and tails
  // loop to simulate the coin flip
  // for (i = 0; i < num_toss; i++) {
    // let result = flip(); // get the result of one flip
    // if we get heads increment the number of heads
    // if (result === "heads")
      // num_heads++;
    // else // increment the number of tails
      // num_tails++;
  }
  // output the result
//   console.log("Results of " + num_toss + " tosses.");
//   console.log("Heads: # " + num_heads + ", Tails: " + num_tails);
// }

// call the main function
// main()

//end of program