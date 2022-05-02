function samplePromise() {
    return Promise.resolve("Irfaan");
}

//contoh ketika gagal di load di nodeJS karena ada kata kunci await
// solusinya adalah dengan memodifikasi ke dalam function async
// const name = await  samplePromise();
// console.info(name)

async function run() {
    const name = await samplePromise();
    console.info(name)
}

run();

