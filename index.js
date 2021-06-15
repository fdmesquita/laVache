const infos = require('./information.js');
const cowsay = require("cowsay");
const myInfos = require('./information.js');

console.log(cowsay.say({
    text : `Hello I'm ${myInfos.name} from the ${myInfos.campus}!`,
    e : "oO",
    T : "U "
}))