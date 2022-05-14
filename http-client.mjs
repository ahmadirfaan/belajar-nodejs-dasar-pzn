import https from "https";

const url = "https://hookb.in/7Z7gqkxKlOfZl29Xe1q9";
const request = https.request(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", data => {
        console.info(`Receive data : ${data.toString()}`);
    })
})


const body = JSON.stringify({
    firstName: "Ahmad Irfaan",
    lastName: "Hibatullah",
})
request.write(body);
request.end();