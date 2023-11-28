const { Product } = require('../models');

const productData = [
  {
    product_name: 'T-Shirt',
    price: 14.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Sweatshirt',
    price: 50.0,
    stock: 25,
    category_id: 3,
  },
  {
    product_name: 'Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
