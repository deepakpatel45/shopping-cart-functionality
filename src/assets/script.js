/* Create an array named products */
const products = [];

/* Create product objects */
const cherries = {
  name: "Carton of Cherries",
  price: 4,
  quantity: 0,
  productId: 100,
  image: "./images/cherry.jpg"
};

const strawberries = {
  name: "Carton of Strawberries",
  price: 5,
  quantity: 0,
  productId: 101,
  image: "./images/strawberry.jpg"
};

const oranges = {
  name: "Bag of Oranges",
  price: 10,
  quantity: 0,
  productId: 102,
  image: "./images/orange.jpg"
};

/* Add products to products array */
products.push(cherries, strawberries, oranges);

/* Declare cart array */
const cart = [];

/* Global variable to hold total paid */
let totalPaid = 0;

/* Helper function to get product by productId */
function getProductById(productId) {
  return products.find(function (product) {
    return product.productId === productId;
  });
}

/* Add product to cart */
function addProductToCart(productId) {
  const product = getProductById(productId);

  if (product.quantity === 0) {
    cart.push(product);
  }

  product.quantity++;
}

/* Increase quantity */
function increaseQuantity(productId) {
  const product = getProductById(productId);
  product.quantity++;
}

/* Decrease quantity */
function decreaseQuantity(productId) {
  const product = getProductById(productId);

  if (product.quantity > 1) {
    product.quantity--;
  } else {
    removeProductFromCart(productId);
  }
}

/* Remove product completely from cart */
function removeProductFromCart(productId) {
  const product = getProductById(productId);
  product.quantity = 0;

  const index = cart.findIndex(function (item) {
    return item.productId === productId;
  });

  if (index !== -1) {
    cart.splice(index, 1);
  }
}

/* Calculate cart total */
function cartTotal() {
  let total = 0;

  for (const product of cart) {
    total += product.price * product.quantity;
  }

  return total;
}

/* Empty the cart */
function emptyCart() {
  for (const product of cart) {
    product.quantity = 0;
  }

  cart.length = 0;
  totalPaid = 0;
}

/* Pay function */
function pay(amount) {
  totalPaid += amount;

  const balance = totalPaid - cartTotal();

  if (balance >= 0) {
    totalPaid = 0;
  }

  return balance;
}

/* Export for testing */
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart
};