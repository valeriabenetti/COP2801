// 1. Profit Calculator

// A company has determined that its annual profit is typically 23 percent of total sales.Write a program using the file name sales_prediction.js, that displays the profit based on the user entered amount of total sales for the year. (Program prompt the user for the projected total sales amount ).Display the profit amount formatted to two decimal places.



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What is the total annual sales in dollar ammount?`, (projectedSales) => {
  var annualProfitPercentage = .23;
  if (projectedSales !== null) {
    // projected profits are found by combining values.
    var projectedProfit = annualProfitPercentage * projectedSales;
    // Display the profit amount formatted to two decimal places.
    console.log("Total projected profits is " + "$" + projectedProfit.toFixed(2));
    process.exit();
  }
  readline.close()
})