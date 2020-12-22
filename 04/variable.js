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

//mutable objects
var talent = { name: "usagi", age: 17 };
talent.age = 19;
console.log(talent); //{name : "usagi",age=19};

//immutable object (ES5 using Object.assign) object with capital O;
var student = { name: "ara", class: 7 };
const updateStudent = Object.assign({}, student, { age: 9 });

console.log(student);
console.log(updateStudent);

//immutable object using spread operator (ES6); tidak  merubah value
const updateStudentSE6 = {...student, age: 17 };

console.log(student);
console.log(updateStudent);