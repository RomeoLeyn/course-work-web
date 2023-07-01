document.querySelector('#modal-body-info').addEventListener('submit', function (event) {
  event.preventDefault(); // Зупиняємо стандартну поведінку форми


  const name = document.getElementById('product-name').value;
  const model = document.getElementById('product-model').value;
  const typeConnect = document.getElementById('product-connect').value;
  const interface = document.getElementById('product-interface').value;
  const maxSpeed = document.getElementById('product-speed').value;
  const productSize = document.getElementById('product-size').value;
  const productPrice = document.getElementById('product-price').value;

  fetch('http://localhost:3000/js/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      model: model,
      typeConnect: typeConnect,
      interface: interface,
      maxSpeed: maxSpeed,
      productSize: productSize,
      productPrice: productPrice
    })
  })
    .then(response => {
      if (response.ok) {
        console.log('Product card successfully');
      } else {
        console.error('Error creating product card');
      }
    })
    .catch(error => {
      console.error('Error creating product card:', error);
    });
});


// Запит до сервера для додавання карточки товару на сторінку стара версія
// async function getCard() {
//   let response = await fetch('http://localhost:3000/js/product');
//   let products = await response.json();

//   let productContainer = document.querySelector('#product-container');

//   products.forEach((product) => {
//     // HTML-код карточки товару
//     let productCardHTML = `
//         <div class="col-lg-4 col-sm-6">
//             <div class="product-card">
//           <div class="product-img">
//             <a href="#"><img src="images/router2.jpg" alt="router"></a>
//           </div>
//           <div class="product-details">
//             <a href="#">
//               <h4>${product.name}</h4>
//             </a>
//             <p>Модель: ${product.model}</p>
//             <p>Тип підключення: ${product.typeConnect}</p>
//             <p>Інтерфейс підключення: ${product.interface}</p>
//             <p>Максимальна швидкість: ${product.maxSpeed}</p>
//             <p>Розміри: ${product.productSize}</p>
//             <div class="product-bottom-details d-flex justify-content-between">
//               <div class="prodcut-price">
//                 <small></small> <span class="product-event-price">${product.productPrice}$</span>
//               </div>
//               <div class="product-links">
//                 <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
//                <button class="delete-card-button" onclick="removeProduct('${product._id}')"><i class="fa-solid fa-dumpster"></i></button> 
//                </div>
//                </div>
//                </div>
//                </div>
//                </div> 
//                `;

//     // Додавання HTML-коду карточки товару до контейнера
//     productContainer.innerHTML += productCardHTML;
//   });
// }
// getCard();




// Оновлення функції getCard() для використання пагінації
// async function getCard(page = 1, limit = 6) {
//   try {
//     const response = await fetch(`http://localhost:3000/js/products?page=${page}&limit=${limit}`);
//     const data = await response.json();

//     const { products, totalPages, currentPage } = data;

//     let productContainer = document.querySelector('#product-container');
//     productContainer.innerHTML = ''; // Очистити контейнер перед виведенням нових товарів

//     products.forEach((product) => {
//       // HTML-код карточки товару
//       let productCardHTML = `
//           <div class="col-lg-4 col-sm-6">
//               <div class="product-card">
//             <div class="product-img">
//               <a href="#"><img src="images/router2.jpg" alt="router"></a>
//             </div>
//             <div class="product-details">
//               <a href="#">
//                 <h4>${product.name}</h4>
//               </a>
//               <p>Модель: ${product.model}</p>
//               <p>Тип підключення: ${product.typeConnect}</p>
//               <p>Інтерфейс підключення: ${product.interface}</p>
//               <p>Максимальна швидкість: ${product.maxSpeed}</p>
//               <p>Розміри: ${product.productSize}</p>
//               <div class="product-bottom-details d-flex justify-content-between">
//                 <div class="prodcut-price">
//                   <small></small> <span class="product-event-price">${product.productPrice}$</span>
//                 </div>
//                 <div class="product-links">
//                   <a clas="add-to-cart" onclick="addToCart('${product._id}')"><i class="fa-solid fa-cart-shopping"></i></a>
//                  <button class="delete-card-button" onclick="removeProduct('${product._id}')"><i class="fa-solid fa-dumpster"></i></button> 
//                  </div>
//                  </div>
//                  </div>
//                  </div>
//                  </div> 
//                  `;

//       // Додавання HTML-коду карточки товару до контейнера
//       productContainer.innerHTML += productCardHTML;


//     });

//     if (localStorage.getItem('currentUser')) {
//       const parsedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
//       if (parsedCurrentUser.isAdmin) {
//         const deleteButtons = document.querySelectorAll('.delete-card-button');
//         deleteButtons.forEach((button) => {
//           button.style.display = 'block';
//         });
//       }
//     }

//     // Оновлення HTML-розмітки для посилань на сторінки
//     let paginationContainer = document.querySelector('#pagination-container');
//     paginationContainer.innerHTML = '';

//     for (let i = 1; i <= totalPages; i++) {
//       const isActive = i === currentPage ? 'active' : '';
//       const pageLinkHTML = `<a class="${isActive} next-page-button" href="#" onclick="getCard(${i}, ${limit})">${i}</a>`;
//       paginationContainer.innerHTML += pageLinkHTML;

//     }
//   } catch (error) {
//     console.error('Error retrieving products:', error);
//   }
// }

// // Виклик функції для отримання товарів на початку завантаження сторінки
// getCard();



async function getCard(page = 1, limit = 6, searchQuery = '') {
  try {
    let url = `http://localhost:3000/js/product?page=${page}&limit=${limit}`;
    if (searchQuery) {
      url += `&query=${searchQuery}`;
    }

    const response = await fetch(url);
    const data = await response.json();

    const { products, totalPages, currentPage } = data;

    let productContainer = document.querySelector('#product-container');
    productContainer.innerHTML = '';

    products.forEach((product) => {
      let productCardHTML = `
          <div class="col-lg-4 col-sm-6">
               <div class="product-card">
             <div class="product-img">
               <a href="#"><img src="images/router2.jpg" alt="router"></a>
             </div>
             <div class="product-details">
               <a href="#">
                 <h4 id="name-product">${product.name}</h4>
               </a>
               <p>Модель: <span id="model-product">${product.model}</span></p>
               <p>Тип підключення: ${product.typeConnect}</p>
               <p>Інтерфейс підключення: ${product.interface}</p>
               <p>Максимальна швидкість: <span class="product-speed">${product.maxSpeed}</span></p>
               <p>Розміри: <span class="product-size">${product.productSize}</span></p>
               <div class="product-bottom-details d-flex justify-content-between">
                 <div class="prodcut-price">
                   <small></small> <span class="product-event-price">${product.productPrice}$</span>
                 </div>
                 <div class="product-links">
                   <button clas="add-to-cart" onclick="addToCart('${product._id}')" style="border: 0; background-color: white;"><i class="fa-solid fa-cart-shopping"></i></button>
                  <button class="delete-card-button" onclick="removeProduct('${product._id}')"><i class="fa-solid fa-dumpster"></i></button> 
                  </div>
                  </div>
                  </div>
                  </div>
                  </div> 
                  `;
      productContainer.innerHTML += productCardHTML;
    });

    if (localStorage.getItem('currentUser')) {
            const parsedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (parsedCurrentUser.isAdmin) {
              const deleteButtons = document.querySelectorAll('.delete-card-button');
              deleteButtons.forEach((button) => {
                button.style.display = 'block';
              });
            }
          }

    let paginationContainer = document.querySelector('#pagination-container');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage ? 'active' : '';
      const pageLinkHTML = `<a class="${isActive} next-page-button" href="#" onclick="getCard(${i}, ${limit}, '${searchQuery}')">${i}</a>`;
      paginationContainer.innerHTML += pageLinkHTML;
    }
  } catch (error) {
    console.error('Error retrieving products:', error);
  }
}

function searchProducts(event) {
  event.preventDefault();

  const searchQuery = document.getElementById('search-for-card').value;
  getCard(1, 6, searchQuery);
}

getCard();