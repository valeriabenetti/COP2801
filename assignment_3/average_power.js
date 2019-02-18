// 3. Average Power
// Write a program called average_power.js. We will simulate taking current and
// voltage readings from a circuit and calculating the average power of the circuit.
// The program should create an array called volts and populate it with 24 random
// numbers between 5 and 20. Next create an array called amps and populate it
// with 24 random numbers between 1 and 10. These are your current readings for
// every hour for a given day. Compute the average power for each day and display
// it in a tabular format i.e
// Hour Current Voltage Power
// 1 2 15 30
// 2 5 20 100
// .
// .
// .
// 24 1 5 5
// Average Power: 45 watts



// Need to create an array for the hours
var hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]

// Need to create an array that generates random numbers for volts
var volts = Array.from({length: 24}, () => Math.floor(Math.random() * 20) + 5);



// Need to create an array that generates random numbers for amps a.k.a Current
var amps = Array.from({length: 24}, () => Math.floor(Math.random() * 10) + 1);


// Creating the average power
var power = [];
for (i = 0; i < volts.length; i++) {
    var a = volts[i];
    var b = amps[i];
    var avg = (a + b) / 2;
    power.push(Math.floor(avg));
}


// Creating the table


console.table([hours,volts,amps,power],["Hours","Current","Voltage","Power"]);

