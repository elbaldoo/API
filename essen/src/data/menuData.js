// import croquetas from "../img/croquetas.png";
// import ensaladaCesar from "../img/ensaladaCesar.png";
// import entrecot from "../img/entrecot.jpeg";
// import tiramisu from "../img/tiramisu.jpeg";
// import coulant from "../img/coulant.jpeg";
// import sorbete from "../img/sorbete.jpeg";
// import risotto from "../img/rissoto.png";
// import curry from "../img/curry.jpeg";
// import bbq from "../img/bbq.jpeg";
// import lasagna from "../img/lasagna.jpeg";
// import solomillo from "../img/solomillo.png";
// import caprese from "../img/caprese.jpeg";
// import quesos from "../img/quesos.jpeg";
// import carpaccioPulpo from "../img/carpaccioPulpo.jpeg";
// import provoleta from "../img/provoleta.jpeg";
// import quinoa from "../img/quinoa.jpeg";
// import tagliatelle from "../img/tagliatelle.png";
// import agua from "../img/agua.jpeg";
// import sangria from "../img/sangria.jpeg";
// import refresco from "../img/refresco.jpeg";
// import zumonaranja from "../img/zumo_naranja.jpeg";
// import coctel from "../img/coctel_del_dia.jpeg";
// import cerveza from "../img/cerveza.jpeg";
// import vino from "../img/vino.jpeg";
// import vinoblanco from "../img/vino_blanco.jpeg";
// import limonada from "../img/limonada.jpeg";
// import salmonteri from "../img/salom_teriyaki.jpeg";
// import pulpobrasa from "../img/pulpo_brasa.jpeg";
// import lubina from "../img/lubina.jpeg";
// import pechugapollo from "../img/pechuga_pollo.jpeg";
// import confit from "../img/confit_pato.jpeg";
// import cremacatalana from "../img/cremacatalana.jpeg";

// export const menuData = [
//   {
//     id: "entrantes",
//     name: "Entrantes",
//     dishes: [
//       {
//         id: "entrante1",
//         name: "Croquetas Caseras",
//         description: "Croquetas cremosas de jamón ibérico con panko crujiente",
//         ingredients: ["Jamón ibérico", "Leche", "Harina", "Mantequilla", "Panko", "Huevo"],
//         allergens: ["gluten", "lacteos", "huevos"],
//         price: 8.5,
//         image: croquetas,
//       },
//       {
//         id: "entrante2",
//         name: "Tabla de Quesos",
//         description: "Selección de quesos nacionales e internacionales con mermelada casera y frutos secos",
//         ingredients: ["Queso manchego", "Queso azul", "Queso de cabra", "Mermelada de higos", "Nueces", "Almendras"],
//         allergens: ["lacteos", "frutos_secos"],
//         price: 14.0,
//         image: quesos,
//       },
//       {
//         id: "entrante3",
//         name: "Carpaccio de Pulpo",
//         description: "Finas láminas de pulpo con aceite de oliva virgen extra, pimentón y sal marina",
//         ingredients: ["Pulpo", "Aceite de oliva", "Pimentón", "Sal marina", "Perejil"],
//         allergens: ["moluscos"],
//         price: 16.5,
//         image: carpaccioPulpo,
//       },
//       {
//         id: "entrante4",
//         name: "Provoleta Grillada",
//         description: "Queso provolone fundido con tomates cherry y orégano fresco",
//         ingredients: ["Queso provolone", "Tomates cherry", "Orégano", "Aceite de oliva"],
//         allergens: ["lacteos"],
//         price: 9.75,
//         image: provoleta,
//       },
//     ],
//   },
//   {
//     id: "ensaladas",
//     name: "Ensaladas",
//     dishes: [
//       {
//         id: "ensalada1",
//         name: "Ensalada César",
//         description: "Lechuga romana, pollo a la parrilla, crutones, queso parmesano y aderezo César",
//         ingredients: ["Lechuga romana", "Pollo", "Pan", "Queso parmesano", "Salsa César", "Anchoas"],
//         allergens: ["gluten", "lacteos", "pescado", "huevos"],
//         price: 12.5,
//         image: ensaladaCesar,
//       },
//       {
//         id: "ensalada2",
//         name: "Ensalada de Quinoa",
//         description: "Quinoa con aguacate, tomate, pepino, cebolla roja y vinagreta de limón",
//         ingredients: ["Quinoa", "Aguacate", "Tomate", "Pepino", "Cebolla roja", "Limón", "Aceite de oliva"],
//         allergens: [],
//         price: 11.0,
//         image: quinoa,
//       },
//       {
//         id: "ensalada3",
//         name: "Ensalada Caprese",
//         description: "Tomate, mozzarella fresca, albahaca y reducción de balsámico",
//         ingredients: ["Tomate", "Mozzarella", "Albahaca", "Vinagre balsámico", "Aceite de oliva"],
//         allergens: ["lacteos"],
//         price: 10.5,
//         image: caprese,
//       },
//     ],
//   },
//   {
//     id: "principales",
//     name: "Platos Principales",
//     subcategories: [
//       {
//         id: "carnes_rojas",
//         name: "Carnes Rojas",
//         dishes: [
//           {
//             id: "carne1",
//             name: "Entrecot de Ternera",
//             description: "Entrecot de ternera madurada con patatas asadas y chimichurri casero",
//             ingredients: ["Entrecot de ternera", "Patatas", "Perejil", "Ajo", "Aceite de oliva", "Vinagre"],
//             allergens: [],
//             price: 24.5,
//             image: entrecot,
//           },
//           {
//             id: "carne2",
//             name: "Solomillo al Foie",
//             description: "Solomillo de ternera con escalopa de foie y reducción de Pedro Ximénez",
//             ingredients: ["Solomillo de ternera", "Foie gras", "Vino Pedro Ximénez", "Mantequilla"],
//             allergens: ["lacteos"],
//             price: 28.0,
//             image: solomillo,
//           },
//           {
//             id: "carne3",
//             name: "Costillas BBQ",
//             description: "Costillas de cerdo cocinadas a baja temperatura con salsa barbacoa casera",
//             ingredients: ["Costillas de cerdo", "Salsa barbacoa", "Miel", "Especias"],
//             allergens: ["mostaza", "sulfitos"],
//             price: 19.75,
//             image: bbq,
//           },
//         ],
//       },
//       {
//         id: "carnes_blancas",
//         name: "Carnes Blancas",
//         dishes: [
//           {
//             id: "blanca1",
//             name: "Pollo al Curry",
//             description: "Pechuga de pollo con salsa de curry, leche de coco y arroz basmati",
//             ingredients: ["Pollo", "Curry", "Leche de coco", "Cebolla", "Arroz basmati"],
//             allergens: [],
//             price: 16.5,
//             image: curry,
//           },
//           {
//             id: "blanca2",
//             name: "Confit de Pato",
//             description: "Confit de pato con puré de manzana y salsa de naranja",
//             ingredients: ["Muslo de pato", "Manzana", "Naranja", "Mantequilla", "Tomillo"],
//             allergens: ["lacteos"],
//             price: 22.0,
//             image: confit,
//           },
//           {
//             id: "blanca3",
//             name: "Pechuga de Pavo Rellena",
//             description: "Pechuga de pavo rellena de espinacas y queso de cabra con salsa de mostaza",
//             ingredients: ["Pechuga de pavo", "Espinacas", "Queso de cabra", "Mostaza", "Nata"],
//             allergens: ["lacteos", "mostaza"],
//             price: 18.5,
//             image: pechugapollo,
//           },
//         ],
//       },
//       {
//         id: "pescados",
//         name: "Pescados",
//         dishes: [
//           {
//             id: "pescado1",
//             name: "Lubina a la Sal",
//             description: "Lubina entera cocinada en costra de sal con verduras salteadas",
//             ingredients: ["Lubina", "Sal marina", "Verduras de temporada", "Aceite de oliva", "Limón"],
//             allergens: ["pescado"],
//             price: 23.0,
//             image: lubina,
//           },
//           {
//             id: "pescado2",
//             name: "Salmón Teriyaki",
//             description: "Filete de salmón glaseado con salsa teriyaki y wok de verduras",
//             ingredients: ["Salmón", "Salsa teriyaki", "Sésamo", "Verduras", "Jengibre"],
//             allergens: ["pescado", "soja", "sesamo"],
//             price: 19.5,
//             image: salmonteri,
//           },
//           {
//             id: "pescado3",
//             name: "Pulpo a la Brasa",
//             description: "Tentáculo de pulpo a la brasa con parmentier de patata y pimentón",
//             ingredients: ["Pulpo", "Patata", "Pimentón", "Aceite de oliva", "Sal marina"],
//             allergens: ["moluscos"],
//             price: 25.75,
//             image: pulpobrasa,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: "pastas",
//     name: "Pastas",
//     dishes: [
//       {
//         id: "pasta1",
//         name: "Tagliatelle al Tartufo",
//         description: "Tagliatelle con crema de trufa negra y láminas de parmesano",
//         ingredients: ["Tagliatelle", "Trufa negra", "Nata", "Queso parmesano", "Mantequilla"],
//         allergens: ["gluten", "lacteos", "huevos"],
//         price: 17.5,
//         image: tagliatelle,
//       },
//       {
//         id: "pasta2",
//         name: "Risotto de Setas",
//         description: "Risotto cremoso con variedad de setas silvestres y queso parmesano",
//         ingredients: ["Arroz arborio", "Setas silvestres", "Cebolla", "Vino blanco", "Queso parmesano"],
//         allergens: ["lacteos", "sulfitos"],
//         price: 16.0,
//         image: risotto,
//       },
//       {
//         id: "pasta3",
//         name: "Lasaña de Verduras",
//         description: "Lasaña casera de verduras asadas con bechamel y queso gratinado",
//         ingredients: ["Pasta de lasaña", "Berenjena", "Calabacín", "Pimiento", "Bechamel", "Queso"],
//         allergens: ["gluten", "lacteos", "huevos"],
//         price: 14.5,
//         image: lasagna,
//       },
//     ],
//   },
//   {
//     id: "postres",
//     name: "Postres",
//     dishes: [
//       {
//         id: "postre1",
//         name: "Tiramisú",
//         description: "Clásico tiramisú italiano con café, mascarpone y cacao",
//         ingredients: ["Bizcochos", "Café", "Queso mascarpone", "Huevos", "Cacao"],
//         allergens: ["gluten", "lacteos", "huevos"],
//         price: 7.5,
//         image: tiramisu,

//       },
//       {
//         id: "postre2",
//         name: "Coulant de Chocolate",
//         description: "Bizcocho de chocolate con corazón fundido y helado de vainilla",
//         ingredients: ["Chocolate", "Huevos", "Mantequilla", "Harina", "Helado de vainilla"],
//         allergens: ["gluten", "lacteos", "huevos"],
//         price: 8.0,
//         image : coulant
//       },
//       {
//         id: "postre3",
//         name: "Crema Catalana",
//         description: "Crema catalana tradicional con azúcar caramelizado",
//         ingredients: ["Leche", "Huevos", "Azúcar", "Canela", "Limón"],
//         allergens: ["lacteos", "huevos"],
//         price: 6.5,
//         image: cremacatalana,
//       },
//       {
//         id: "postre4",
//         name: "Sorbete de Limón",
//         description: "Refrescante sorbete de limón con cava",
//         ingredients: ["Limón", "Azúcar", "Cava"],
//         allergens: ["sulfitos"],
//         price: 5.75,
//         image: sorbete,
//       },
//     ],
//   },
//   {
//     id: "bebidas_sin",
//     name: "Bebidas sin Alcohol",
//     dishes: [
//       {
//         id: "bebida1",
//         name: "Agua Mineral",
//         description: "Agua mineral con o sin gas",
//         ingredients: ["Agua"],
//         allergens: [],
//         price: 2.5,
//         image: agua,
//       },
//       {
//         id: "bebida2",
//         name: "Refrescos",
//         description: "Variedad de refrescos (cola, naranja, limón)",
//         ingredients: ["Según selección"],
//         allergens: [],
//         price: 3.0,
//         image: refresco,
//       },
//       {
//         id: "bebida3",
//         name: "Zumo Natural",
//         description: "Zumo natural de naranja recién exprimido",
//         ingredients: ["Naranja"],
//         allergens: [],
//         price: 4.5,
//         image: zumonaranja,
//       },
//       {
//         id: "bebida4",
//         name: "Limonada Casera",
//         description: "Limonada casera con menta y jengibre",
//         ingredients: ["Limón", "Azúcar", "Menta", "Jengibre"],
//         allergens: [],
//         price: 4.0,
//         image: limonada,
//       },
//     ],
//   },
//   {
//     id: "bebidas_con",
//     name: "Bebidas con Alcohol",
//     dishes: [
//       {
//         id: "alcohol1",
//         name: "Vino Tinto",
//         description: "Copa de vino tinto Rioja Crianza",
//         ingredients: ["Uva tempranillo"],
//         allergens: ["sulfitos"],
//         price: 4.5,
//         image: vino,
//       },
//       {
//         id: "alcohol2",
//         name: "Vino Blanco",
//         description: "Copa de vino blanco Albariño",
//         ingredients: ["Uva albariño"],
//         allergens: ["sulfitos"],
//         price: 4.5,
//         image: vinoblanco,
//       },
//       {
//         id: "alcohol3",
//         name: "Cerveza Artesanal",
//         description: "Cerveza artesanal local",
//         ingredients: ["Cebada", "Lúpulo", "Levadura", "Agua"],
//         allergens: ["gluten"],
//         price: 5.0,
//         image: cerveza,
//       },
//       {
//         id: "alcohol4",
//         name: "Sangría",
//         description: "Sangría casera con frutas frescas",
//         ingredients: ["Vino tinto", "Frutas", "Azúcar", "Licor"],
//         allergens: ["sulfitos"],
//         price: 6.5,
//         image: sangria,
//       },
//       {
//         id: "alcohol5",
//         name: "Cóctel del Día",
//         description: "Cóctel especial del día (consultar con el camarero)",
//         ingredients: ["Según cóctel"],
//         allergens: ["Consultar"],
//         price: 9.0,
//         image: coctel,
//       },
//     ],
//   },
// ]
