const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../Controllers/ProductController');
const authenticateJWT = require('../Middlewares/AuthMiddleware');
const router = express.Router();

const isAdmin = (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    return res.status(403).json({ message: 'Admin access only.' });
  }
};

router.post('/', authenticateJWT, isAdmin, createProduct); 
router.get('/', authenticateJWT, getProducts); 
router.put('/:id', authenticateJWT, isAdmin, updateProduct);

router.delete('/:id', authenticateJWT, isAdmin, deleteProduct);

module.exports = router;
