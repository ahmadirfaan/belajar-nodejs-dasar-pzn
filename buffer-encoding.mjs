const buffer = Buffer.from("AHmad Irfaan Hibatullah", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));


const bufferBase64 = Buffer.from("QUhtYWQgSXJmYWFuIEhpYmF0dWxsYWg=", "base64")

console.info(bufferBase64.toString("utf8"))

// untuk meng-encoding dari utf8 (normal) ke hex/base64