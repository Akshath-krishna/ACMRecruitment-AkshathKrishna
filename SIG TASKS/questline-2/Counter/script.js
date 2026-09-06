// Set the initial counter value
let count = 0;

// Grab the HTML elements we need to interact with
const valueDisplay = document.getElementById('counter-value');
const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

// Add click event listeners to each button
btnIncrement.addEventListener('click', () => {
    count++;
    valueDisplay.textContent = count;
});

btnDecrement.addEventListener('click', () => {
    count--;
    valueDisplay.textContent = count;
});

btnReset.addEventListener('click', () => {
    count = 0;
    valueDisplay.textContent = count;
});