var guest_arr = [" WAQUAR", " SALEEM", " MAGHBEEN", " ASIYA", " SABHEE", " MURSHID", " BELQUEES", " MOLANA SKINDAR"];
var cannot_attend = 'ASIYA';
console.log(cannot_attend + "  ", "can not attend tomorrow dinner party");
var new_guest = " Khurram";
guest_arr[3] = new_guest;
console.log(new_guest + "  ", "attend tomorrow dinner party");
guest_arr[guest_arr.indexOf(cannot_attend)];
console.log(guest_arr);
for (var i = 0; i < guest_arr.length; i++) {
    console.log("Respected Sir/Madam" + guest_arr[i] + ",\n we are invite you for Dinner tomorrow night,\n\n Thank you.");
}
guest_arr.unshift(" Haji", " Jameela", " Ghafoor");
for (var i = 0; i < guest_arr.length; i++) {
    console.log("Respected Sir/Madam" + guest_arr[i] + ",\n we are invite you for Dinner tomorrow night,\n\n Thank you.You just found a bigger dinner table, so now more space is available. Think of three more guests to\ninvite to dinner.");
}
//console.log(`Respected Sir/Madam`+ guest_arr[i]+ `,\n we are invite you for Dinner tomorrow night,\n\n Thank you.You just found a bigger dinner table, so now more space is available. Think of three more guests to
//invite to dinner.`);
