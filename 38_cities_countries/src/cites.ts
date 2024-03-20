
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should
// print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call
// your function for three different cities, at least one of which is not in the default country.


function describe_city(city:string, provence:string = 'Default provence'){

    console.log(` ${city} is in ${provence}`);

}
describe_city(`karachi`,`sindh`);

describe_city(`multan`,`punjab`);

describe_city(`gilgit`,`Baltistan`);

describe_city(`quetta`);



