document.getElementById('log-in-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми

    const loginInput = document.querySelector('#username').value;
    const passwordInput = document.querySelector('#password').value;
    // Створення помилки про логін
    const errorP = document.getElementById("error-password");


    fetch('https://connectworld-y3h1.onrender.com/js/log_in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: loginInput,
            password: passwordInput
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('User log in');

                const currentUser = {
                    login: loginInput,
                    password: passwordInput,
                    loggedInTime: new Date().getTime() + 5000 // Залогінений на 5 хвилин
                };

                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                window.location.href = "main.html";
            } else {
                console.error('Error log in user');

                // Якщо юзера не знайдемо то появляється помилка про логін
                if (!errorP) {
                    errorP = document.createElement("p");
                    errorP.textContent = "Невірний пароль або логін!";
                    errorP.style.color = "red";
                    document.getElementById("form-password-error").appendChild(errorP);
                } else {
                    errorP.textContent = "Невірний пароль або логін!";
                }

            }
        })
        .catch(error => {
            console.error('Error log in user:', error);
        });
});


document.addEventListener('DOMContentLoaded', function () {
    const currentUser = localStorage.getItem('currentUser');

    if (currentUser) {
        const parsedCurrentUser = JSON.parse(currentUser);
        const currentTime = new Date().getTime();

        if (parsedCurrentUser.loggedInTime && parsedCurrentUser.loggedInTime > currentTime) {
            // Користувач залогінований
            console.log('User is logged in');

        } else {
            // Термін сесії минув, виконайте вихід користувача або необхідні дії
            console.log('User session expired');
        }
    } else {
        // Користувач не залогінований
        console.log('User is not logged in');
    }
});
