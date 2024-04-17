// Remove the main#main node
const mainElement = document.querySelector('main#main');
if (mainElement) {
  mainElement.remove();
}

// Create a new header element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'John Doe is the champion'; // Replace 'John Doe' with your name

// Append the new header to the body
document.body.appendChild(newHeader);

// Write your code here!