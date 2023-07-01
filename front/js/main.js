const loginForm = document.getElementById('log-in-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    const adm = new Admin(username, password);

    if (adm.checkLoginAdm()) {
        if (adm.checkPasswordAdm()) {
            window.location.href = "main.html";
            localStorage.setItem('currentUser', JSON.stringify({ isAdmin: true }));
        }
    }
});

// Очищує localeStorage від логіну адміністратора та юзера 
function clearLocaleStorageForLogIn() {
    localStorage.clear();
}