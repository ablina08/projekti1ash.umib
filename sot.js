//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

//search placeholder open page when entered//
document.addEventListener("DOMContentLoaded"), function() {
    // Get the search input field and button
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".btn-outline-success");

    // Function to handle the search and redirect
    searchButton.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent the form from submitting the default way
        
        const query = searchInput.value.toLowerCase();  // Get the search query

        // Redirect based on the query
        if (query.includes("our business")) {
            window.location.href = "business.html";  // Redirect to business.html
        } else if (query.includes("sign in")) {
            window.location.href = "user.html";  // Redirect to user.html
        } else if (query.includes("contact")) {
            window.location.href = "contact1.html";  // Redirect to contact1.html
        } else if (query.includes("track weather")) {
            window.location.href = "5.html";  // Redirect to 5.html
        } else if (query.includes("products")) {
            window.location.href = "products.html";  // Redirect to products.html 
        } else if (query.includes("safety tips")) {
            window.location.href = "safetytips.html";  // Redirect to safetytips.html   
        } else if (query.includes("about hurricanes")) {
            window.location.href = "about.html";  // Redirect to about.html
        } else if (query.includes("checkout")) {
            window.location.href = "purchase.html";  // Redirect to purchase.html   
        } else if (query.includes("add to card")) {
            window.location.href = "purchase.html";  // Redirect to purchase.html 
        } else if (query.includes("subscribe")) {
            window.location.href = "subscribe.html";  // Redirect to subscribe.html   
        } else if (query.includes("pics")) {
            window.location.href = "une.html";  // Redirect to une.html 
        } else if (query.includes("gallery")) {
            window.location.href = "gallery.html";  // Redirect to gallery.html                                         
        } else {
            alert("No matching page found!");  // Alert if no match
        }
    });
}