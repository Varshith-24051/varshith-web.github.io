function toggleBookingForm() {
  const bookingForm = document.getElementById("bookingForm");
  bookingForm.style.display = bookingForm.style.display === "block" ? "none" : "block";
}


document.addEventListener('DOMContentLoaded', function() {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const loginOverlay = document.getElementById('loginOverlay');
    const loginContainer = document.getElementById('loginContainer');
    const closeButton = loginContainer.querySelector('.close-button');

    openLoginBtn.addEventListener('click', function() {
        loginOverlay.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        loginOverlay.style.display = 'none';
    });

    loginOverlay.addEventListener('click', function(event) {
        if (event.target === loginOverlay) {
            loginOverlay.style.display = 'none';
        }
    });
});
