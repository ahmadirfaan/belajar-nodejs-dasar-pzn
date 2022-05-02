import util from "util";

const firstName = "Irfaan";
const lastName = "Hibatullah";
console.info(util.format("Nama : %s", firstName));

const person = {
    firstName: firstName,
    lastName: lastName
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));