const express = require("express");
const path =  require('path');

const app = express();
const port = process.env.PORT || 8081; //if first is available, it will use it else it will use 8080.

//adding a static middleware.
app.use(express.static(__dirname+'/public')); 

app.get('/', (request, response)=>{
    response.send('<h1>Hello Test</h1>')
})

app.listen(port, ()=>{
    console.log(`Ready! Listening on ${port}`)
})

