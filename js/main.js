// total cost update
function updateTotalCost() {
    // get mars travel cost
    const marsCost = parseInt(document.getElementById("mars-cost").innerText);
    // get moon travel cost
    const moonCost = parseInt(document.getElementById("moon-cost").innerText);
    // calculate total cost
    const totalCost = marsCost + moonCost;
    // call function to update UI
    updateUI("total", totalCost);
}
// update UI
function updateUI(destination, cost) {
    document.getElementById(destination + "-cost").innerText = cost;
}
// mars travel cost
function marsTravelCost(destination, quantity, marsTicketPriceCost) {
    // calculate mars travel cost
    const marsCost = quantity * marsTicketPriceCost;
    // call function to update UI
    updateUI(destination, marsCost);
}
// moon travel cost
function moonTravelCost(destination, quantity, moonTicketPriceCost) {
    // calculate moon travel cost
    const moonCost = quantity * moonTicketPriceCost;
    // call function to update UI
    updateUI(destination, moonCost);
}

// cost calculator
function calculateCost(destination, quantity) {
    if (destination == "mars") {
        // call function to calculate mars travel cost
        marsTravelCost(destination, quantity, 9000);
    }
    else if (destination == "moon") {
        // call function to calculate moon travel cost
        moonTravelCost(destination, quantity, 7000);
    }
    // call function to update total cost
    updateTotalCost();
}
// decrement 
function decrement(destination, quantity) {
    // ensure positive quantity
    if (quantity > 0) {
        // update individual quantity field
        document.getElementById(destination + "-quantity").value = quantity - 1;
        // call function to calculate individual field cost
        calculateCost(destination, quantity - 1);
    }
    else {
        // alert when user attempt to calculate negative values
        alert("You are trying to calculate negative values!!!");
    }
}
// increment
function increment(destination, quantity) {
    // update individual quantity field
    document.getElementById(destination + "-quantity").value = quantity + 1;
    // call function to calculate individual field cost
    calculateCost(destination, quantity + 1);
}
// quantity counter
function quantity(destination, increaseDecrease) {
    // get individual field quantity value
    const quantityInput = parseInt(document.getElementById(destination + "-quantity").value);
    if (increaseDecrease == "increase") {
        // call function to do incremental task
        increment(destination, quantityInput);
    }
    else if (increaseDecrease == "decrease") {
        // call function to do decremental task
        decrement(destination, quantityInput);
    }
}