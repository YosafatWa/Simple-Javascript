// NO 1

// let pabp = 70;
// let mate = 82;
// let dpk = 77
// let rata = (pabp + mate + dpk) / 3
 
// if (rata >= 80 && rata <= 100) {
//     Grade = 'A'
// } else if (rata >= 75 && rata <= 80) {
//     Grade = 'B'
// } else if (rata >= 65 && rata <= 75) {
//     Grade = 'C'
// } else if (rata >= 45 && rata <= 65) {
//     Grade = 'D'
// } else if (rata >= 0 && rata <= 45 ) {
//     Grade = 'E'
// } else {
//     Grade = 'K'
// }
// console.log (Grade)
// console.log (rata)

// NO 2

// const input = Number(prompt('Masukan kode pegawai (11 digit) : '))

// const golongan = Math.floor(input % 100000000000 / 10000000000)
// const tgl = Math.floor(input % 10000000000 / 100000000)
// const bln = Math.floor(input % 100000000 / 1000000)
// const thn = Math.floor(input % 1000000 / 100)
// const nn = Math.floor(input % 10000)

// if (golongan >=1 && golongan <= 4) {
//     let bulanName;
//     switch(bln) {
//         case 1: bulanName = 'JAN'; break;
//         case 2: bulanName = 'FEB'; break;
//         case 3: bulanName = 'MAR'; break;
//         case 4: bulanName = 'APR'; break;
//         case 5: bulanName = 'MEI'; break;
//         case 6: bulanName = 'JUN'; break;
//         case 7: bulanName = 'JUL'; break;
//         case 8: bulanName = 'AGU'; break;
//         case 9: bulanName = 'SEP'; break;
//         case 10: bulanName = 'OKT'; break;
//         case 11: bulanName = 'NOV'; break;
//         case 12: bulanName = 'DES'; break;
//         default: bulanName = 'Invalid';
//     } console.log(`${input} adalah seorang pegawai bergolongan ${golongan}, 
//     lahir pada tanggal ${tgl} ${bulanName} ${thn} dan bernomor urut ${3}`)
// } else {
//     console.log('Golongan tidak valid.')
// }

// NO 3 

let jam = 2;
let menit = 59;
let detik = 59;
let tambahDetik = detik + 1;
let Hasildetik = detik;
let HasilMenit = menit;
let Hasiljam = jam;

if (tambahDetik > 59) {
    Hasildetik = 0;
    HasilMenit++;
}

if (HasilMenit > 59) {
    Hasildetik = detik;
    HasilMenit = 0;
    Hasiljam++;
}

if (Hasiljam > 23) {
    Hasildetik = detik;
    HasilMenit = 0;
    Hasiljam = 0;
}

console.log(`${Hasiljam} jam ${HasilMenit} menit ${Hasildetik} detik`);