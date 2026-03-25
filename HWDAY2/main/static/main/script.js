document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contactBtn");
    const thankYouMessage = document.getElementById("thankYouMessage");

    if (contactBtn && thankYouMessage) {
        contactBtn.addEventListener("click", function () {
            thankYouMessage.classList.add("show");
            
            // Optional: Hide the button after clicking
            contactBtn.style.display = "none";
        });
    }
});
