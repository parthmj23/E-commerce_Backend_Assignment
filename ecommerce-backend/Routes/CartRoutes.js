const express = require('express');
const { addToCart, getCartItems, updateCartItem, deleteCartItem } = require('../Controllers/CartController');
const authenticateJWT = require('../Middlewares/AuthMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, addToCart);

router.get('/get', authenticateJWT, getCartItems);

router.put('/:id', authenticateJWT, updateCartItem);

router.delete('/:id', authenticateJWT, deleteCartItem);

module.exports = router;
