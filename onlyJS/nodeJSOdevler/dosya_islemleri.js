const fs = require("node:fs");
const { error } = require("node:console");

// fs.writeFile('employees.json','{"name": "Arin", "age": 6} \n' ,'utf-8',(err) => {
//   if (err) console.log(err);
//   console.log("dosya başarıyla oluşturuldu")
// })

// fs.readFile('employees.json','utf-8',(err,data) => {
//   if (err) console.log(err);
//   console.log(data)
//   console.log("dosya başarıyla okundu")
// })

// fs.appendFile('employees.json','{"name": "ahmet", "age": 4}, \n' ,'utf-8',(err) => {
//   if (err) console.log(err);
//   console.log("dosya başarıyla güncellendi")
// })



// fs.unlink("employees.json",function (err) {
//   if (err) throw err;
// });