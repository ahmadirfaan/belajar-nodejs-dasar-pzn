import process from "process";

process.addListener("exit",  (exitCode) => {
    console.info(`NodeJS Exit with code ${exitCode}`)
})

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);

// kode ini tidak dijalankan karena process sudah exit
console.info(`Not Printed because already exit`);