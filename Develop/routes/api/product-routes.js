const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/products', (req, res) => {
  // find all products
  Product.findAll()
  .then(product => res.status(200).json(product))
  .catch(e => {
    console.error(e);
    res.status(500).json({error: "Unable to find product"})
  });
});

// get one product
router.get('/products/:id', (req, res) => {
  // find a single product by its `id`
  Product.findOne({
    where: { id:req.params.id },
  })
  .then(product => res.json(product))
  .catch(e => res.status(500).json(e));

});

// create new product
router.post('/products', (req, res) => {
  const {product_name,price,stock,category_id} = req.body;
  Product.create({product_name,price,stock,category_id})
  .then(newProduct => {
    res.status(200).json(newProduct);
  })
  .catch(e => {
    console.error(e);
    res.status(500).json({error: "Unable to create new product"});
  });
});

// update product
router.put('/products/:id', (req, res) => {
  const {id} = req.params;
  const {product_name,price,stock,category_id} = req.body;
  Product.update({product_name, price, stock, category_id})
  .then(updatedProduct => {
    if (updatedProduct[0] === 0){
      return res.status(400).json({error: "Unable to find product"});
    }
    res.status(200).json({message: "Successfully updated product"});
  })
  .catch(e => {
    console.error(e);
    res.status(500).json({error: "Unable to update product"});
  })
});

router.delete('/products/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: { id:req.params.id }
  })
  .then(delProduct => {
    if(delProduct === 0){
      return res.status(400).json({ message: "Can't find Product"});
    }
    res.status(200).json({ message: "Product deleted successfully"});
  })
  .catch(e => res.status(500).json(e));
});

module.exports = router;
