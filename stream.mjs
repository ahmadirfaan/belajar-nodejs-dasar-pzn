import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Ahmad\n");
writer.write("Irfaan\n");
writer.write("Hibatullah\n");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
    const dataReader = data.toString();
    console.info(dataReader)

})