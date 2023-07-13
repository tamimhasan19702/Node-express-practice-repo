const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('this is home port')
})

app.get('/sample',(req,res) => {
    res.send('this is sample port')
})

app.listen(3000,()=>{
    console.log('server running at 3000 port')
})