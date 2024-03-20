"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love
// TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a
// different message.
function fake_shirt(size = ' Large ', text = ' i love medium ,but there is not branded shirt ') {
    console.log(` buying a ${size}shirt is: ${text} `);
}
fake_shirt();
fake_shirt(` medium `);
fake_shirt(` small `, ` is fake `);
fake_shirt(`xl `, `empty this store`);
