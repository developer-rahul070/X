/* =========================================
   MINYA SHOP - JAVASCRIPT
========================================= */


/* =========================================
   CART SYSTEM
========================================= */

let cartCount = 0;

const cartNumber = document.querySelector(".cart span");
const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartNumber.textContent = cartCount;

        button.textContent = "Added ✓";

        button.style.background = "#90ee90";

        setTimeout(function() {

            button.textContent = "Add to Cart";

            button.style.background = "";

        }, 1200);

    });

});


/* =========================================
   SEARCH SYSTEM
========================================= */

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

function searchProducts() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    if (searchText === "") {

        products.forEach(function(product) {
            product.style.display = "";
        });

        return;
    }

    products.forEach(function(product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchText)) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}

searchButton.addEventListener("click", searchProducts);

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchProducts();
    }

});


/* =========================================
   HERO SLIDER
========================================= */

const heroImage =
    document.querySelector(".hero-image img");

const heroText =
    document.querySelector(".hero-text h1");

const heroDescription =
    document.querySelector(".hero-text span");

const heroImages = [

    "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80"

];

const heroTitles = [

    "Everything You Need, All In One Place",

    "Upgrade Your Lifestyle",

    "Shop Smart. Live Better."

];

const heroDescriptions = [

    "Discover amazing products at amazing prices.",

    "Premium products. Better prices.",

    "Find your favorite products in one place."

];

let currentSlide = 0;


/* SHOW SLIDE */

function showSlide(index) {

    heroImage.src = heroImages[index];

    heroText.innerHTML =
        heroTitles[index];

    heroDescription.textContent =
        heroDescriptions[index];

}


/* NEXT BUTTON */

const nextButton =
    document.querySelector(".hero-next");

nextButton.addEventListener("click", function() {

    currentSlide++;

    if (currentSlide >= heroImages.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

});


/* PREVIOUS BUTTON */

const prevButton =
    document.querySelector(".hero-prev");

prevButton.addEventListener("click", function() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = heroImages.length - 1;
    }

    showSlide(currentSlide);

});


/* AUTO SLIDER */

setInterval(function() {

    currentSlide++;

    if (currentSlide >= heroImages.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}, 5000);


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
    document.querySelector(".back-top");

backTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   SHOP NOW BUTTON
========================================= */

const shopButton =
    document.querySelector(".shop-btn");

shopButton.addEventListener("click", function() {

    document.querySelector(".deals-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================
   PROMO BUTTON
========================================= */

const promoButton =
    document.querySelector(".promo-content button");

promoButton.addEventListener("click", function() {

    document.querySelector(".products-section")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================
   CATEGORY EXPLORE BUTTONS
========================================= */

const categoryButtons =
    document.querySelectorAll(".category-card a");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        document.querySelector(".products-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================
   SEE ALL / VIEW ALL
========================================= */

const sectionLinks =
    document.querySelectorAll(".section-heading a");

sectionLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        document.querySelector(".products-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* =========================================
   CART CLICK
========================================= */

const cart =
    document.querySelector(".cart");

cart.addEventListener("click", function() {

    if (cartCount === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "You have " +
            cartCount +
            " item(s) in your cart."
        );

    }

});


/* =========================================
   ACCOUNT CLICK
========================================= */

const account =
    document.querySelector(".account");

account.addEventListener("click", function() {

    alert(
        "Welcome to MINYA SHOP!\n\n" +
        "Login system will be added soon."
    );

});


/* =========================================
   ORDERS CLICK
========================================= */

const orders =
    document.querySelector(".orders");

orders.addEventListener("click", function() {

    alert(
        "Your Orders\n\n" +
        "You don't have any orders yet."
    );

});


/* =========================================
   LANGUAGE
========================================= */

const language =
    document.querySelector(".language");

language.addEventListener("click", function() {

    alert(
        "Language options\n\n" +
        "English\n" +
        "বাংলা\n" +
        "हिन्दी"
    );

});


/* =========================================
   MENU
========================================= */

const menu =
    document.querySelector(".menu");

menu.addEventListener("click", function() {

    alert(
        "MINYA SHOP MENU\n\n" +
        "Today's Deals\n" +
        "Best Sellers\n" +
        "Electronics\n" +
        "Fashion\n" +
        "Home & Kitchen"
    );

});


/* =========================================
   PAGE LOAD MESSAGE
========================================= */

console.log(
    "MINYA SHOP loaded successfully!"
);