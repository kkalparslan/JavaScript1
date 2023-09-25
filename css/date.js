

// Bugünün tarihini al
const today = new Date();
const day = String(today.getDate()).padStart(2, '0'); // Günü iki haneli olarak al
const month = String(today.getMonth() + 1).padStart(2, '0'); // Ayı iki haneli olarak al
const year = today.getFullYear();

// Tarihi Gün/Ay/Yıl formatında yazdır
const currentDate = `${day}/${month}/${year}`;
console.log(currentDate); // Örnek çıktı: "22/09/2023"

const faker = require('faker');
const fName = faker.name.findName();
const fEmail = faker.internet.email();
console.log(`isim: ${fName}`);
console.log(`mail: ${fEmail}`);
//faker kullanımını çözemedim henüz
