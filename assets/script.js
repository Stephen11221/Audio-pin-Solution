const timeoutId = setTimeout(() => {
    window.location.href = "home.html"; // Redirect to the home page
}, 8000);

// Stop the redirection
clearTimeout(timeoutId);
