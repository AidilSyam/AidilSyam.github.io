// login.js

// Function to handle login process
function login(username, password) {
    // Check if the username and password match the expected values
    if (username === "admin" && password === "password") {
      console.log("Login successful!");
      // Perform further actions or redirect to another page
    } else {
      console.log("Invalid username or password. Please try again.");
    }
  }
  
  
  // Add event listener for login link click
  window.addEventListener("load", function(event) {
    event.preventDefault(); // Prevent default link behavior
  
    // Replace the content with login form
    const content = document.getElementById("content");
    content.innerHTML = `
      <div class="container">
        <h1>Login</h1>
        <form id="loginForm">
          <input type="text" id="username" placeholder="Username" required>
          <input type="password" id="password" placeholder="Password" required>
          <button type="submit">Login</button>
        </form>
      </div>
    `;
  
    // Get the login form element
    const loginForm = document.getElementById("loginForm");
  
    // Add event listener for form submission
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the username and password values
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Call the login function with the provided values
      login(username, password);
    });
  });
  