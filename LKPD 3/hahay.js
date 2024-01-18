// NO 1

let beli = 2;
let jeruk = 5000;
let diskon = 5;

let hargabiasa = beli * jeruk;
let hargadiskon = hargabiasa * 0.05;
let total = (hargabiasa - hargadiskon);

console.log(`Jadi total belanjaan anda sebesar ${hargabiasa} anda mendapatkan diskon sebesar ${hargadiskon} jadi total belanjaan anda adalah ${total}`)

// No 2

let bilanganbulat = prompt('Masukkan Bilangan Bulat')
let satuan = Math.floor(bilanganbulat % 10)
let puluhan = Math.floor(bilanganbulat % 100 / 10)
let ratusan = Math.floor(bilanganbulat % 1000 / 100)

console.log (`${satuan} satuan ${puluhan} puluhan ${ratusan} ratusan`)

// No 3
 
let suhu = 900;
let cuaca = (suhu -32) * (5 / 9); 

    if(cuaca >= 300){
        hsl = "Cuaca Panas"
    }else if(cuaca < 250){
        hsl = "Cuaca Dingin"
    }else{
        hsl = "Cuaca Normal"
    }
    console.log(hsl)