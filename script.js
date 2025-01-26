// nav bar highlighted section 

// Get the current page URL
const currentPage = window.location.pathname.split("/").pop(); 

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// leaflet map

var map = L.map('map').setView([53.458248, -2.285293], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var logo = L.icon({
    iconUrl: '/images/about-us/favicon-32x32.png',
    iconSize: [32, 32], 
    iconAnchor: [32, 32], 
});

L.marker([53.458248, -2.285293], { icon: logo }).addTo(map);
