
// Assume that hot dogs come in packages of 10, and hot dog buns come in packages of 8. Write a program called cookout.js, that calculates the number of packages of hot dogs and the number of packages of hot dog buns needed for a cookout, with the minimum amount of leftovers.

// The program will prompt for the number of people attending the cookout and as how many hot dogs each guest will eat.The program should display the following details.

// The minimum number of packages of hot dogs required.

// The minimum number of packages of hot dog buns required.

// The number of hot dogs that will be left over.

// The number of hot dog buns that will be left over.




// The program will prompt for the number of people attending the cookout and ask how many hot dogs each guest will eat.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How number of people will be attending the cookout? ', (attending) => {
  rl.question('How mayny hot dogs will each quests eat? ', (attendingHotDogs) => {
    var totalHotdogs = attending * attendingHotDogs;

    // Assume that hot dogs come in packages of 10
    console.log('Total hotdog packs needed: ' + Math.ceil(totalHotdogs / 10));

    console.log('Hotdogs remaining: ' + totalHotdogs % 10);

    // hot dog buns come in packages of 8
    console.log('Total bun packs needed: ' + Math.ceil(totalHotdogs / 8));

    console.log('Buns remaining: ' + totalHotdogs % 8);
    rl.close();
  });
});



