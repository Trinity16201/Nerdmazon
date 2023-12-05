const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'X-Files',
  },
  {
    category_name: 'Doctor-Who',
  },
  {
    category_name: 'Overwatch',
  },
  {
    category_name: 'World-of-Warcraft',
  },

];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
