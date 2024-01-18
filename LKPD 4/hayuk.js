// NO 1

let pabp = 70;
let mate = 82;
let dpk = 77
let rata = (pabp + mate + dpk) / 3
 
if (rata >= 80 && rata <= 100) {
    Grade = 'A'
} else if (rata >= 75 && rata <= 80) {
    Grade = 'B'
} else if (rata >= 65 && rata <= 75) {
    Grade = 'C'
} else if (rata >= 45 && rata <= 65) {
    Grade = 'D'
} else if (rata >= 0 && rata <= 45 ) {
    Grade = 'E'
} else {
    Grade = 'K'
}
console.log (Grade)
console.log (rata)

// NO 2

const input = Number(prompt('Masukan kode pegawai (11 digit) : '))

const golongan = Math.floor(input % 100000000000 / 10000000000)
const tgl = Math.floor(input % 10000000000 / 100000000)
const bln = Math.floor(input % 100000000 / 1000000)
const thn = Math.floor(input % 1000000 / 100)
const nn = Math.floor(input % 10000)

if (golongan >=1 && golongan <= 4) {
    let bulanName;
    switch(bln) {
        case 1: bulanName = 'JAN'; break;
        case 2: bulanName = 'FEB'; break;
        case 3: bulanName = 'MAR'; break;
        case 4: bulanName = 'APR'; break;
        case 5: bulanName = 'MEI'; break;
        case 6: bulanName = 'JUN'; break;
        case 7: bulanName = 'JUL'; break;
        case 8: bulanName = 'AGU'; break;
        case 9: bulanName = 'SEP'; break;
        case 10: bulanName = 'OKT'; break;
        case 11: bulanName = 'NOV'; break;
        case 12: bulanName = 'DES'; break;
        default: bulanName = 'Invalid';
    } console.log(`${input} adalah seorang pegawai bergolongan ${golongan}, 
    lahir pada tanggal ${tgl} ${bulanName} ${thn} dan bernomor urut ${3}`)
} else {
    console.log('Golongan tidak valid.')
}





// NO 3

let jam = 2;
let menit = 13;
let detik = 23;

const total = (jam * 3600) + (menit * 60) + detik + 1;
const bagiJam = Math.floor(total/3600);
const total2 = total % 3600;
const bagiMenit = total2 / 60;
const ngitungMenit = Math.floor(bagiMenit);
const total1 = Math.floor(total2 % 60);
console.log(`${bagiJam}:${ngitungMenit}:${total1}`);
start.addEventListener("click", function (e) {
	waktu1.innerHTML =`${bagiJam}:${ngitungMenit}:${total3}`;
});

let jam2 = 2;
let menit2 = 13;
let detik2 = 59;

const totalBag2 = (jam2 * 3600) + (menit2 * 60)  + detik2 + 1;

const bagiJam2 = Math.floor(totalBag2/3600);

const totalBag22 = totalBag2 % 3600;
const bagiMenit2 = totalBag22 / 60;
const ngitungMenit2 = Math.floor(bagiMenit2);

const totalBag23 = Math.floor(totalBag22 % 60);

console.log(`${bagiJam2}:${ngitungMenit2}:${totalBag23}`);
start.addEventListener("click", function (e) {
	waktu2.innerHTML =`${bagiJam2}:${ngitungMenit2}:${totalBag23}`;
});

let jam3 = 2;
let menit3 = 59;
let detik3 = 59;

const totalBag3 = (jam3 * 3600) + (menit3 * 60)  + detik3 + 1;

const bagiJam3 = Math.floor(totalBag3/3600);

const totalBag32 = totalBag3 % 3600;
const bagiMenit3 = totalBag32 / 60;
const ngitungMenit3 = Math.floor(bagiMenit3);

const totalBag33 = Math.floor(totalBag32 % 60);

console.log(`${bagiJam3}:${ngitungMenit3}:${totalBag33}`);
start.addEventListener("click", function (e) {
	waktu3.innerHTML =`${bagiJam3}:${ngitungMenit3}:${totalBag33}`;
});

let jam4 = 23;
let menit4 = 59;
let detik4 = 59;

const totalBag4 = (jam4 * 3600) + (menit4 * 60)  + detik4 + 1;

const bagiJam4 = Math.floor(totalBag4/3600);

const totalBag42 = totalBag4 % 3600;
const bagiMenit4 = totalBag42 / 60;
const ngitungMenit4 = Math.floor(bagiMenit4);

const totalBag43 = Math.floor(totalBag42 % 60);

console.log(`${bagiJam4}:${ngitungMenit4}:${totalBag43}`);
start.addEventListener("click", function (e) {
	waktu4.innerHTML =`${bagiJam4}:${ngitungMenit4}:${totalBag43}`;
});