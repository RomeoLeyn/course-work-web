async function removeProduct(a) {
    console.log(a);
    await fetch(`https://connectworld-y3h1.onrender.com/js/deleteProduct/${a}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({_id: a})
    })
        .then(response => {
            if (response.ok) {
                console.log('Карточка товару успішно видалена з бази даних');
            } else {
                console.error('Помилка при видаленні карточки з бази даних');
            }
        })
        .catch(error => {
            console.error('Помилка під час виконання запиту:', error);
        });
}                       