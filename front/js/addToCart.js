// const { response } = require("express");

// function addToCart(id) {
//     let cartBody = document.querySelector('modal-body-cart');

//     fetch('http://localhost:3000/js/addToCart', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             _id: id
//         })
//             .then(response => {
//                 if (response.ok) {
//                     console.log('cart add successfully');
//                     window.location.href = "main.html";
//                 } else {
//                     console.error('Error add cart');
//                 }
//             })
//             .catch(error => {
//                 console.error('Error add cart:', error);
//             })
//     })

//     let infoOfProductInCartBody = `<table class="table">


//     <thead>
//         <tr>
//             <th scope="col">#</th>
//             <th scope="col"></th>
//             <th>Виробник/Модель</th>
//             <th scope="col">Тип (Wi Мережева карта GbE)</th>
//             <th scope="col">Максимальна швидкість з'єднання, Мбіт/с</th>
//             <th scope="col">Розміри, мм</th>
//         </tr>
//     </thead>

//     <tbody>
//         <tr>
//             <th scope="row"><input type="checkbox">1</th>
//             <td><img src="images/router2.jpg" alt=""></td>
//             <td>${product.name}</td>
//             <td> ${product.typeConnect}</td>
//             <td>${product.maxSpeed}</td>
//             <td>${product.productSize}</td>
//         </tr>

//     </tbody>
// </table>`


//     cartBody.innerHTML += infoOfProductInCartBody;
// }

function addToCart(id) {
    let cartBody = document.querySelector('.modal-body-cart');
    const modelProduct = document.getElementById('model-product').textContent;
    const priceProduct = document.querySelector('.product-event-price').textContent;
    const speedProduct = document.querySelector('.product-speed').textContent;
    const sizeProduct = document.querySelector('.product-size').textContent;

    let cartBlock = `
     <tbody>
     <table class="table">
             <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"></th>
                        <th>Виробник/Модель</th>
                        <th scope="col">Максимальна швидкість з'єднання, Мбіт/с</th>
                        <th scope="col">Розміри, мм</th>
                        <th scope="col">Ціна</th>
                      </tr>
            </thead>
         <tr>
             <th scope="row"><input type="checkbox"></th> 
             <td><img src="images/router2.jpg" alt=""></td>
             <td>${modelProduct}</td>
             <td> ${speedProduct}</td>
             <td> ${sizeProduct}</td>
             <td> ${priceProduct}</td>
         </tr>
     </tbody>
 </table>`


    cartBody.innerHTML += cartBlock;
}