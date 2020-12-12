//diferent variables sould have their own "let"
//let var1 = 'baju';
//let var2 = 'celana';

// --many variables with one "let"
// let variables;
// variables = 'candle';
// variables = 'kind a like'

//datatypes
//const sweet = 17;
//console.log(variables);
// operators
//console.log(9 + 21, 'pancake' + 'blueberry', 12 / 3, 2 * 2 === 2 + 2, 4 === 12 / 3, );

//with variables
// const cool = 16;
// const swag = 7;
// console.log(cool + swag);

// function divide(x,y){
//     let result =x/y;
//     return result;

// };

// let functionExpression = function() {
//     console.log('halllo functon expresion');

// };

// function makeFunc() {
//     let name = 'arraya';

//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();


// function makeAdder(x) {
//     return function(y) {
//         return x + y
//     };
// }
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);


//var jika memiliki variable yang sama antara global dan local scope, maka valuenya mengikuti yang terakhir.
//bisa string,bisa number
var nilaiA = 12;
var nilaiB = 6;
var benda = 'baju';
var warna = ' ungu';
console.log(nilaiA + nilaiB);
console.log(benda + warna);

//local bisa mengambil value dari variable global
if (true) {
    var nilaiA = 20;
    console.log(nilaiA);
    //global var
    console.log(benda);
}


//let : valuenya tidak berubah meskipun memiliki variable yang sama antara local dan global
//
let isiA = 4;
let isiB = 7;
console.log(isiA / isiB);

if (true) {
    let isiA = 20;
    let isiB = 10;
    console.log(isiA + isiB);
    //mengambil variable global
    console.log(isiB - isiA);
}

//const merupakan nilai tetap, tidak akan berubah walaupun terdapat variable yang sama antara global dan local
const variableA = "sepatu ";
const variableB = "750000";
console.log(variableA + variableB);
if (true) {
    const variableB = " 650000";
    //lalu value nya di ganti
    const variable = "50000";
    console.log(variableA + variableB);

}
meals = ['pancake', 'cheese cakes', 'cereals', 'croissant'];
baverages = ['brown sugar milk tea', 'blue ocean', 'fresh milk', 'cheese tea', 'americano', 'coffe latte', 'matcha latte'];
console.log(meals);
meals = [0];
for (let i = 0; i < meals.length; i++) {
    console.log(meals[i]);
}

//let nama = { fistName = 'aoyii', lastname = 'aihara', age = '17' };

//array & object executions
// object
let breakfast = {
    morning: "pancake",
    with: "green tea",
    and: "milk"
};
breakfast.morning

// let things = ['laptop', 'buku', 'penghapus', 'pen', 'earphone'];

// function remember() {
//     things.push('book');
// };

its actually, im stuck, thankyou: )