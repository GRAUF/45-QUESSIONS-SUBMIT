"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
// array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
// separate array. Call show_magicians() with each array to show that you have one array of the original names and
// one array with the Great added to each magician’s name.
//;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// exercise no# 43
let magician = [
    ` David Copperfield.`,
    ` Ricky Jay.`,
    ` David Blaine.`,
    ` Dynamo.`,
    ` Penn and Teller.`,
    ` Derren Brown.`,
    ` Lance Burton.`,
    ` Chris Angel.`,
    ` Uri Geller`,
    ` Doug Henning.`,
];
// to make copy Array.fucntion.
function copyArray(arr) {
    return [...arr];
}
console.log(`\n\nthe most famous magician of the 21st century`);
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = `The Great` + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach((element) => {
        console.log(element);
    });
}
const copymagicianArray = copyArray(magician);
make_great(copymagicianArray);
console.log(`\n\nthis is my Original Array.`);
show_magicians(magician);
console.log(`\n\nthis is my Modify copy Array.`);
show_magicians(copymagicianArray);
