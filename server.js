// console.log('Started Server on Client Side');
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModels');
const app = express();

app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('Hello Node API');   
})

app.get('/blog', (req, res) => {
    res.send('Hello BLOGGERS');
})

app.get('/products', async(req, res)=> {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.post('/products', async(req, res) => {
    // res.send(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})

    }
})

app.put('/products/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: `cannot find a product with ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// endof routes


mongoose.connect(`${mongo_db_api_string_here}`)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Node API running on port 3000')
    })
}).catch((error) => {
    console.log(error);
})