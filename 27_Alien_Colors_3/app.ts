// Turn your if-else chain from Exercise 5-4 into an if-else chain.
let aliencolours: string = "green"


// • If the alien is green, print a message that the player earned 5 points.
//versions 1 of this program:

if (aliencolours === "green"){
    console.log("versions 1 of this program::the player earned 5 points");
// • If the alien is yellow, print a message that the player earned 10 points.
} else if (aliencolours === "yellow"){
console.log("the player earned 10 points");
// • If the alien is red, print a message that the player earned 15 points.
} else if (aliencolours === "red"){
    console.log("the player earned 15 points");

} else{
    console.log("please select right color");
}

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//versions 2 of this program:

aliencolours = "yellow";

if (aliencolours === "green"){
    console.log("the player earned 5 points");

} else if (aliencolours === "yellow"){
console.log("versions 2 of this program::the player earned 10 points");

} else if (aliencolours === "red"){
    console.log("the player earned 15 points");

} else{
    console.log("please select right color");
}
//versions 3 of this program:

aliencolours = "red";

if (aliencolours === "green"){
    console.log("the player earned 5 points");

} else if (aliencolours === "yellow"){
console.log("the player earned 10 points");

} else if (aliencolours === "red"){
    console.log("versions 3 of this program::the player earned 15 points");

} else{
    console.log("please select right color");
}


