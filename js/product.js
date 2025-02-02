let selectedSizeButton = null;
let basePrice = 50;

// selectSize button, when a button is clicked, 
// it will remove the active class from the previously selected button and add it to the clicked button. 
// It will also update the basePrice to the price of the selected size and call the updatePrice function.
function selectSize(button) {
    if (selectedSizeButton) {
        selectedSizeButton.classList.remove("active");
    }
    selectedSizeButton = button;
    selectedSizeButton.classList.add("active");
    basePrice = parseFloat(button.getAttribute("data-price"));
    updatePrice();
}

// updatePrice function, when called, will update the price displayed on the page based on the quantity selected by the user.
function updatePrice() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = basePrice * quantity;
    document.getElementById("price").innerText =
        "£" + totalPrice.toFixed(2);
}

// Event listeners for the decrease, increase, and add-to-basket buttons.
document.getElementById("decrease").addEventListener("click", function () {
        const quantity = document.getElementById("quantity");
        const currentValue = parseInt(quantity.value);
        if (currentValue > 1) {
            quantity.value = currentValue - 1;
            updatePrice();
        }
    });

// Event listener for the increase button, when clicked, it will increase the quantity by 1 and call the updatePrice function.
document.getElementById("increase").addEventListener("click", function () {
        const quantity = document.getElementById("quantity");
        const currentValue = parseInt(quantity.value);
        quantity.value = currentValue + 1;
        updatePrice();
    });

// Event listener for the add-to-basket button, when clicked, it will display an alert with the quantity of items added to the basket.
document.getElementById("add-to-basket").addEventListener("click", function () {
        const quantity = document.getElementById("quantity").value;
        alert("Added " + quantity + " item(s) to the basket.");
    });