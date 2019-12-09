// Write a program that is required to use nested loops to generate a triangle as shown in the sample run below.The program should begin by prompting the user to enter the number of lines in the triangle and output to the console to match the example below.

//   Hint: Each line will contain either "O" or " "(spaces) to align the output to appear right justified

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`How many lines of the trinagle? `, (height) => {
  for (var i = 1; i <= height; i++) {
    var row = '';

    for (var j = 1; j <= (height - i + 1); j++) {
      row += '0';
    }

    console.log(row);
  }
  readline.close()
})



