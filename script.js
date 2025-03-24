document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { name: "Aurora 3.5ML", price: "120.00৳", image: "p1.jpg" },
        { name: "Emerald 5ML", price: "150.00৳", image: "p2.jpg" }
    ];

    const container = document.getElementById("product-container");

    products.forEach((product, index) => {
        const productHTML = `
            <div class="product" style="animation-delay: ${index * 0.2}s">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p class="stars">★★★★★</p>
                <p class="price">${product.price}</p>
            </div>
        `;
        container.innerHTML += productHTML;
    });
const productElements = document.querySelectorAll('.product');
productElements.forEach(product => {
    product.addEventListener('click', function() {
        const popup = document.getElementById('popup');
        const smallImage = document.querySelector('.small-image');
        const productInfoH2 = document.querySelector('.product-info h2');
        const productInfoPrice = document.querySelector('.product-info .price');
        
        const name = this.querySelector('h2').textContent;
        const price = this.querySelector('.price').textContent;
        const image = this.querySelector('img').outerHTML;

        smallImage.innerHTML = image;
        productInfoH2.textContent = name;
        productInfoPrice.textContent = price;
        
        popup.style.display = 'flex';
    });
});

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});

document.querySelector('.order-now').addEventListener('click', function() {
    console.log('Order Now clicked');
});

document.querySelector('.add-to-cart').addEventListener('click', function() {
    console.log('Add to Cart clicked');
});  // Truck icon animation
    const truckIcon = document.querySelector(".truck-icon");
    truckIcon.addEventListener("click", () => {
        truckIcon.classList.add("truck-moving");
        setTimeout(() => {
            location.replace('orderlist.html');
        }, 300);
    });

    // Cart icon animation
    const cartIcon = document.querySelector(".cart-icon");
    cartIcon.addEventListener("click", () => {
        cartIcon.classList.add("cart-shaking");
        setTimeout(() => {
            cartIcon.classList.remove("cart-shaking");
                 location.replace('cart.html');
       
        }, 500);
    });
});