document.getElementById('password').addEventListener('input', function () {
    const password = this.value;
    const powerPoint = document.getElementById('power-point');
    const strengthText = document.getElementById('strength-text');
    let strength = 0;

    // Strength criteria
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[@$!%*?&#]/.test(password)) strength += 1;

    // Update class based on strength
    powerPoint.className = '';
    powerPoint.classList.add(`strength-${strength}`);

    // User feedback text
    switch (strength) {
        case 0:
            strengthText.textContent = '';
            break;
        case 1:
            strengthText.textContent = 'Very Weak';
            break;
        case 2:
            strengthText.textContent = 'Weak';
            break;
        case 3:
            strengthText.textContent = 'Medium';
            break;
        case 4:
            strengthText.textContent = 'Strong';
            break;
        case 5:
            strengthText.textContent = 'Very Strong';
            break;
    }
});

// Display the current date and year in the footer
document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('current-date').textContent = currentDate;

    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
});


