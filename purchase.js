// Store product data in local storage for cart functionality
const productData = {
        name: "First Aid Kit",
        description: "A complete first aid kit with all the essentials to help during an emergency.",
        price: 29.99,
        image: "https://insights.ibx.com/wp-content/uploads/2019/06/first-aid-kit-screenshot.png"
    };
    
    // Add event listener for the "Buy Now" button
    document.addEventListener("DOMContentLoaded", function () {
        const buyNowButton = document.getElementById("buyNowBtn");
    
        if (buyNowButton) {
            buyNowButton.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default action
    
                // Add product to cart in localStorage (simple cart system)
                let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
                // Add the current product to the cart array
                cart.push(productData);
    
                // Save the updated cart back to localStorage
                localStorage.setItem("cart", JSON.stringify(cart));
    
                // Redirect to the purchase page (purchase.html)
                window.location.href = "purchase.html";
            });
        }
    
        // Display cart items on the cart page
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const cartItemsContainer = document.getElementById("ash-cartItems");
        const cartTotal = document.getElementById("ash-cartTotal");
    
        if (cartItemsContainer && cartTotal) {
            if (cart.length > 0) {
                let totalPrice = 0;
    
                cart.forEach(item => {
                    const itemHTML = `
                        <div class="ash-cart-item row mb-3">
                            <div class="col-3">
                                <img src="${item.image}" class="img-fluid" alt="${item.name}">
                            </div>
                            <div class="col-9">
                                <h5>${item.name}</h5>
                                <p>${item.description}</p>
                                <p><strong>$${item.price}</strong></p>
                            </div>
                        </div>
                    `;
                    cartItemsContainer.innerHTML += itemHTML;
                    totalPrice += item.price;
                });
    
                // Update total price
                cartTotal.textContent = totalPrice.toFixed(2);
            } else {
                cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
            }
        }
    
        // Handle "Complete Purchase" button
        const completePurchaseBtn = document.getElementById("completePurchaseBtn");
        const purchaseSuccessMessage = document.getElementById("purchaseSuccessMessage");
    
        if (completePurchaseBtn && purchaseSuccessMessage) {
            purchaseSuccessMessage.style.display = "none";
    
            completePurchaseBtn.addEventListener("click", function (event) {
                event.preventDefault();
                purchaseSuccessMessage.textContent = "Submitted Successfully!";
                purchaseSuccessMessage.style.display = "block";
    
                // Hide message after 5 seconds
                setTimeout(() => {
                    purchaseSuccessMessage.style.display = "none";
                }, 5000);
            });
        }
    
        // Handle "Proceed to Checkout" button
        const checkoutBtn = document.getElementById("ash-checkoutBtn");
        const successMessage = document.getElementById("successMessage");
    
        if (checkoutBtn && successMessage) {
            successMessage.style.display = "none";
    
            checkoutBtn.addEventListener("click", function () {
                successMessage.textContent = "Thank you for your order!";
                successMessage.style.display = "block";
    
                // Hide message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = "none";
                }, 5000);
            });
        }
    });
    
        // Search functionality (placeholder)
        const searchInput = document.querySelector(".form-control");
        const searchButton = document.querySelector(".btn-outline-success");
    
        if (searchButton && searchInput) {
            searchButton.addEventListener("click", function(event) {
                event.preventDefault();  // Prevent the form from submitting the default way
    
                const query = searchInput.value.toLowerCase();  // Get the search query
    
                // Redirect based on the query
                if (query.includes("our business")) {
                    window.location.href = "business.html";
                } else if (query.includes("sign in")) {
                    window.location.href = "user.html";
                } else if (query.includes("contact")) {
                    window.location.href = "contact1.html";
                } else if (query.includes("track weather")) {
                    window.location.href = "5.html";
                } else if (query.includes("products")) {
                    window.location.href = "products.html";
                } else if (query.includes("safety tips")) {
                    window.location.href = "safetytips.html";
                } else if (query.includes("about hurricanes")) {
                    window.location.href = "about.html";
                } else if (query.includes("checkout")) {
                    window.location.href = "purchase.html";
                } else if (query.includes("add to cart")) {
                    window.location.href = "purchase.html";
                } else if (query.includes("subscribe")) {
                    window.location.href = "subscribe.html";
                } else if (query.includes("pics")) {
                    window.location.href = "une.html";
                } else if (query.includes("gallery")) {
                    window.location.href = "gallery.html";
                } else {
                    alert("No matching page found!");
                }
            });
        }

    