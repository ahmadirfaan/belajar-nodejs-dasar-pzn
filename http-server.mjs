import http from "http";

const server = http.createServer((request, response) => {

    console.info(`method : ${request.method}`);
    console.info(`url : ${request.url}`);
    console.info(`headers: ${request.headers}`);

    if (request.method == "POST") {
        request.addListener("data", (data) => {
            response.setHeader("Content-Type", "application/json");
            console.info(`Ini data-nya : ${data}`)
            response.write(`Berhasil loh : ${data}`);
            response.end();
        })
    } else {
        if (request.url == "/irfaan") {
            response.write("Hello Ahmad Irfaan");
            response.end();
        } else {
            response.write("Hello HTTP Server");
        }
        response.end();
    }

});


server.listen(3000);