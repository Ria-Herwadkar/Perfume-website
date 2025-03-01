// nav bar highlighted section 

// Get the current page URL. highlight the current page in the nav bar
const currentPage = window.location.pathname.split("/").pop(); 

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    // Check if the toggle exists
    if (themeSwitch) {
        // Load previously selected theme from localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            body.classList.add('dark-mode'); // Apply dark mode class
            themeSwitch.checked = true;     // Set the toggle as checked
        }

        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                body.classList.add('dark-mode');        // Enable dark mode
                localStorage.setItem('darkMode', 'true'); // Save to localStorage
            } else {
                body.classList.remove('dark-mode');     // Disable dark mode
                localStorage.setItem('darkMode', 'false'); // Save to localStorage
            }
        });
    }
});

// Form Validation for Register Page
const form = document.getElementById('register-form');
const firstNameField = document.getElementById('first-name');
const emailField = document.getElementById('email');
const phoneField = document.getElementById('phone');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-password');

if (form && firstNameField && emailField && phoneField && passwordField && confirmPasswordField) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const firstName = firstNameField.value.trim();
        const email = emailField.value.trim();
        const phone = phoneField.value.trim();
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        // Validate First Name.
        if (firstName === "") {
            alert("First name is required.");
            return;
        }

        // Validate Email contains '@'.
        if (!email.includes('@')) {
            alert("Email address must contain '@'.");
            return;
        }

        // Validate Phone Number: must start with +44 and followed by 10 digits.
        const ukPhoneRegex = /^\+44\d{10}$/;
        if (!ukPhoneRegex.test(phone)) {
            alert("Phone number must be a valid UK number starting with +44 followed by 10 digits.");
            return;
        }

        // Validate password length.
        if (password.length <= 8) {
            alert('Password must be longer than 8 characters.');
            return;
        }

        // Validate Passwords match.
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        alert('Thank you for signing up!');
    });
}

   

// Product individual pages. 

// Get the current URL of the page.
var url_string = window.location.href;
console.log(url_string);
console.log ("--------------------")

// Create a URL object from the current URL.
const url = new URL(window.location.href);

// Get the productID parameter from the URL.
const productID = url.searchParams.get("productID");
console.log("product ID = " + productID);

// Get references to the HTML elements where product details will be displayed.
let product_title = document.getElementById("product_title");
let product_description = document.getElementById("product_description");
let product_image = document.getElementById("product_image");
let product_notes = document.getElementById("notes");
let product_notes_page = document.getElementById("product_notes_page");
// Check if productID and the HTML elements exist.
if (productID && product_title && product_description && product_image && product_notes || product_notes_page  ) {
    
// Use a switch statement to display the product details based on the productID.
switch (productID) {

    // For Him
    // Ocean Valor
    case "male_1":
        product_title.innerHTML = "Ocean Valor";
        product_image.src = "images/for-him/maleperfume1.png";
        product_description.innerHTML = "Ocean Valor is a bold and refreshing fragrance designed for the modern man. The fragrance begins with fresh sea notes, while the aromatic sophistication of Geranium adds a bold and masculine heart completed with a base of Musk that delivers a warm and sensual finish that resonates with confidence. Encased in a gorgeous crystal-like bottle, Ocean Valor is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion.  Let Ocean Valor reflect your inner strength and leave a lasting impression of refined masculinity.";
        product_notes.innerHTML = "Sea Notes, Geranium, Musk ";
    break;

    // Noir Essence
    case "male_2":
        product_title.innerHTML = "Noir Essence";
        product_image.src = "images/for-him/maleperfume2.png";
        product_description.innerHTML = "Noir Essence is a fragrance that combines boldness, depth and sophistication. It begins with the sharp, fruity aroma of Blackcurrant, which transitions seamlessly into the earthy sophistication of Patchouli, completed with the clean, warm embrace of White Musk creating a perfectly balanced and lasting impression. Presented in a modern, sophisticated bottle, Noir Essence is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Choose Noir Essence and make every moment unforgettable.";
        product_notes.innerHTML = "Blackcurrant, Patchouli, White Musk ";
    break;

    // Apex
    case "male_3":
        product_title.innerHTML = "Apex";
        product_image.src = "images/for-him/maleperfume3.png";
        product_description.innerHTML = "Apex is a bold fragrance for the modern man. It begins with the crisp, citrusy brightness of Bergamot, transitioning into the spicy, aromatic allure of Nutmeg and finishes with the smooth, woody richness of Sandalwood, creating a bold and refined scent. Presented in a stylish bottle, Apex is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Apex be your signature scent, reflecting strength, style and elegance.";
        product_notes.innerHTML = "Bergamot, Nutmeg, Sandalwood ";
    break;

    // Atlas
    case "male_4":
        product_title.innerHTML = "Atlas";
        product_image.src = "images/for-him/maleperfume4.png";
        product_description.innerHTML = "Atlas is a sophisticated fragrance inspired by the raw beauty of nature. It begins with the crisp, aromatic freshness of Rosemary, transitioning into the bold, woody richness of Cedarwood and is completed by the smooth, clean elegance of White Musk. Presented in a modern, stylish bottle, Atlas is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. With Atlas, exude confidence and leave a mark of strength and elegance.";
        product_notes.innerHTML = "Rosemary, Cedarwood, White Musk";
    break;

    // Blue Horizon
    case "male_5":
        product_title.innerHTML = "Blue Horizon";
        product_image.src = "images/for-him/maleperfume5.png";
        product_description.innerHTML = "Blue Horizon is a bold and refreshing fragrance for the modern man. It begins with the crisp, refreshing Aquatic Accord, transitioning into the soft, floral touch of Water Lily and finishes with the smooth, clean allure of Musk. Encased in a sleek, blue bottle, Blue Horizon is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. ";
        product_notes.innerHTML = "Aquatic Accord, Water Lily, Musk ";
    break;

    // Ocean Breeze
    case "male_6":
        product_title.innerHTML = "Ocean Breeze";
        product_image.src = "images/for-him/maleperfume6.png";
        product_description.innerHTML = "Ocean Breeze is a fragrance that embodies freshness and sophistication. It begins with the crisp, refreshing aroma of Green Apple, blending seamlessly with Jasmine Absolute which adds a layer of sophistication and completed with the deep, marine warmth of Ambergris Accord, leading to a powerful and lasting impression. Presented in a modern bottle, Ocean Breeze is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. With Ocean Breeze, embrace a bold new level of freshness and confidence.";
        product_notes.innerHTML = "Green Apple, Jasmine Absolute, Ambergris Accord ";
    break;

    // Blue Drift
    case "male_7":
        product_title.innerHTML = "Blue Drift";
        product_image.src = "images/for-him/maleperfume7.png";
        product_description.innerHTML = "Blue Drift is a fragrance that blends freshness, elegance and strength. It begins with the refreshing burst of sea notes, transitioning into the aromatic richness of Geranium and concludes with the smooth, clean Musk base, creating a scent that is both invigorating and refined. Encased in a bold, oceanic blue bottle, Blue Drift is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Blue Drift be your signature scent, reflecting the power of the ocean and the essence of timeless masculinity.";
        product_notes.innerHTML = "Sea notes, Geranium, Musk ";
    break;

    // Zest Aura
    case "male_8":
        product_title.innerHTML = "Zest Aura";
        product_image.src = "images/for-him/maleperfume8.png";
        product_description.innerHTML = "Zest Aura is a fragrance that blends vibrant freshness with subtle strength. It begins with the refreshing citrus of Sicilian Bergamot, transitioning into the bold, herbal sophistication of Geranium and completed with a smooth base of White Musk that lingers with a clean, masculine finish. Presented in a sleek bottle, Zest Aura is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Zest Aura be your signature scent, leaving a lasting impression of strength and style.";
        product_notes.innerHTML = "Sicilian Bergamot, Geranium, White Musk ";
    break;

    // Noir Leather
    case "male_9":
        product_title.innerHTML = "Noir Leather";
        product_image.src = "images/for-him/maleperfume9.png";
        product_description.innerHTML = " Noir Leather is a bold and intoxicating fragrance crafted for the modern man. It begins with the spicy warmth of Pink Pepper, followed by a rich, smoky Leather Accord that defines the heart of the scent and completed with the deep warmth of Tobacco Absolute leaving a captivating and masculine finish. Encased in a sleek, masculine bottle, Noir Leather is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Noir Leather define your presence with its bold, luxurious aroma.";
        product_notes.innerHTML = "Pink Pepper, Leather Accord, Tobacco Absolute";
    break;

    // For Her
    // Eau de Charme
    case "female_1":
        product_title.innerHTML = "Eau de Charme ";
        product_image.src = "images/for-her/femperfume1.png";
        product_description.innerHTML = "Discover the allure of Eau de Charme. This is a captivating fragrance that is designed for the modern woman. A sparkling top note of Bergamo transitions to the soft floral elegance of Jasmine, while a sensual base of Musk adds depth and sophistication to this captivating scent. Encased in a sleep pink bottle, Eau de Charme is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Eau de Charme be your signature scent with its blend of grace, confidence and timeless elegance. ";
        product_notes.innerHTML = "Bergamot, Jasmine, Musk ";
    break;

    // Blush Essence
    case "female_2":
        product_title.innerHTML = "Blush Essence ";
        product_image.src = "images/for-her/femperfume2.png";
        product_description.innerHTML = "Immerse yourself in the vibrant allure of Blush Essence, a fragrance crafted for the woman who embodies graces and sophistication. This scent begins with the refreshing notes of Grapefruit, leading into a soft and powdery heart of Violet, while Cedarwood offers a warm and woody finish that lingers beautifully on your skin. With its elegant bottle and delicate pink bow, Blush Essence is a symbol of refined femininity. Blush Essence is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Make Blush Essence your everyday luxury and celebrate the beauty within you. ";
        product_notes.innerHTML = "Grapefruit, Violet, Cedarwood  ";
    break;

    // Crystal Bloom
    case "female_3":
        product_title.innerHTML = "Crystal Bloom";
        product_image.src = "images/for-her/femperfume3.png";
        product_description.innerHTML = "Velvet Horizon is a fragrance that blends freshness and depth, creating a captivating aroma. This fragrance begins with the vibrant sparkle of Bergamot, followed by the rich floral depth of Tuberose and finishes with the bold, earthy warmth of Oakmoss. Presented in a beautifully designed bottle, Velvet Horizon is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Define your elegance with Velvet Horizon and make every moment extra ordinary.";
        product_notes.innerHTML = "Pink pepper, Rose, Amber" ;
    break;

    // Velvet Horizon
    case "female_4":
        product_title.innerHTML = "Velvet Horizon";
        product_image.src = "images/for-her/femperfume4.png";
        product_description.innerHTML = "Velvet Horizon is a fragrance that blends freshness and depth, creating a captivating aroma. This fragrance begins with the vibrant sparkle of Bergamot, followed by the rich floral depth of Tuberose and finishes with the bold, earthy warmth of Oakmoss. Presented in a beautifully designed bottle, Velvet Horizon is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Define your elegance with Velvet Horizon and make every moment extra ordinary.";
        product_notes.innerHTML = "Bergamot, Tuberose, Oakmoss" ;
    break;

    // Golden Ember
    case "female_5":
        product_title.innerHTML = "Golden Ember ";
        product_image.src = "images/for-her/femperfume5.png";
        product_description.innerHTML = "Golden Ember is a fragrance that is a blend of luxurious spices and sweetness. The fragrance begins with the bold allure of Cardamom, transitioning into the warm, aromatic heart of Cinnamon and is completed with the soft, comforting embrace of Vanilla. Encased in a sleek and stylish bottle, Golden Ember is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Golden Ember be the fragrance that defines your elegance and allure. ";
        product_notes.innerHTML = "Cardamom, Cinnamon, Vanilla  ";
    break;

    // Amber Radiance
    case "female_6":
        product_title.innerHTML = "Amber Radiance" ;
        product_image.src = "images/for-her/femperfume6.png";
        product_description.innerHTML = "Amber Radiance is the ultimate blend of fresh energy and luxurious warmth. The citrusy zest of Mandarin is perfectly balanced by the delicate floral sweetness of Orange Blossom, while a base of Amber adds a warm golden depth creating a luxurious and lasting aroma. Encased in a radiant and refined bottle, Amber Radiance is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Amber Radiance be your signature scent and leave a radiant impression.";
        product_notes.innerHTML = "Mandarin, Orange Blossom, Amber  ";
    break;

    // Luminous Grace
    case "female_7":
        product_title.innerHTML = "Luminous Grace ";
        product_image.src = "images/for-her/femperfume7.png";
        product_description.innerHTML = "Luminous Grace is a fragrance that shines with feminine beauty and sophistication. It begins with the freshness of Grapefruit, leading into the creamy floral heart of Tuberose with a base of Musk that adds a soft warm finish. Presented in an elegant bottle, Luminous Grace is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. With Luminous Grace, embody timeless beauty and let your presence shine. ";
        product_notes.innerHTML = "Grapefruit, Tuberose, Musk ";
    break;

    // Blossom Serenade
    case "female_8":
        product_title.innerHTML = "Blossom Serenade";
        product_image.src = "images/for-her/femperfume8.png";
        product_description.innerHTML = "Blossom Serenade is a fragrance that blends sweetness, elegance and depth. The fragrance begins with the freshness of Strawberry, leading into the delicate floral elegance of Lily of the Valley with a base of smooth, creamy Sandalwood that provides a warm and lasting finish. Presented in a beautifully crafted bottle, Blossom Serenade is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Let Blossom Serenade enhance your natural beauty and leave a lasting impression. ";
        product_notes.innerHTML = "Strawberry, Lily of the Valley, Sandalwood ";
    break;

    // Midnight Bloom
    case "female_9":
        product_title.innerHTML = "Midnight Bloom ";
        product_image.src = "images/for-her/femperfume9.png";
        product_description.innerHTML = " Midnight Bloom is a fragrance that balances freshness and warmth. This scent opens with the luscious sweetness of Blackcurrant, while the delicate floral beauty of Freesia adds a romantic touch, completed with a warm embrace of Tonka Bean, creating a captivating and unforgettable aroma. Encased in a sleek, luxurious bottle, Midnight Bloom is available in 30ml, 50ml and 100 ml sizes, perfect for any occasion. Make Midnight Bloom your signature fragrance, perfect for both everyday luxury and special occasions.";
        product_notes.innerHTML = "Blackcurrant, Freesia, Tonka Bean";
    break;

    // Gift Sets
    // Rose Noir Gift Set
    case "gift_1":
        product_title.innerHTML = "Rose Noir Gift Set";
        product_image.src = "images/gift-sets/gift1.png";
        product_notes_page.innerHTML = "Eau de Parfum & Travel Spray";
        product_description.innerHTML = "The Rose Noir Gift Set combines luxury and sophistication. This set includes a captivating Eau de Parfum and a travel-friendly spray. Presented in a beautifully bold burgundy gift box, it's perfect for any occasion.";
        break;

    // Lunar Essence Gift Set
    case "gift_2":
        product_title.innerHTML = "Lunar Essence Gift Set";
        product_image.src = "images/gift-sets/gift2.png";
        product_notes_page.innerHTML = "Eau de Parfum, Body Lotion, Shower Gel";
        product_description.innerHTML = "The Lunar Essence Gift Set offers a complete sensory experience. It includes a luxurious Eau de Parfum, a nourishing body lotion, and a refreshing shower gel. Perfect for those who appreciate a harmonious blend of fragrance and skincare.";
        break;

    // Lunar Grace Gift Set
    case "gift_3":
        product_title.innerHTML = "Lunar Grace Gift Set";
        product_image.src = "images/gift-sets/gift3.png";
        product_notes_page.innerHTML = "Eau de Parfum, Body Spray, Cream Sachet";
        product_description.innerHTML = "The Lunar Grace Gift Set is designed for elegance and convenience. It features a captivating Eau de Parfum, a lightweight body spray, and a luxurious cream sachet. Ideal for gifting or personal indulgence.";
        break;

    // Infinite Edge Gift Set
    case "gift_4":
        product_title.innerHTML = "Infinite Edge Gift Set";
        product_image.src = "images/gift-sets/gift4.png";
        product_notes_page.innerHTML = "Eau de Parfum & Deodorant Spray";
        product_description.innerHTML = "The Infinite Edge Gift Set is perfect for the modern individual. It includes a bold Eau de Parfum and a long-lasting deodorant spray. Presented in a sleek, contemporary box, it's a gift that exudes confidence.";
        break;

    // Midnight Luxe Gift Set
    case "gift_5":
        product_title.innerHTML = "Midnight Luxe Gift Set";
        product_image.src = "images/gift-sets/gift5.png";
        product_notes_page.innerHTML = "Eau de Parfum & Travel Spray";
        product_description.innerHTML = "The Midnight Luxe Gift Set is the epitome of sophistication. It features a rich Eau de Parfum and a convenient travel spray. Encased in a luxurious black gift box, it's perfect for evening occasions.";
        break;

    // Pink Glow Gift Set
    case "gift_6":
        product_title.innerHTML = "Pink Glow Gift Set";
        product_image.src = "images/gift-sets/gift6.png";
        product_notes_page.innerHTML = "Eau de Parfum & Travel Spray";
        product_description.innerHTML = "The Pink Glow Gift Set is a celebration of femininity and charm. It includes a radiant Eau de Parfum and a travel-friendly spray. Presented in a soft pink gift box, it's ideal for brightening someone's day.";
        break;

    // Apex Edge Gift Set
    case "gift_7":
        product_title.innerHTML = "Apex Edge Gift Set";
        product_image.src = "images/gift-sets/gift7.png";
        product_notes_page.innerHTML = "Eau de Toilette, Deodorant Spray, Travel Spray";
        product_description.innerHTML = "The Apex Edge Gift Set is designed for the adventurous spirit. It includes a refreshing Eau de Toilette, a long-lasting deodorant spray, and a convenient travel spray. Perfect for those who are always on the go.";
        break;

    // The Golden Haven Gift Set
    case "gift_8":
        product_title.innerHTML = "The Golden Haven Gift Set";
        product_image.src = "images/gift-sets/gift8.png";
        product_notes_page.innerHTML = "Eau de Parfum & Shower Gel";
        product_description.innerHTML = "The Golden Haven Gift Set offers a touch of opulence. It features a luxurious Eau de Parfum and a rich shower gel. Presented in a golden gift box, it's perfect for those who appreciate the finer things in life.";
        break;

    // The Midnight Glow Gift Set
    case "gift_9":
        product_title.innerHTML = "The Midnight Glow Gift Set";
        product_image.src = "images/gift-sets/gift9.png";
        product_notes_page.innerHTML = "Eau de Parfum, Lipstick, Travel Spray";
        product_description.innerHTML = "The Midnight Glow Gift Set is a luxurious combination of fragrance and beauty. It includes a captivating Eau de Parfum, a bold lipstick, and a travel-friendly spray. Perfect for making a statement.";
        break;
    
    // Default case for when the productID does not match any known products
    default: 
        product_title.innerHTML = "Product not found";
        product_description.innerHTML = "The product you are looking for is not available.";
        product_image.src = "images/placeholder.png";
        product_notes.innerHTML = "N/A";
        break;
}
}

document.addEventListener("DOMContentLoaded", function() {
    // === Navigation Auth Update ===
    const navAuthContainer = document.getElementById("navAuth"); // Get the navigation authentication container element
    if (navAuthContainer) {
      // Debug: Log what we get from localStorage.
      const loggedIn = localStorage.getItem("loggedIn"); // Check if the user is logged in
      console.log("loggedIn:", loggedIn); // Log the logged-in status for debugging
      
      if (loggedIn === "true") { // Check if the user is logged in
        const username = localStorage.getItem("userEmail"); // Get the user's email from localStorage
        navAuthContainer.innerHTML = `
          <span class="me-2 user">Welcome, ${username}!</span>
          <button id="logoutButton" class="btn btn-outline-secondary logout">Logout</button>
        `;
        const logoutButton = document.getElementById("logoutButton"); // Get the logout button element
        if (logoutButton) {
          logoutButton.addEventListener("click", function() { // Add a click event listener to the logout button
            localStorage.removeItem("loggedIn"); // Remove the logged in status from localStorage
            localStorage.removeItem("userEmail"); // Remove the user's email from localStorage
            window.location.href = "login.html"; // Redirect the user to the login page
          });
        }
      } else { // If the user is not logged in
        navAuthContainer.innerHTML = `
          <a href="login.html" class="btn btn-outline-primary me-2 login-button">Login</a>
          <a href="register.html" class="btn btn-primary sign-up-button">Sign-up</a>
        `;
      }
    }
  });


  




