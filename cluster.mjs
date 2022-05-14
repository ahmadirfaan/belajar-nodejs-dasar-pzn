import cluster from "cluster";
import http from "http";
import os from "os";
import process from "process";


if(cluster.isPrimary) {
    console.info(`primary : ${process.pid}`);
    console.info(`cpus: ${os.cpus().length}`);
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
    cluster.addListener("exit", worker => {
        console.info(`Worker-${worker.id} is exit`);
        cluster.fork();
    })
}

if(cluster.isWorker) {
    console.info(`worker : ${process.pid}`);

    const server = http.createServer(((req, res) => {
        res.write(`Response from proccess ${process.pid}`);
        res.end();
        process.exit();
    }));

    server.listen(3000);
}