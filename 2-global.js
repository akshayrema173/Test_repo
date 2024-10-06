// GLOBALS --- Different from browser JS 
// ---NO WINDOW 

// __dirname - path to current directory
// __filename - filename
// require - function to use modules
// module - info about the current module
// process - info abt the env where the prog is being executed. !!!
// console available globally as well...

console.log(__dirname);
console.log(__filename);

setInterval(()=> {
    console.log('Hello World');
},1000); 
