// import untuk synchronous
// import fs from "fs";

// contoh balikan readfile atau writefile di promises
import fs from "fs/promises";


// ini synchronous
// const buffer = fs.readFileSync("file-system.mjs");
//
// console.info(buffer.toString());
//
// //menulis files
// fs.writeFileSync("temp.txt", "Hello world")

//CONTOH PROMISES
const buffer = await fs.readFile("file-system.mjs");
console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello NodeJS")
