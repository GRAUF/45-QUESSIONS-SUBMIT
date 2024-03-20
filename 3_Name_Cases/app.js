// lower case
var personName = "ghulam rauf khan";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
//title case
//console.log("titlecase:", personName.replace(/\bw/g, c=> c.toUpperCase()));
//console.log(personName.charAt(0).toUpperCase()+personName.slice(1,14));
//title case new fourmula:
function titlecase(personName) {
    if (personName === void 0) { personName = "ghulam rauf khan"; }
    var name;
    name = personName.toLowerCase().split(" ");
    for (var i = 0; i < name.length; i++) {
        name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1);
    }
    return name.join(" ");
}
console.log("titlecase:".concat(titlecase("Ghulam Rauf Khan")));
