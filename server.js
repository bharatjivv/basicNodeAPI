// console.log('Started Server on Client Side');
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//routes
app.get('/', (req, res) => {
    res.send('Hello Node API');   
})

app.get('/blog', (req, res) => {
    res.send('Hello BLOGGERS');
})
// endof routes




// MongoDB Database Username and Password 
// Username - bharatjedu
// Password - mY8s2kpbvB2uxa9v
mongoose.connect('mongodb+srv://bharatjedu:mY8s2kpbvB2uxa9v@nodeapi.cbusw.mongodb.net/nodeAPI?retryWrites=true&w=majority&appName=NodeAPI')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Node API running on port 3000')
    })
}).catch((error) => {
    console.log(error);
})