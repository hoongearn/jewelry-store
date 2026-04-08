let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  const item = { name, price, qty: 1 };
  // Check if item already in cart
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push(item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
  updateCartIcon();
}

function updateCartIcon() {
  const cartIcon = document.getElementById('cart-count');
  if (cartIcon) {
    let totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    cartIcon.innerText = totalItems;
  }
}

function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-items');
  container.innerHTML = '';
  let total = 0;
  cartItems.forEach(item => {
    const div = document.createElement('div');
    div.innerText = `${item.name} x ${item.qty} = RM${item.price * item.qty}`;
    container.appendChild(div);
    total += item.price * item.qty;
  });
  document.getElementById('cart-total').innerText = `Total: RM${total}`;
}
