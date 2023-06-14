// script.js

// Function to toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const cardContainers = document.querySelectorAll('.card-container');
    cardContainers.forEach((container) => {
      container.classList.toggle('dark-mode');
    });
  
    // Save the theme preference to localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  
    // Update the button text
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
  }
  
  // Retrieve the theme preference from localStorage and apply it
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    const cardContainers = document.querySelectorAll('.card-container');
    cardContainers.forEach((container) => {
      container.classList.add('dark-mode');
    });
  }
  
  // Update the button text based on the theme preference
  const themeToggleBtn = document.getElementById('theme-toggle');
  themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
  
  // Event listener for theme toggle button
  themeToggleBtn.addEventListener('click', toggleTheme);
  