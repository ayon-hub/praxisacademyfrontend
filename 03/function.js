// fungsi biasa
function menyapa() {
    console.log("wassabi anyone");
}


//fungsi dengan ekspresi
var mengingatkan = function() {
    console.log("take your breakfast at 9");
}


//fungsi dengan tanda panah
var pengingat = () => {
    console.log("jam 10 berangkat ke kantor");
}


//fungsi dengan tanda panah (satu baris)
var pengingat = () => console.log("jam 10 berangkat ke kantor");


//memanggil fungsi yang sudah di buat di atas
//dengan cara memanggil nama fungsinya saja + ()
menyapa()
mengingatkan()
pengingat()


// fungsi dengan parameter
function isi(a, b) {
    proses = a * b;
    console.log("hasil dari 10*5 adalah" + proses);
}
isi(10, 5)

//fungsi mengembalikan nilai (retun)
function bagi(a, b) {
    pembagian = a / b;
    return pembagian;
}
//memanggil fungsi
var isiA = 50;
var isiB = 25;
var hasil = bagi(isiA, isiB);
console.timeLog(hasil);