// itar - for(i)
// iter - for(of)

// task 1.1
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let j = 0; j < 10; j++) {
    document.write(`<div><h4 style="margin: 0"> Block with task 1.1. 10 pcs! </h4></div>`)
}

// task 1.2
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div><h4 style="margin: 0"> Block with task 1.1. Index - ${i} </h4></div>`)
}


//----------------------------------------Додатково----------------------------------------------
//----------------------------------------Цікаве рішення-----------------------------------------
document.write(`<div> <h3>Task 1.1.</h3>`)
document.write(`<div style="display: flex">`);
let colors1 = ['yellow', 'gold', 'orange', 'darkorange', 'orangered', 'rosybrown', 'coral', 'red', 'darkred', 'crimson'];
for (const color of colors1) {
    document.write(
        `<div>
             <h4 style="color: ${color}; margin: 6px">${color}</h4>
        </div>`
    );
}
document.write(`</div>`);
document.write(`</div>`);


document.write(`<div> <h3>Task 1.2.</h3>`);
document.write(`<div style="display: flex">`)
let colors2 = ['lightblue', 'powderblue', 'lightseagreen', 'lightslategrey', 'darkblue', 'blue', 'purple', 'indigo', 'violet', 'darkviolet'];
for (let i = 0; i < colors2.length; i++) {
    const color = colors2[i];
    console.log(i);
    document.write(
        `<div>
             <h4 style="color: ${color}; margin: 5px"> ${color} - ${i}
             </h4>
         </div>`)
}
document.write(`</div>`);
document.write(`</div>`);


document.write(`<div> <h3>Task 1.2.</h3>`);
document.write(`<div style="display: flex">`);
let styles = ['background-color: lightblue', 'background-color: lightgreen', 'background-color: lightpink', 'background-color: lightsalmon', 'background-color: lightseagreen', 'background-color: lightskyblue', 'background-color: lightsteelblue', 'background-color: lightyellow', 'background-color: lightcoral', 'background-color: lightcyan'];
for (let i = 0; i < styles.length; i++) {
    document.write(
        `<div style="${styles[i]}; margin: 5px; padding: 3px; border: 2px solid black;">
             <h5 style="margin: 0;">Block - ${i + 1}</h5>
        </div>`
    );
}
document.write(`</div>`);
document.write(`</div>`);
// -------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------


// task 1.3.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<div>This is my block while! They should be 20!</div>`)
    // console.log(i);
    i++;
}

// task 1.4.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let k = 0;
while (k < 20) {
    document.write(`<div>Block and has number - ${k}</div>`)
    console.log(k);
    k++;
}


// task 2.0
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul><h4>Task 2.0. Elements array</h4>`)
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
document.write(`</ul>`)

// task 3.0
// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// 			let products = [
// 				{
// 					title: 'milk',
// 					price: 22,
// 					image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
// 				},
// 				{
// 					title: 'juice',
// 					price: 27,
// 					image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
// 				},
// 				{
// 					title: 'tomato',
// 					price: 47,
// 					image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
// 				},
// 				{
// 					title: 'tea',
// 					price: 15,
// 					image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
// 				},
// 			];
//
// ШАБЛОН
//  <div class="product-card">
//         <h3 class="product-title">TITLE. Price - PRICE</h3>
//         <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write(`<div><h4>Task 3.0</h4>`)
for (const product of products) {
    // console.log(product)
    document.write(`<div class="product-title">
                         <h3>${product.title}. Price - ${product.price} grn.</h3>
                         <img style="width: 150px" src="${product.image}" alt="photos of the products">
                    </div>`)
    document.write(`</div>`)
}
document.write(`</div>`)



// task 4.0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років






