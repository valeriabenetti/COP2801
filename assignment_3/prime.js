// 4. Prime numbers can be generated by an algorithm known as the Sieve of
// Eratosthenes. The algorithm for this procedure is presented here. Write a
// program called primes.js that implements this algorithm. Have the program find
// and display all the prime numbers up to n = 150.
// Sieve of Eratosthenes Algorithm
// To Display All Prime Numbers Between 1 and n
// Step 1: We need to start with all the numbers representing the range of
// numbers that are possible candidate primes. So, create an array of consecutive
// integers from 2 to n: (2,3,4,..n). I wouldn’t hand-code this. I would use a loop to
// populate the array.
// Step 2: At each step we select the smallest number and remove all it’s multiples.
// So we’ll start with an outer loop that goes from 2 to n. initially, let p equal 2, the
// first prime number.
// Step 3: In an inner loop we need to iterate over all the numbers that are multiples
// of p, i.e for 2, that’s 2,4,6,8 etc. Each time, setting it’s value to false in the original
// array.
// Step 4: Find the first number greater than p in the list that is not marked False. If
// there was no such number, stop. Otherwise, let p now equal this number( which
// is the next prime), and repeat from step 3.
// When the algorithm terminates, all the numbers in the list that are not marked
// False are prime.
// Example:
// Let us take an example when n = 50. So we need to print all print numbers smaller
// than or equal to 50.
// We create a list of all numbers from 2 to 50.
// According to the algorithm we will mark all the numbers which are divisible by 2.
// Now we move to our next unmarked number 3 and mark all the numbers which
// are multiples of 3.
// We move to our next unmarked number 5 and mark all multiples of 5.
// We continue this process and our final table will look like below:
// So the prime numbers are the unmarked ones: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
// 31, 37, 41, 43, 47.


for (var prime = 2; prime <= 150; prime ++) {
    var notPrime = false;
    for (var i = 2; i <= prime; i++) {
        if (prime%i===0 && i!==prime) {
            notPrime = true;
        }
    }
    if (notPrime === false){
        console.log(prime);
    }
}