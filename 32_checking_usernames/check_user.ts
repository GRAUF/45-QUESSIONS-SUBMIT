
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
// has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the
// current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the
// person will need to enter a new username. If a username has not been used, print a message saying that the username
// is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_User: string[] = ['Rauf','Mehtab','Khurmi','Sabhee','Muddasir'];

let new_User: string[] = ['Asiya','Rauf','Jameel','Sabhee','Molvi_Abdul_shukoor','Khurmi',`Dolli`,`Muddasir`,`Habibi`,`Mehtab`,`Ronaldo`];
//for each methods use for exceses of arry values:

new_User.forEach(newUsername => {
let lowerCase: string = newUsername.toLowerCase();
if (current_User.map (c_User => c_User.toLowerCase()).includes(lowerCase)){
    console.log(`The Username ${newUsername} is not Available.please write diffrent username.`);

}
else{
    console.log(`The username ${newUsername} is available.`);

}
})