function samplePromise() {
    return Promise.resolve("Irfaan");
}

// Jika javascript module behaviornya adalah async function
const name = await samplePromise();
console.info(name)


