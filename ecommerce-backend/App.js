const express = require('express');
const authRoutes = require('./Routes/AuthRoutes');
const productRoutes = require('./Routes/ProductRoutes');
const cartRoutes = require('./Routes/CartRoutes');
const orderRoutes = require('./Routes/OrderRoutes');
const port = 3000;


const sequelize = require('./Config/Database.js');
const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/products', productRoutes);  
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes); 

sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log(`Server started on http://localhost:${3000}`));
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
