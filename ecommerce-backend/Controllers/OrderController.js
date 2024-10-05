const Order = require('../Models/Order');
const Cart = require('../Models/Cart');

const placeOrder = async (req, res) => {
  const userId = req.user.id;

  try {
    const cartItems = await Cart.findAll({ where: { UserId: userId } });

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Cart is empty.' });
    }

    const products = [];
    let totalPrice = 0;

    for (const item of cartItems) {
      const product = await item.getProduct();
      
      if (!product) {
        
        return res.status(404).json({ message: `Product with ID ${item.ProductId} does not exist.` });
      }

      products.push({
        productId: item.ProductId,
        quantity: item.quantity
      });

      totalPrice += product.price * item.quantity; 
    }

    const order = await Order.create({ userId, products, totalPrice });
    
    await Cart.destroy({ where: { UserId: userId } });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Order placement failed.', error: error.message });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });

    if (order) {
      res.json(order);
    } else {
      res.status(404).json({ message: 'Order not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order.', error: error.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    if (req.user.isAdmin) {
      const orders = await Order.findAll();
      res.json(orders);
    } else {
      res.status(403).json({ message: 'Admin access only.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders.', error: error.message });
  }
};

module.exports = {placeOrder, getOrderById, getAllOrders};