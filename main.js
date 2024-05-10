import readlineSync from "readline-sync";


const myName = readlineSync.question('Wie Heißt du? ');
const myBirthYear = readlineSync.question('In welchem Jahr bist du geboren? ');
const myBirthCity = readlineSync.question('Wo bist du geboren? ');
const currentCity = readlineSync.question('Wo lebst du jetzt? ');
const currentYear = readlineSync.question('Was ist das aktuelle Jahr? ');

let message = `Hallo, meine Name ist ${myName}, Ich wurde vor ${currentYear - myBirthYear} in ${myBirthCity} geboren. Jetzt lebe ich in ${currentCity}`;

console.log(message)