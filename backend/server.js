import express from 'express';
import data from './data.js'

const app = express();

//return products in server.js
app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send("Server is ready");
});

// created very simple server using node & express
app.listen(5000, () => {
    console.log('Serve at http://localhost:5000');
});


