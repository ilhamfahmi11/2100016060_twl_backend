const express = require('express');
const productModels = require('../models/productModels');

const router = express.Router();

router.get('/product', (req, res) => {
  const product = productModels.getProduct();
  res.json(product);
});

router.put('/product', (req, res) => {
  const { name, price } = req.body;

  const product = productModels.getProduct();
  product.name = name;
  product.price = price;

  productModels.updateProduct(product);

  res.json(product);
});

router.delete('/product', (req, res) => {
  const product = productModels.getProduct();

  productModels.deleteProduct();

  res.json({ message: 'Product deleted successfully.' });
});

module.exports = router;
