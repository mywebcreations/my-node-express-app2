const express = require("express");
const path =  require('path');

const app = express();
const port = process.env.PORT || 8081; //if first is available, it will use it else it will use 8080.

//adding a static middleware.
// app.use(express.static(__dirname+'/public')); 
console.clear();

app.get('/', (request, response)=>{
    response.send('<h1>Hello Test</h1>')
})

//pattern matches (not regular expression - just regular patterns)
app.get('/ab?cd', (req, res)=>{
    res.send('<h2>ABC</h2>');
})
app.get('/ab+de', (req, res)=>{
    res.send('<h2>AB+C</h2>');
})
app.get('/ab+de', (req, res)=>{
    res.send('<h2>AD+DE</h2>');
})
app.get('/pq*rs', (req, res)=>{//match any string of any length between q and r.
    res.send('<h2>PQ*RS</h2>');
})

//regular expressions
app.get(/z/, (request, response)=>{
    response.send('<h2>URL file must have a \'z\' in it.');
})

//URL request parameters
app.get('/users/:id/:name/:age/:city', (request, response, next)=>{
    response.send(request.params);
    console.log(request.params);
    next()}, //instructs node to run the next arg - a callback function. 
            // You can also add another next() to the arguments in the second callback function.
    (request, response)=>{//(request, response, next())
        console.log(`second callback within \'get\' route ${request.params.city}`)

})

app.listen(port, ()=>{
    console.log(`Ready! Listening on ${port}`)
})

