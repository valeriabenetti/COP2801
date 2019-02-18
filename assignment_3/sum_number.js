// 2. Sum Number
// Write a program called sum_number.js, that calculates the sum of the numbers
// contained in a string and displays the result. Use a string containing “2155” as
// your input value. For example, given the input , let num = “22”, I would sum 2 + 2
// for a result of 4.



var string = "2155",
    numbers = [],
    nString = string.toString();

console.log(string);

for (var i = 0, singles = nString.length; i < singles; i += 1) {
    numbers.push(+nString.charAt(i));
}

console.log(numbers);

for (var i = 0, sum = 0; i < numbers.length; sum += numbers[i++]);
console.log(sum);