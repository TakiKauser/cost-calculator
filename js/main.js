// decrement 
function decrement(destination, quantity){
    const quantityInput = parseInt(document.getElementById(destination + "-quantity").value);
    if (quantityInput > 0){
        document.getElementById(destination + "-quantity").value = quantity - 1;
    }
}
// increment
function increment(destination, quantity){
    const quantityInput = parseInt(document.getElementById(destination + "-quantity").value);
    document.getElementById(destination + "-quantity").value = quantity + 1;
}
// quantity counter
function quantity(destination, increaseDecrease){
    const quantityInput = parseInt(document.getElementById(destination + "-quantity").value);
    if (increaseDecrease == "increase"){
        increment(destination, quantityInput);
    }
    else if (increaseDecrease == "decrease"){
        decrement(destination, quantityInput);
    }
}