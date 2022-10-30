const express = require('express');
const path = require('path')
const app   = express();
const port  = process.env ||  3000;
app.use(express.static('public'));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', "hbs");
app.get('/', (req, res)=>{
    res.render('index')
})

app.listen(port, ()=>{
    console.log("server is running at ", port)
})