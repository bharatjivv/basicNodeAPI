// console.log('Started Server on Client Side');
const express = require('express');
const app = express();

//routes
app.get('/', (req, res) => {
    res.send('Hello Node API');   
})


app.listen(3000, () => {
    console.log('Node API running on port 3000')
})