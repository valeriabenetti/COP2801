// A customer in a store is purchasing five items.Write a program called total_purchase.js that creates five items with literal numeric values.The prices of the items should be as follows:
// item 1: $9.99
// item 2: $5.99
// item 3: $.99
// item 4: $59.50
// item 5: $.25
// It then calculates and displays the subtotal of the sale, the amount of sales tax, and the total.The sales tax is 7 percent.Display the answer to two decimal places.



var item1 = 9.99, item2 = 5.99, item3 = 0.99, item4 = 59.50, item5 = 0.25;

var subtotal = item1 + item2 + item3 + item4 + item5;

var sales_tax = subtotal * 0.07;
var total = subtotal + sales_tax;


console.log(
  "Item 1: " + item1 , 
  '\n', 
  "Item 2: " + item2 , 
  '\n', 
  "Item 3: " + item3, 
  '\n', 
  "Item 4: " + item4 , 
  '\n', 
  "Item 5: " + item5,
  '\n', 
  "-----------------"
  );
console.log("Subtotal: $" + Math.round(subtotal * 100) / 100);
console.log("Sales tax: $" + Math.round(sales_tax * 100) / 100);
console.log("total: $" + Math.round(total * 100) / 100);