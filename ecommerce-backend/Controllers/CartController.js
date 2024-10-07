const Cart = require('../Models/Cart');

const addToCart = async (req, res) => {
  const { ProductId, quantity } = req.body; 

  try {
    const UserId = req.user.id;

    const cartItem = await Cart.create({
      ProductId,   
      quantity,
      UserId      
    });

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(400).json({ message: 'Adding to cart failed.', error: error.message });
  }
};

const getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
    });
    
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error: error.message });
  }
};

const updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  try {
    const cartItem = await Cart.findOne({ 
      where: { 
        ProductId: req.params.id,  
        UserId: req.user.id 
      } 
    });

    if (cartItem) {
      await cartItem.update({ quantity });
      res.json({ message: 'Cart updated successfully', cartItem });
    } else {
      res.status(404).json({ message: 'Item not found in the cart.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart item.', error: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    
    const cartItem = await Cart.findOne({ 
      where: { 
        ProductId: req.params.id, 
        UserId: req.user.id 
      } 
    });

    if (cartItem) {
      await cartItem.destroy();
      res.json({ message: 'Item removed from cart.' });
    } else {
      res.status(404).json({ message: 'Item not found in the cart.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error removing cart item.', error: error.message });
  }
};
module.exports = {
  addToCart,
  getCartItems,
  updateCartItem,
  deleteCartItem,
};

