// 1. Create an array containing multiple pieces of content
const techSkills = [
    "HTML5 & Semantic Structure",
    "CSS Flexbox & Grid",
    "JavaScript ES6+",
    "DOM Manipulation",
    "Git & GitHub Version Control"
];

// 2. Select the empty <ul> element from the HTML
const listContainer = document.getElementById('dynamic-list');

// 3. Iterate through the array using forEach
techSkills.forEach((skill) => {
    // Create a brand new <li> element in the computer's memory
    const listItem = document.createElement('li');
    
    // Set the text of that <li> to the current array item
    listItem.textContent = skill;
    
    // Inject the finished <li> into the <ul> on the page
    listContainer.appendChild(listItem);
});