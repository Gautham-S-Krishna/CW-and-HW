// External JavaScript — script.js

/**
 * showMessage() is called when the button on the Home page is clicked.
 * It reveals a friendly message inside the page (no alert popup needed).
 */
function showMessage() {
    const messageBox = document.getElementById('messageBox');
    const btn = document.getElementById('greetBtn');

    if (messageBox.classList.contains('hidden')) {
        // Show the message
        messageBox.textContent = '👋 Hello! Thanks for clicking — Django + JS is a great combo!';
        messageBox.classList.remove('hidden');
        btn.textContent = '🙈 Hide Message';
    } else {
        // Hide the message
        messageBox.classList.add('hidden');
        btn.textContent = '✨ Click Me!';
    }
}
