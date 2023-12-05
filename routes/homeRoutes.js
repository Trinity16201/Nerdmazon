const router = require('express').Router();
const { User, Product, Category, } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  console.log('homeRoutes');
  res.render('homepage')
  // try {
  //   // Get all products and JOIN with user data
  //   const productData = await Product.findAll({
  //     include: [
  //       {
  //         model: Category,
  //         attributes: ['name'],
  //       },
  //     ],
  //   });

  //   // Serialize data so the template can read it
  //   const products = productData.map((product) => product.get({ plain: true }));

  //   // Pass serialized data and session flag into template
  //   res.render('homepage', { 
  //     products, 
  //     logged_in: req.session.logged_in 
  //   });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/products/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Category,
          attributes: ['name'],
        },
      ],
    });

    const product = productDataData.get({ plain: true });

    res.render('products', {
      ...product,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;