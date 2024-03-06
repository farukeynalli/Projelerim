const daire = require("./daireAlan");

let input = require("readline");

const gelenVeri = input.createInterface({
  input: process.stdin,
  output: process.stdout,
});

gelenVeri.question("yarıcap giriniz :", function (radius) {
  console.log(`yarıcapı 5 olarak aldım ve sonuclar şöyle:
    daire alanı : ${daire.daireAlan(radius)}
    daire cevresi: ${daire.daireCevre(radius).toFixed(2)}`);
});
