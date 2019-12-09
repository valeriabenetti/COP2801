// Create a class using "names" as the identifier.
class Names {
  // Create a constructor, The constructor will have the following elements:
  constructor(first, last, age){
    // first(value passed will be String)
    this.first = first;
    // last(value passed will be String)
    this.last = last;
    // age(value passed will be Numeric)
    this.age = age;
  }
}
// Create a function, using "printObject" as the identifier. This function will have three input parameters: allNames , sortType, message
function printObject(allNames, sortType, message) {
  // Will sort the array of objects (allNames) using sortType as the key to how the arrays objects will be sorted.

  if (sortType == "first") {
    allNames.sort(function (a, b) {
      return a.first.localeCompare(b.first);
    });
  }

  if (sortType == "last") {
    allNames.sort(function (a, b) {
      return a.last.localeCompare(b.last);
    });
  }

  if (sortType == "age") {
    allNames.sort(function (a, b) {
      return a.age - b.age;
    });
  }
  // Will use a loop to print out the array by index ascending and display the values located in the elements: first last age, for each index accessed
  for (let i = 0; i < allNames.length; i++) {
    console.log(
      allNames[i].first + " " + allNames[i].last + " " + allNames[i].age
    );
  }
}

// Create a function main, no input parameters
function main() {
  // Create the empty array using the identifier "allNames"
  var allNames = [];

  // Using the push() method, load 4 new objects of names to the array allNames, populating the fields first , last , age ( data is of your choosing, for example: allNames.push( new names("Cammo", "Hammer", 39));
  allNames.push(new Names("Steve", "Rogers", 90));
  allNames.push(new Names("Tony", "Stark", 45));
  allNames.push(new Names("Angela", "Jhonson", 19));
  allNames.push(new Names("Wednesday", "Adams", 15));


  // Call printObject, passing the array, sort method as a string(options are first, last, age, none)
  console.log('Objects by Index:');
  printObject(allNames);
  console.log('\n');
  console.log('Objects by First Name:');
  printObject(allNames, "first");
  console.log('\n');
  console.log('Objects by Last Name:');
  printObject(allNames, "last");
  console.log('\n');
  console.log('Objects by Age:');
  printObject(allNames, "age");
}

// Last line of the script, would be the call to the main
main();