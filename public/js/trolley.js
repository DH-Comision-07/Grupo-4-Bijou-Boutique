// cart.js

// Función para actualizar el contador del carrito
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCountElement.textContent = cart.length;
}

  // Función para añadir un producto al carrito
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = button.getAttribute('data-price');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

  // Añadir evento de clic a los botones de "Añadir al carrito"
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach(button => {
    button.addEventListener('click', addToCart);
    });

    // Actualizar el contador del carrito al cargar la página
    updateCartCount();
});
