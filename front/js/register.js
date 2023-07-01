document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми
    const loginInput = document.querySelector('#login').value;
    const emailInput = document.querySelector('#email').value;
    const passwordInput = document.querySelector('#password').value;

    console.log(loginInput);
    console.log(emailInput);
    console.log(passwordInput);

    fetch('http://localhost:3000/js/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: loginInput,
            email: emailInput,
            password: passwordInput
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('User created successfully');
                window.location.href = "main.html";
            } else {
                console.error('Error creating user');
            }
        })
        .catch(error => {
            console.error('Error creating user:', error);
        });
});