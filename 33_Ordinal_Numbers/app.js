"use strict";
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers
// end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd
// 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line
let numbers = [100000000000, 20000000000, 3000000000, 40000000, 5000000, 600000, 70000, 8000, 900, 10, 11, 12, 130, 1400, 15000, 160000, 17000000, 1800000000, 19000000000, 20000000000, 100000000000];
for (let num of numbers) {
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log(`${num}${ordinalEnding}`);
}
