const userLogo = document.getElementById('usuario_logo');
const dropdown = document.getElementById('dropdown-menu');

userLogo.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('show');
});

window.addEventListener('click', (e) => {
    if (!userLogo.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
    }
});