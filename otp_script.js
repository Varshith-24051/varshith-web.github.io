const generatedOTPElement = document.getElementById('generatedOTP');
const otpInput = document.getElementById('otpInput');
const verifyOTPBtn = document.getElementById('verifyOTPBtn');
const otpMessage = document.getElementById('otpMessage');
const goHomeBtn = document.getElementById('goHomeBtn');

let generatedOTP = '';

// Function to generate a random OTP
function generateOTP(length = 6) {
    const characters = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return otp;
}

// Generate and display the OTP when the page loads
window.onload = () => {
    generatedOTP = generateOTP();
    generatedOTPElement.textContent = generatedOTP;
};

// Event listener for verifying the OTP
verifyOTPBtn.addEventListener('click', () => {
    const enteredOTP = otpInput.value;
    if (enteredOTP === generatedOTP) {
        otpMessage.textContent = 'Successfully logged in!';
        otpMessage.className = 'message success';
        goHomeBtn.style.display = 'block'; // Show the "Go to Home" button
        setTimeout(() => {
            window.location.href = '#home'; // Redirect to your home page URL
        }, 1500);
    } else {
        otpMessage.textContent = 'Incorrect OTP. Please try again.';
        otpMessage.className = 'message error';
    }
});

// Event listener for the "Go to Home" button
goHomeBtn.addEventListener('click', () => {
    window.location.href = '#home'; // Redirect to your home page URL
});