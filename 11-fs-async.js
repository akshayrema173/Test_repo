// Same file methods with aysnc approach.
// Use callbacks to execute this, different from the sync approach.
// Non Blocking approach

//!!!Callback Hell!!!
//Usually resolved by async-await approach / Promises approach
const {readFile, writeFile} = require('fs');
// or const fs = require('fs'); 
// --- it gets everything instead of only one/two specific method

readFile('./Content/first.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./Content/second.txt','utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const second = result;
    writeFile('./Content/result-async.txt',
        `Here is the result ${first}, ${second}.`,
        (err)=>{
            if(err){
                console.log(err);
                return
            }
        })
    });
});

