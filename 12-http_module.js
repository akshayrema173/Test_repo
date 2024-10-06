// Core features of node in action.

const http = require('http');

//Create a server.
const server = http.createServer((req,res)=>{

    // Huge object
    //console.log(req);

    if(req.url === '/'){
        res.end(`Welcome to our Home Page.`);   
    }

    if (req.url === '/about'){
        res.end('Here is our short history.');
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for...</p>
        <a href='/'>Back Home</a> 
    `);
});


//Port that the server listens to.
server.listen(5000);