// Function to download the resume
function downloadResume() {
    window.location.href = 'assets/this.resume(1).pdf'; // Update with actual path to your resume
}
function showSkillDetails(skill) {
    alert(`You clicked on ${skill}. Detailed information will be available soon.`);
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

// Optionally, save the theme preference in local storage
document.addEventListener('DOMContentLoaded', (event) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateThemeIcon();
    }
});

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light-theme');
    } else {
        localStorage.removeItem('theme');
    }
    updateThemeIcon();
}
function updateThemeIcon() {
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}
function downloadResume() {
    window.location.href = 'assets/this.resume(1).pdf';
}