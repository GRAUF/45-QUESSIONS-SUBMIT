var guest_list = [" WAQUAR", " SALEEM", " MAGHBEEN", " ASIYA", " SABHEE", " MURSHID", " BELQUEES", " MOLANA SKINDAR"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected Sir/Madam" + guest_list[i] + ",\n we are invite you for Dinner tomorrow night,\n\n Thank you.");
}
//QUESSION #15.HELP OF QUESSION # 14.LET'S START WITHOUT WASTING YOUR TIME.
var guest_arr = [" WAQUAR", " SALEEM", " MAGHBEEN", " ASIYA", " SABHEE", " MURSHID", " BELQUEES", " MOLANA SKINDAR"];
var cannot_attend = 'ASIYA';
console.log(cannot_attend + "  ", "can not attend tomorrow dinner party");
var new_guest = "Khurram";
guest_arr[3] = new_guest;
console.log(new_guest + "  ", "attend tomorrow dinner party");
guest_arr[guest_arr.indexOf(cannot_attend)];
console.log(guest_arr);
