import express from 'express';
const app = express();
const PORT = 5000;

import cors from 'cors';
app.use(cors());
app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: "Laptop", price: 999.99 },
        { id: 2, name: "Smartphone", price: 699.99 },
        { id: 3, name: "Tablet", price: 399.99 }
    ];
    if (req.query.search) {
        const searchitem = products.filter((product) =>
            product.name.includes(req.query.search)
        );
        res.send(searchitem);
        return;
    }
    setTimeout(() => {
        res.send(products);

    }, 3000);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
