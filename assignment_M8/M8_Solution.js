// Create a function, using "testPassword" as the identifier
function testPassword(password, rulesRegexp, rulesText) {
  // Will iterate the array of rulesRegexp testing each rule on the user provided password.
  var rulesRegexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

  // Within the iterate, display to the user a message from the array rulesText and the status of the regex test.

  // Return a boolean value(true / false), true is set only if all rules were met.
}





// Create a function main, no input parameters
function main() {
  // Create two arrays, one containing the String messages(see example output for the rules, you must code for all of them) and one for the RegExp objects.


  // Display to the user the password requirements(use the created text array).

  // Prompt the user for the Password to verify.

  // Call  testPassword passing the two arrays and user supplied password.
}

main();