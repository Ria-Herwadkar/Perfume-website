// cart.js

// Retrieve the cart from localStorage or initialize an empty array.
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Get references to the DOM elements in the cart page.
const cartItemsContainer = document.getElementById("cartItems");
const totalAmountElement = document.getElementById("totalAmount");

// Function to render cart items in the table.
function renderCart() {
  cartItemsContainer.innerHTML = ""; // Clear current content
  let totalAmount = 0;
  cart.forEach((item, index) => {
    const itemTotal = item.unitPrice * item.quantity;
    totalAmount += itemTotal;
    
    // Create a table row for each cart item.
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <img src="${item.image}" alt="${item.title}" style="width:50px; height:50px; margin-right:10px;">
        ${item.title}
      </td>
      <td>${item.size ? item.size + "ml" : "N/A"}</td>
      <td>£${item.unitPrice.toFixed(2)}</td>
      <td>
        <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="form-control quantity-input" style="width:80px;">
      </td>
      <td>£${itemTotal.toFixed(2)}</td>
      <td>
        <button class="btn btn-danger btn-sm" data-index="${index}">Remove</button>
      </td>
    `;
    cartItemsContainer.appendChild(tr);
  });
  totalAmountElement.innerText = totalAmount.toFixed(2); // Update the total amount
}

// Listen for changes in the quantity input fields.
cartItemsContainer.addEventListener("change", function(e) {
  if (e.target.classList.contains("quantity-input")) {
    const index = e.target.getAttribute("data-index");
    let newQuantity = parseInt(e.target.value);
    if (newQuantity < 1) newQuantity = 1; // Ensure quantity is at least 1
    cart[index].quantity = newQuantity;
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
    renderCart(); // Re-render the cart
  }
});

// Listen for clicks on any Remove buttons.
cartItemsContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    cart.splice(index, 1); // Remove the item from the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Save updated cart to localStorage
    renderCart(); // Re-render the cart
  }
});

// Render the cart initially.
renderCart();








