// yarıcap hesaplayan node.js kodlama

const argument = process.argv.slice(2);

function yaricapHesapla(radius) {
  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  console.log(`Girilen yaricap:  ${radius} , Alanı: ${area}  `);
}

yaricapHesapla(argument[0]);
