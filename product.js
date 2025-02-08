// product.js

let selectedSizeButton = null;
let basePrice = 50;

// selectSize: when a size button is clicked, remove the active class from any previously selected button,
// add it to the clicked button, update the base price, and update the displayed total price.
function selectSize(button) {
  if (selectedSizeButton) {
    selectedSizeButton.classList.remove("active");
  }
  selectedSizeButton = button;
  selectedSizeButton.classList.add("active");
  basePrice = parseFloat(button.getAttribute("data-price"));
  updatePrice();
}

// updatePrice: updates the displayed price based on the current quantity and base price.
function updatePrice() {
  const quantity = parseInt(document.getElementById("quantity").value);
  const totalPrice = basePrice * quantity;
  document.getElementById("price").innerText = "£" + totalPrice.toFixed(2);
}

// Event listener for the decrease button.
document.getElementById("decrease").addEventListener("click", function () {
  const quantity = document.getElementById("quantity");
  const currentValue = parseInt(quantity.value);
  if (currentValue > 1) {
    quantity.value = currentValue - 1;
    updatePrice();
  }
});

// Event listener for the increase button.
document.getElementById("increase").addEventListener("click", function () {
  const quantity = document.getElementById("quantity");
  const currentValue = parseInt(quantity.value);
  quantity.value = currentValue + 1;
  updatePrice();
});

// Event listener for the add-to-basket button.
// This function retrieves product details and stores/updates the item in localStorage.
document.getElementById("add-to-basket").addEventListener("click", function () {
  // Retrieve product details from the DOM.
  const title = document.getElementById("product_title").innerText;
  const image = document.getElementById("product_image").src;
  const quantity = parseInt(document.getElementById("quantity").value);
  // If a size button was selected, get its size attribute; otherwise, size remains null.
  const size = selectedSizeButton ? selectedSizeButton.getAttribute("data-size") : null;
  
  // Create an object to represent the cart item.
  const cartItem = {
    title: title,
    image: image,
    unitPrice: basePrice,  // price per unit for the selected size
    quantity: quantity,
    size: size
  };
  
  // Retrieve the current cart from localStorage or initialize an empty array.
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
  // Check if this product (with the same size, if applicable) is already in the cart.
  const existingItemIndex = cart.findIndex(item => item.title === cartItem.title && item.size === cartItem.size);
  
  if (existingItemIndex !== -1) {
    // If the item exists, update its quantity.
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Otherwise, add the new item.
    cart.push(cartItem);
  }
  
  // Save the updated cart back to localStorage.
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Optionally, alert the user.
  alert("Added " + quantity + " item(s) to the basket.");
});
