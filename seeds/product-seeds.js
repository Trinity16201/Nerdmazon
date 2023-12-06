const { Product } = require('../models');

const productData = [
  {
    product_name: 'Code Hat',
    price: 14.99,
    stock: 14,
    category_id: 1,
    image_url: './assets/hats/Code-hat.jpg',
  },
  {
    product_name: 'Doctor Who Hat',
    price: 14.99,
    stock: 25,
    category_id: 2,
    image_url: './assets/hats/Doctor-who-hat.jpg',
  },
  {
    product_name: 'Overwatch Hat',
    price: 14.99,
    stock: 12,
    category_id: 3,
    image_url: './assets/hats/Overwatch-hat.jpg',
  },
  {
    product_name: 'World of Warcraft Hat',
    price: 14.99,
    stock: 12,
    category_id: 4,
    image_url: './assets/hats/Wow-hat2.webp',
  },
  {
    product_name: 'X-Files Hat',
    price: 14.99,
    stock: 12,
    category_id: 1,
    image_url: './assets/hats/X-files-hat.jpg',
  },
  {
    product_name: 'Coding Sweatshirt',
    price: 22.99,
    stock: 12,
    category_id: 4,
    image_url: './assets/sweatshirts/Coding-sweatshirt.jpg',
  },
  {
    product_name: 'Doctor Who Sweatshirt',
    price: 22.99,
    stock: 12,
    category_id: 2,
    image_url: './assets/sweatshirts/Doctor-who-sweatshirt.jpg',
  },
  {
    product_name: 'Overwatch Sweatshirt',
    price: 22.99,
    stock: 12,
    category_id: 3,
    image_url: './assets/sweatshirts/Overwatch-sweatshirt.jpg',
  },

  {
    product_name: 'World of Warcraft Sweatshirt',
    price: 18.99,
    stock: 12,
    category_id: 4,
    image_url: './assets/sweatshirts/Wow-sweatshirt.webp',
  },
  {
    product_name: 'X-Files Sweatshirt',
    price: 18.99,
    stock: 12,
    category_id: 1,
    image_url: './assets/sweatshirts/X-files-sweatshirt.jpg',
  },
  {
    product_name: 'Coding Shirt',
    price: 18.99,
    stock: 12,
    category_id: 1,
    image_url: './assets/t-shirts/Coding-shirt.JPG',
  },
  {
    product_name: 'Doctor Who Shirt',
    price: 18.99,
    stock: 12,
    category_id: 2,
    image_url: './assets/t-shirts/Doctorwho-shirt.jpg',
  },
  {
    product_name: 'Overwatch Shirt',
    price: 18.99,
    stock: 12,
    category_id: 3,
    image_url: './assets/t-shirts/Overwatch-shirt.JPG',
  },
  {
    product_name: 'World of Warcraft Shirt',
    price: 18.99,
    stock: 12,
    category_id: 4,
    image_url: './assets/t-shirts/Wow-shirt.JPG',
  },
  {
    product_name: 'X-Files Shirt',
    price: 18.99,
    stock: 12,
    category_id: 1,
    image_url: './assets/t-shirts/X-files-shirt.jpg',
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
