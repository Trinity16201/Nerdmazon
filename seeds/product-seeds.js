const { Product } = require('../models');

const productData = [
  {
    product_name: 'Code Hat',
    price: 14.99,
    stock: 14,
    category_id: 1,
    image_url: '.\public\assets\hats\Code-hat.jpg',
  },
  {
    product_name: 'Doctor Who Hat',
    price: 14.99,
    stock: 25,
    category_id: 2,
    image_url: '.\public\assets\hats\Doctor-who-hat.jpg',
  },
  {
    product_name: 'Overwatch Hat',
    price: 14.99,
    stock: 12,
    category_id: 3,
    image_url: '.\public\assets\hats\Overwatch-hat.jpg',
  },
  {
    product_name: 'World of Warcraft Hat',
    price: 14.99,
    stock: 12,
    category_id: 4,
    image_url: '.\public\assets\hats\Wow-hat2.webp',
  },
  {
    product_name: 'X-Files Hat',
    price: 14.99,
    stock: 12,
    category_id: 1,
    image_url: '.\public\assets\hats\X-files-hat.jpg',
  },
  {
    product_name: 'Coding Sweatshirt',
    price: 22.99,
    stock: 12,
    category_id: 4,
    image_url: '.\public\assets\hats\Coding-sweatshirt.jpg',
  },
  {
    product_name: 'Doctor Who Sweatshirt',
    price: 22.99,
    stock: 12,
    category_id: 2,
    image_url: '.\public\assets\hats\Doctor-who-sweatshirt.jpg',
  },
  {
    product_name: 'Overwatch Sweatshirt',
    price: 22.99,
    stock: 12,
    category_id: 3,
    image_url: '.\public\assets\hats\Overwatch-sweatshirt.jpg',
  },

  {
    product_name: 'World of Warcraft Sweatshirt',
    price: 18.99,
    stock: 12,
    category_id: 4,
    image_url: '.\public\assets\hats\Wow-sweatshirt.webp',
  },
  {
    product_name: 'X-Files Sweatshirt',
    price: 18.99,
    stock: 12,
    category_id: 1,
    image_url: '.\public\assets\hats\X-files-sweatshirt.jpg',
  },
  {
    product_name: 'Coding Shirt',
    price: 18.99,
    stock: 12,
    category_id: 1,
    image_url: '.\public\assets\hats\Coding-shirt.JPG',
  },
  {
    product_name: 'Doctor Who Shirt',
    price: 18.99,
    stock: 12,
    category_id: 2,
    image_url: '.\public\assets\hats\Doctorwho-shirt.jpg',
  },
  {
    product_name: 'Overwatch Shirt',
    price: 18.99,
    stock: 12,
    category_id: 3,
    image_url: '.\public\assets\hats\Overwatch-shirt.JPG',
  },
  {
    product_name: 'World of Warcraft Shirt',
    price: 18.99,
    stock: 12,
    category_id: 4,
    image_url: '.\public\assets\hats\Wow-shirt.JPG',
  },
  {
    product_name: 'X-Files Shirt',
    price: 18.99,
    stock: 12,
    category_id: 1,
    image_url: '.\public\assets\hats\X-files-shirt.jpg',
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
