// Fonksiyon çalıştırma, fs işlemleri, sync ve async işlemlerini gösteren bir örnek

// -------------------------------------------------------------------------------

// const { add, substract } = require("./math.js");

// console.log(add(2, 3));
// console.log(substract(5, 2));

const fs = require("fs");

// sync - blocking (Bu işlem tamamlanmadan diğer işlemlere geçemez)
// fs.writeFileSync("log.txt", "test log");

// async -  nonblocking (Bu işlem tamamlanmadan diğer işlemlere geçebilir)
// fs.writeFile("log.txt", "test log 2", (err) => {});

// sync - blocking okuma işlemi
// const readFile = fs.readFileSync("log.txt", "utf-8");
// console.log(readFile);

// async - nonblocking okuma işlemi
// const readFile = fs.readFile("log.txt", "utf-8", (err, html) => {
//   console.log(html);
// });

// ------------------------ Sync Example -----------------------------

// console.log("1");
// const readFile = fs.readFileSync("log.txt", "utf-8");
// console.log(readFile);
// console.log("2");

// ------------------------ Async Example -----------------------------

// console.log("1");
// fs.readFile("log.txt", "utf-8", (err, html) => {
//   console.log(html);
// });
// console.log("2");

// ------------------------ Append (Dosyaya veri ekleme) -----------------------------
// fs.appendFileSync("log.txt", "test log 3");

// ------------------------ Delete (Dosyayı silme) -----------------------------
// fs.unlinkSync("log.txt");

// ------------------------ mkdir (Dosya oluşturma) -----------------------------
// fs.mkdirSync("test/test2");

// ------------------------ rename (Dosyayı adı değiştirme) -----------------------------
// fs.renameSync("test/test2", "test/test3");
