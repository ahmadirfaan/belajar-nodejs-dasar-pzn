import {EventEmitter} from "events";

const emitter = new EventEmitter();

// menandakan bahwa emit ini melisten suatu event
// dengan menerima callback
emitter.addListener("hello", (name) => {
    console.info(`Hello ${name}`)
});

emitter.addListener("hello", (name) => {
    console.info(`Halo ${name}`)
});



// untuk mengirim event dan data-nya
emitter.emit("hello", "Irfaan")