# Shopping Cart Functionality

A JavaScript-based shopping cart application built as part of the Udacity Intro to JavaScript project.

## Features

- Display products in storefront
- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products from cart
- Calculate cart total
- Cash checkout system
- Show remaining balance or return amount
- Unit testing with Jest

## Tech Stack

- HTML
- CSS
- JavaScript
- Node.js
- Jest
- Live Server

## Project Structure

```bash
src/
 ├── assets/
 │   ├── front.js
 │   ├── script.js
 │   └── styles.css
 ├── images/
 └── index.html

tests/
 └── script.test.js
```

## Installation

Clone the repository:

```bash
git clone https://github.com/deepakpatel45/shopping-cart-functionality.git
```

Go to project folder:

```bash
cd shopping-cart-functionality
```

Install dependencies:

```bash
npm install
```

## Run Project

Start live server:

```bash
npm run start
```

Open browser:

```bash
http://127.0.0.1:3000
```

## Run Tests

Execute unit tests:

```bash
npm run test
```

## Functionality

- `addProductToCart(productId)`
- `increaseQuantity(productId)`
- `decreaseQuantity(productId)`
- `removeProductFromCart(productId)`
- `cartTotal()`
- `pay(amount)`
- `emptyCart()`

## Author

Deepak Patel
