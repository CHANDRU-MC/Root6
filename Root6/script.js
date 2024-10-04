// script.js

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    const isNavbarOpen = navbar.style.display === 'block';
    navbar.style.display = isNavbarOpen ? 'none' : 'block';
}

function changeLanguage() {
    const language = document.getElementById('languageSwitcher').value;
    const elements = document.querySelectorAll('[data-lang-en]');

    elements.forEach(element => {
        const text = element.getAttribute(`data-lang-${language}`);
        if (text) {
            element.textContent = text;
        }
    });
}

function toggleData() {
    const dataContent = document.getElementById('data-content');
    const isDataVisible = dataContent.style.display === 'block';
    dataContent.style.display = isDataVisible ? 'none' : 'block';
}