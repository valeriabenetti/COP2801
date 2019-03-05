// A. Class and Constructor Creation (25 Points)
//  RetailItem Class
//  Create a constructor function or ES6 class for a RetailItem object. The RetailItem
// object should store the following data in attributes: item description, units in inventory,
// and price.
//  CashRegister Class (25 points)
//  Create a constructor function or ES6 class for a CashRegister object that will be
// used with the RetailItem class. The CashRegister object should be able to internally
// keep an array of RetailItem objects.







// B. Methods to add (25 Points)
//  CashRegister Class
//  The class should have the following methods:
// o A method named purchaseItem that accepts a RetailItem object as an
// argument. Each time the purchaseItem method is called, the RetailItem
// object that is passed as an argument should be added to the list of
// retailItems the CashRegister contains.
// o A method named getTotal that returns the total price of all the RetailItem
// objects stored in the CashRegister objects internal list.
// o A method named showItems that writes the information about each retail
// item stored in the cash register to the console.
// o A method named clear that should clear CashRegister object’s internal
// list.








// C. Test Program 25 Points
// After you have created the classes. Create three RetailItem objects and store the
// following data in them:
// Description Units In Inventory Price
// Item #1 Polo Jacket 12 59.95
// Item #2 Roberto
// Cavalli Jeans
// 40 34.95
// Item #3 Sean Jean Shirt 20 24.95
// Store all three RetailItem objects in an array named “inventory”.
// Next, create a CashRegister object.
// Add all the items to the CashRegister using the purchaseItem method. Display the total
// using the CashRegister getTotal method. Display all the items using the CashRegister
// showItems method.