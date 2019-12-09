//Prompt the user to enter the amount of lbs, and display the value in Kilograms formatted to 3 decimal points. Use full precision for the conversion value, 2.2 as an example would not provide correct conversion values. 

// 1 lb = 0.45359237 kg
// lb × 0.45359237 = kg


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("How many pounds do you want to convert to kilograms? ", (pounds) => {
  var converter = 0.45359237;
  if (pounds !== null) {
    var convertedKilograms = pounds * converter;
    console.log(pounds + " lbs was converted into " + convertedKilograms.toPrecision(3) + "kg");
  }
  readline.close()
});