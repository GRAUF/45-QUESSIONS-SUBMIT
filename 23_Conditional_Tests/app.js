var car = 'subaru';
// test 1: Equality comparision (True).
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // true
// test 2: Strict equality comparision (True).
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // true
// test 3: Inequality comparison (false).
console.log("Is car != 'subaru'? I predict false.");
console.log(car != 'subaru'); // false
//test 4: Strict equality comparision (false).
console.log("Is car !== 'subaru'? I predict false.");
console.log(car !== 'subaru'); // false
//test 5: Less Then < comparision (false).
console.log("Is car < 'subaru'? I predict false.");
console.log(car < 'subaru'); // false (Lexicagraphic comparison)
//test 6: Greater Then > comparision (false).
console.log("Is car > 'subaru'? I predict false.");
console.log(car > 'subaru'); // false (Lexicagraphic comparison)
//test 7: Greater Then > or Equal =  comparision (True).
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); // True (Lexicagraphic comparison)
//test 8: Greater Then > or Equal =  comparision (True).
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); // True (Lexicagraphic comparison)
// test 9: checking truthness (True)
console.log("Is car ? I predict True.");
console.log(car); // True (non empty string is true)
// test 10: checking falsiness (false)
console.log("Is car ? I predict False.");
console.log(car); // false (non empty string is false)
