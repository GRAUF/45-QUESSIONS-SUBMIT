
// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let userName: string[] = ['rauf','muddassir','sabhee','khurmi','mehtab'];     // the list of users.
if(userName.length === 0){                                                    //We need to find some users!
    console.log('We need to find some users!');
}
//Remove all of the usernames
else{
userName =[];
console.log('Remove all of the usernames from your array ' + userName.length);

}
// check your project:: write"tsc file name.ts" (compile your project in javascript).