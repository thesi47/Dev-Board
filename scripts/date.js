const dateElement = document.getElementById("date");

const d = new Date();

// Format parts
const weekday = d.toLocaleDateString('en-US', { weekday: 'short' });
const month = d.toLocaleDateString('en-US', { month: 'short' });
const day = d.getDate();
const year = d.getFullYear();

// Set HTML
dateElement.innerHTML = `${weekday} , <br><span class="font-bold">${month} ${day} ${year}</span>`;
