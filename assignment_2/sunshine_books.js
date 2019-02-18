// Problem: Sunshine Books is a bookstore that’s open every morning from 8:00 am to 12:00 pm. The manager wants information about the number of customers in the store at different times. A clerk, whose 
//station is near the door, counts customers by making a
// mark on a piece of paper each time a customer enters. The paper is divided into four segments, one for each hour, and the clerk notes the time before making each mark.
// When the store closes at noon, the clerk wants to enter the numbers in a program, which then displays the total number of customers for the day and the average number of customers per hour. 
// Your job, as the programmer, is to develop a program to calculate the customers for the day, and the average number of customers per hour. Assume the clerk has counted the following customers:
// Hour # Customers
// 1        75
// 2        96
// 3        22
// 4        108
// Write a program named sunshine_books.js that calculates and displays the total customers for the day and the average customers per hour.

var hours = [1, 2, 3, 4]
var customers = [75,96,22,108]

var sum = customers.reduce((total,amount) => total + amount);

var total = 0;
for(var i = 0; i < customers.length; i++) {
    total += customers[i];
}
var avg = total / customers.length;




console.log("Total number of customers for the day: " + sum + '\n' +
            "Average customers per hour: " + avg
);