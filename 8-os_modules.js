// require does not require./ prepended added for built in modules.
const os = require('os');

// Info about current user
const user = os.userInfo();
console.log(user);

// Method returns the system update in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);


// Info about the current OS.
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
};

console.log(currentOS);