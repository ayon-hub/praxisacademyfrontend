//mutable variable
var justnumber = 6;
justnumber = 7;
console.log(justnumber);
//change the value thru "const" variable
const itsanumber = 17;

//mutable array
var things = ["book"];
things.push("pencil");
console.log(things);

//immutable array (ES5 using concat)
var hobbies = ["reading"];
var newUpdatedhobbiesES5 = hobbies.concat("coding");
console.log(hobbies);
console.log(newUpdatedhobbiesES5);

//immutable array (es6 using spread operator)
var newUpdatedhobbiesES6 = [...hobbies, "snacking"];
console.log(newUpdatedhobbiesES6); //[reading,coding,gaming];