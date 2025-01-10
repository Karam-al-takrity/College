let cart = [];

function addToCart(product, button) {
  // Check if the product is already in the cart
  const existingProduct = cart.find(item => item.name === product.name);
  if (existingProduct) {
    alert('This product is already in your cart.');
    return;
  }

  // Add the product to the cart if it doesn't exist
  cart.push(product);
  updateCartCount();
  updateCartTotal();

  // Change button text to "Added to Cart" and disable it
  button.innerText = 'Added to Cart';
  button.classList.add('added'); // Add a class for styling
  button.disabled = true; // Disable the button to prevent further clicks
}

function updateCartCount() {
  document.getElementById('cart-count').innerText = cart.length;
}

function updateCartTotal() {
  let total = 0;
  cart.forEach(product => {
    total += product.price;
  });
  document.getElementById('cart-total').innerText = total.toFixed(2);
  displayCartItems();
}

function displayCartItems() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${product.name} - $${product.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartTotal();
}

function toggleCart() {
  const cartModal = document.getElementById('cartModal');
  cartModal.classList.toggle('active');
}

