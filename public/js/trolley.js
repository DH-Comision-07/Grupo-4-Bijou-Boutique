document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.getElementById('cart-icon');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cartTotalAmountElement = document.getElementById('cart-total-amount');
    const cartCountElement = document.getElementById('cart-count');
    
    let cart = [];
    let cartCount = 0;
    let cartTotal = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            addProductToCart(productId, productName, productPrice);
        });
    });

    cartIcon.addEventListener('click', () => {
        cartDropdown.style.display = cartDropdown.style.display === 'none' ? 'block' : 'none';
    });

    function addProductToCart(id, name, price) {
        const existingItem = cart.find(item => item.id === id);

        if (existingItem) {
            existingItem.quantity++;
            existingItem.total += price;
        } else {
            cart.push({ id, name, price, quantity: 1, total: price });
        }

        cartCount++;
        cartTotal += price;

        updateCartDisplay();
    }

    function updateCartDisplay() {
        cartCountElement.textContent = cartCount;
        cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
        cartTotalAmountElement.textContent = `$${cartTotal.toFixed(2)}`;

        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>$${item.total.toFixed(2)}</span>
                <span class="remove-item" data-id="${item.id}">&times;</span>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        const removeButtons = document.querySelectorAll('.remove-item');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productId = button.getAttribute('data-id');
                removeProductFromCart(productId);
            });
        });
    }

    function removeProductFromCart(id) {
        const index = cart.findIndex(item => item.id === id);
        if (index > -1) {
            const item = cart[index];
            cartCount--;
            cartTotal -= item.total;
            cart.splice(index, 1);
            updateCartDisplay();
        }
    }
});
