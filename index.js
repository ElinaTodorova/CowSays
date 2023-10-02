let person = require('./information.js');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${person.name} from ${person.campus}`,
    e : "oO",
    T : "U "
}));