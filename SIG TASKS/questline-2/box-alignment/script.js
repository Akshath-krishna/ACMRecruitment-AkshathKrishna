// Grab the HTML elements
const boxContainer = document.getElementById('box-container');
const btnHorizontal = document.getElementById('btn-horizontal');
const btnVertical = document.getElementById('btn-vertical');

// Event listener for the Horizontal button
btnHorizontal.addEventListener('click', () => {
    boxContainer.classList.remove('vertical');
    boxContainer.classList.add('horizontal');
});

// Event listener for the Vertical button
btnVertical.addEventListener('click', () => {
    boxContainer.classList.remove('horizontal');
    boxContainer.classList.add('vertical');
});