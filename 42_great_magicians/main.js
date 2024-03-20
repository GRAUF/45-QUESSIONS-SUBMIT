"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
// modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
// to see that the list has actually been modified.
//function make_is_the_great(magician: string[]): void {
//    for (let i = 0; i < Magician1.length; i++){
//         magic [i] = magic [i]  +  " was the great magician in history. "
//     }
// const Magician1:string[] = [` Mona `,` Katrina `,` Suzan `];
// make_is_the_great(Magician1);
// console.log(`${Magician1} `);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise no# 42
let magician = [`Harry potter`, `Herm0ne Granger`, `Ron Wesley`, `Albus Dumbledore`];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = `The Great Guys` + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
