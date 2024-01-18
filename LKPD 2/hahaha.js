let gaji = 200000;
let nama = 'jamal';
let tunj = gaji * 0.2;
let pjk = (gaji + tunj) * 0.15;
let gaji_bersih = gaji + tunj - pjk

console.log( 'Nama kariawan ' + nama + ' Dengan tunjangan ' + tunj + ' pajak ' + pjk + ' total gaji bersih ' + gaji_bersih)

// BATAS

let j = 1;
let m =  30;
let d = 40;
let total = ( (j * 3600) + ( m * 60) + d )
console.log (`${total} detik`)

// BATAS

// function jam(totalSeconds) {
//     const hours = Math.floor(totalSeconds / 3600); // Number of hours in totalSeconds
//     const remainingSeconds = totalSeconds % 3600; // Remaining seconds after hours calculation
//     const minutes = Math.floor(remainingSeconds / 60); // Number of minutes in remainingSeconds
//     const seconds = remainingSeconds % 60; // Remaining seconds after minutes calculation
  
// // Format the output in a clear and user-friendly way
// return `${hours} hour${hours === 1 ? '' : 's'} ${minutes} minute${minutes === 1 ? '' : 's'} ${seconds} second${seconds === 1 ? '' : 's'}`;
// }
  
// // Get input from the user
// const totalSeconds = prompt("Enter the total number of seconds:");
  
// // Convert the input to a number
// const secondsNumber = Number(totalSeconds);
  
// // Call the function to convert the seconds and display the result
// const formattedTime = jam(secondsNumber); 
// console.log(formattedTime);

let totalDetik = parseFloat(prompt('masukkan detik anda?'));
let jamInput = totalDetik / 3600;
let jamBilangan = Math.floor(jamInput);
let hasilJam = jamBilangan * 3600;
let menitInput = (totalDetik - hasilJam) / 60;
let menitBilangan = Math.floor (menitInput);
let hasilMenit = menitBilangan * 60;
let sisaDetik = totalDetik - hasilJam - hasilMenit

console.log(`Jadi detik yang anda masukkan sebesar ${totalDetik} detik dan telah di konveri kan menjadi ${jamBilangan} jam, ${menitBilangan} menit dan ${sisaDetik} detik`)