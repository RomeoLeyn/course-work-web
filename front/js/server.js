// const express = require('express');
// const mongoose = require('mongoose');
// const { createServer } = require('http');
// const bodyParser = require('body-parser');
// const cors = require('cors');


// const app = express();

// // дозвіл cors запитів 
// app.use(cors());

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // порт підключення
// const PORT = 3000;

// // підключення до бази даних
// mongoose.connect('mongodb+srv://roma:rMykU9UJb6kqiNhd@cluster0.uwmhhz3.mongodb.net/user?retryWrites=true&w=majority', { useNewUrlParser: true, })
//     .then(() => console.log('MongoDB connect'))
//     .catch((err) => console.log(err))
// // підключення до бази даних

// // user схема
// const userSchema = new mongoose.Schema(
//     {
//         login: {
//             type: String,
//             required: true,
//         },
//         email: {
//             type: String,
//             required: true,
//         },
//         password: {
//             type: String,
//             required: true,
//         }
//     }
// )
// const User = mongoose.model('User', userSchema);
// // user схема



// // Додавання юзера в базу даних
// app.post('/js/register', (req, res) => {

//     const { login, email, password } = req.body;

//     User.create({
//         login: login,
//         email: email,
//         password: password
//     })
//         .then((user) => { res.send(user) })
//         .catch((err) => { res.send(err) });
//     //  mongoose.disconnect();
// });
// // Додавання юзера в базу даних


// // запити на пошук юзерsв базі даних
// app.post('/js/log_in', (req, res) => {
//     const { login, password } = req.body;

//     User.findOne({ login, password })
//         .exec()
//         .then((user) => {
//             if (user) {
//                 console.log('Успішний вхід користувача:', user);
//                 res.send(user);
//             } else {
//                 console.log('Користувача з такими даними не знайдено');
//                 res.status(404).send('Користувача з такими даними не знайдено');
//             }
//         })
//         .catch((err) => {
//             console.log('Помилка при вході користувача:', err);
//             res.status(500).send(err);
//         });
// });
// // запити на пошук юзерsв базі даних


// // Схема карточки товару
// const prodcutSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//         },
//         model: {
//             type: String,
//             required: true,
//         },
//         typeConnect: {
//             type: String,
//             required: true,
//         },
//         interface: {
//             type: String,
//             required: true,
//         },
//         maxSpeed: {
//             type: String,
//             required: true,
//         },
//         productSize: {
//             type: String,
//             required: true,
//         },
//         productPrice: {
//             type: String,
//             required: true,
//         }
//     }
// )
// const Product = mongoose.model('Product', prodcutSchema);

// // додавання карточки товару в базу даних
// app.post('/js/product', (req, res) => {
//     // console.log("Початок занесення даних");
//     const { name, model, typeConnect, interface, maxSpeed, productSize, productPrice } = req.body;
//     Product.create({
//         name: name,
//         model: model,
//         typeConnect: typeConnect,
//         interface: interface,
//         maxSpeed: maxSpeed,
//         productSize: productSize,
//         productPrice: productPrice
//     })
//         .then((product) => { res.send(product) })
//         .catch((err) => { res.send(err) });
// });



// // Запит виводу даних на сторінку РОБОЧИЙ ЗАПИТ
// // app.get('/js/product', (req, res) => {
// //     Product.find()
// //         .then((products) => {
// //             console.log('Отримано дані про товари:', products);
// //             res.send(products);
// //         })
// //         .catch((err) => {
// //             console.log('Помилка при отриманні даних про товари:', err);
// //             res.status(500).send(err);
// //         });
// // });


// // РОБОЧИЙ КОД
// // ЗАПИТ НА ВИВІД ДАНИХ ТА ПАГІНАЦІЮ 
// // app.get('/js/products', async (req, res) => {
// //     const page = parseInt(req.query.page) || 1; // Номер поточної сторінки (за замовчуванням 1)
// //     const limit = parseInt(req.query.limit) || 6; // Кількість товарів на сторінці (за замовчуванням 10)

// //     try {
// //         const totalCount = await Product.countDocuments(); // Отримання загальної кількості товарів у базі даних
// //         const totalPages = Math.ceil(totalCount / limit); // Обчислення загальної кількості сторінок

// //         const products = await Product.find()
// //             .skip((page - 1) * limit)
// //             .limit(limit); // Отримання обмеженого списку товарів для поточної сторінки

// //         res.json({
// //             products,
// //             totalPages,
// //             currentPage: page
// //         });
// //     } catch (error) {
// //         res.status(500).json({ error: 'Internal server error' });
// //     }
// // });
// // РОБОЧИЙ КОД

// // ТИМАЧАСОВИЙ КОД
// app.get('/js/product', async (req, res) => {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 6;
//     const searchQuery = req.query.query;
  
//     try {
//       let query = {};
//       if (searchQuery) {
//         query = { model: { $regex: searchQuery, $options: 'i' } };
//       }
  
//       const totalCount = await Product.countDocuments(query);
//       const totalPages = Math.ceil(totalCount / limit);
  
//       const products = await Product.find(query)
//         .skip((page - 1) * limit)
//         .limit(limit);
  
//       res.json({
//         products,
//         totalPages,
//         currentPage: page
//       });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
//   // Функція пошуку товарів
//   app.get('/js/product', async (req, res) => {
//     const searchQuery = req.query.query;
  
//     try {
//       const products = await Product.find({ model: { $regex: searchQuery, $options: 'i' } });
//       res.json({ products });
//     } catch (error) {
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
// // ТИМЧАСОВИЙ КОД  


// // Видалення
// app.delete('/js/deleteProduct/:id', (req, res) => {
//     const id = req.params.id;

//     Product.findByIdAndDelete(id)
//         .then((deletedProduct) => {
//             if (deletedProduct) {
//                 console.log('Карточку товару успішно видалено');
//                 res.sendStatus(200);
//             } else {
//                 console.log('Карточка товару не знайдена');
//                 res.sendStatus(404);
//             }
//         })
//         .catch((err) => {
//             console.error('Помилка видалення карточки товару:', err);
//             res.sendStatus(500);
//         });
// });

// const server = createServer(app);
// server.listen(PORT, () => console.log(`server is up port: ${PORT}`));

// // Постійне підключення до сервера

// const startServer = () => {
//     if (!server.listening) {
//         server.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     }
// };

// const stopServer = () => {
//     server.close(() => {
//         console.log('Server has been stopped');
//         process.exit(0);
//     });
// };

// process.on('SIGINT', stopServer);
// process.on('SIGTERM', stopServer);

// startServer();