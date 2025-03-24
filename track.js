document.addEventListener("DOMContentLoaded", function () {
    const orderStatus = 5; // Change this value (1-4) to update order status dynamically
    const products = [
        { name: "Aurora 3.5ML", quantity: 2, price: 120, image: "https://via.placeholder.com/50" },
        { name: "Cloud 3.5ML", quantity: 1, price: 120, image: "https://via.placeholder.com/50" }
    ];
    const deliveryFee = 3.00;
    const tax = 1.00;

    // Update order status
    document.querySelectorAll(".step").forEach(step => {
        const stepValue = parseInt(step.getAttribute("data-step"));
        if (stepValue <= orderStatus) {
            step.classList.add("active");
        }
    });

    // Update progress bar
    document.querySelector(".progress-bar").style.background = "purple";
// Ensure the progress bar stops at the 3rd checkmark
document.querySelector(".progress-bar").style.width = `${(orderStatus - 1) * 30}%`;

    // Populate product list
    const itemsContainer = document.querySelector(".items");
    let subtotal = 0;
    let totalItems = 0;

    products.forEach(product => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("item");
        itemElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div>
                <p>${product.name}</p>
                <p>${product.quantity} × $${product.price.toFixed(2)}</p>
            </div>
        `;
        itemsContainer.appendChild(itemElement);

        subtotal += product.quantity * product.price;
        totalItems += product.quantity;
    });

    // Update totals
    document.getElementById("order-items").textContent = totalItems;
    document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById("total").textContent = `$${(subtotal + deliveryFee + tax).toFixed(2)}`;
});
