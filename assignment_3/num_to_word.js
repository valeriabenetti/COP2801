// 1. Num To Word
// Write a program called num_to_word.js, that takes an integer and extracts and
// displays each digit of the integer in English. So, if the input is 123, the program
// should display
// one two three
// Use 932 as your input value.


var ones = ['zero','one','two','three','four','five','six','seven','eight','nine']


var num = 932,
    output = [],
    sNum = num.toString();
for (var i = 0, len = sNum.length; i < len; i += 1){
    output.push(+sNum.charAt(i));
}



console.log(num);
console.log(output);