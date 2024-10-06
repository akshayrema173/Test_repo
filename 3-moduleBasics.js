// Modules - Encapsulated Code ( only share minimum )
// In CommonJS evry file is by default a module

const names = require('./names.js');
// or const { person, secondPerson } = require('./names.js');
const sayHi = require('./utils.js');

const data = require('./alternativeFlavor.js');

console.log(names);

sayHi('akshay');
sayHi(names.person);
sayHi(names.secondPerson);

console.log(data);

require('./mindGrenade.js');
