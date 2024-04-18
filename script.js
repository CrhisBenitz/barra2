// Initialize sales count to zero
let salesCount = 0;

// Function to register a sale
function registerSale() {
    salesCount++;
    updateSalesCount();
}

// Function to reset sales count
function resetSales() {
    salesCount = 0;
    updateSalesCount();
}

// Function to update the sales count displayed on the page
function updateSalesCount() {
    document.getElementById('sales-count').innerText = salesCount;
}

// Initialize sales count display when the page loads
window.onload = function() {
    updateSalesCount();
};
