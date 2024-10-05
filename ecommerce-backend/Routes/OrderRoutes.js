const express = require('express');
const { placeOrder, getOrderById, getAllOrders } = require('../Controllers/OrderController');
const authenticateJWT = require('../Middlewares/AuthMiddleware');
const router = express.Router();

router.post('/', authenticateJWT, placeOrder);

router.get('/:id', authenticateJWT, getOrderById);

router.get('/', authenticateJWT, getAllOrders);

module.exports = router;
