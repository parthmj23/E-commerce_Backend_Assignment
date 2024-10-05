E-commerce Backend System
This is a backend system for a small e-commerce application built using Node.js, Sequelize ORM, MySQL, JWT for authentication, and bcrypt for password hashing. The system handles user management, product management, shopping cart, and order management with admin controls for product management.

Technologies Used
Node.js: Backend runtime.
Express.js: Web framework for routing and API handling.
Sequelize ORM: To interact with the MySQL database.
MySQL: Database to store user, product, order, and cart data.
JWT: JSON Web Tokens for authentication.
bcrypt: For password hashing and security.
Postman: API testing tool.
Features
User Authentication:

User registration and login with JWT authentication.
Admin control for managing products.
Passwords are hashed using bcrypt.
Product Management:

Admins can create, update, and delete products.
All users can view the list of available products.
Shopping Cart:

Users can add products to their cart, update quantities, and remove products.
View items in the cart.
Order Management:

Users can place an order with the items in their cart.
Admin can view all orders, while users can view their own orders.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo-url.git
cd e-commerce-backend
Install dependencies:

bash
Copy code
npm install
Set up MySQL database:

Create a MySQL database named PARTH.

Update the database configuration in Config/Database.js:

javascript
Copy code
const sequelize = new Sequelize('PARTH', 'root', 'your-password', {
  host: 'localhost',
  dialect: 'mysql',
});
Sync Sequelize models with the database:

bash
Copy code
npm run sync
Start the server:

bash
Copy code
npm start
The server will be running at http://localhost:3000.

API Endpoints
Authentication Routes (/auth)
POST /auth/register: Register a new user.
POST /auth/login: Log in as a user and receive a JWT.
POST /auth/logout: Log out the current user.
Product Routes (/products)
GET /products: Get all products.
POST /products: Create a new product (admin only).
PUT /products/
: Update a product (admin only).
DELETE /products/
: Delete a product (admin only).
Cart Routes (/cart)
POST /cart: Add an item to the cart.
GET /cart/get: Get all cart items for the logged-in user.
PUT /cart/
: Update the quantity of a cart item.
DELETE /cart/
: Remove an item from the cart.
Order Routes (/orders)
POST /orders: Place an order.
GET /orders/
: Get a specific order by ID.
GET /orders: Get all orders (admin only).
Models
User Model
username: Unique username.
email: Unique email address.
password: Hashed password.
isAdmin: Boolean indicating if the user is an admin.
Product Model
name: Name of the product.
price: Price of the product.
description: Description of the product.
quantity: Available quantity of the product.
Cart Model
quantity: Number of items in the cart.
ProductId: Foreign key reference to the product.
UserId: Foreign key reference to the user.
Order Model
products: JSON array of ordered products.
totalPrice: Total price of the order.
status: Order status (default: 'pending').
userId: Foreign key reference to the user who placed the order.
Middleware
authenticateJWT
Middleware to authenticate users via JWT. It checks if the token is valid and grants access to protected routes.

isAdmin
Middleware to verify if the logged-in user has admin privileges.

Running Tests
You can test the API endpoints using Postman or a similar tool.
License
