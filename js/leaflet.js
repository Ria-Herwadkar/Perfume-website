// leaflet map

// Set the map to the location of the company
var map = L.map('map').setView([53.458248, -2.285293], 13);

// Add the OpenStreetMap tiles
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to the map at the location of the company
var logo = L.icon({
    iconUrl: '/images/about-us/favicon-32x32.png',
    iconSize: [32, 32], 
    iconAnchor: [32, 32], 
});

// Add the logo as a marker to the map
L.marker([53.458248, -2.285293], { icon: logo }).addTo(map);