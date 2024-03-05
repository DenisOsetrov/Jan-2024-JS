//----------------------------Task 1.-----------------------------
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами a і b


//  function declaration
// function areaOfRectangle2(a, b) {
//     return a * b;
// }
// let qwe = areaOfRectangle2(5, 5);
// console.log('Площа прямокутника зі сторонами a і b дорівнює ', qwe)


//  function expression
let calculateRectangleArea = function (a, b) {
    return (a * b).toFixed(2);
}
console.log('Площа прямокутника зі сторонами a і b дорівнює ', calculateRectangleArea(5, 6));

document.write(`<div><p>Task 1. Площа прямокутника зі сторонами а і b дорівнює <b>${calculateRectangleArea(5,6)}</b></p></div>`);


//  arrow function
let calculateRectangleArea1 = (a,b) => a*b;
console.log('Площа прямокутника зі сторонами a і b дорівнює ', calculateRectangleArea1(3,4));






//----------------------------Task 2.-----------------------------
// - створити функцію яка обчислює та повертає площу кола з радіусом r

//  function declaration
// function areaOfCircle(r) {
//     return Math.PI * (r ** 2);
// }
// console.log('Площа кола з радіусом r дорівнює ', areaOfCircle(3));


//  function expression
let calculateCircleArea = function (r) {
    return (Math.PI*(r**2)).toFixed(2);
}
console.log('Площа кола з радіусом r дорівнює ', calculateCircleArea(4));

document.write(`<div><p>Task 2. Площа кола з радіусом r дорівнює <b>${calculateCircleArea(4)}</b></p></div>`);


//  arrow function
let calculateCircleArea2 = (r) => (Math.PI*(r**2)).toFixed(2);
console.log('Площа кола з радіусом r дорівнює ', calculateCircleArea2(2));






//----------------------------Task 3.-----------------------------
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r


//  function declaration
// function calcAreaCylinder(r, h) {
//     return 2 * Math.PI * r * (r + h);
// }
//
// // console.log(calcAreaCylinder(3,5));
// let h = 4;
// let r = 2;
// let qwe1 = calcAreaCylinder(r, h);
// console.log('Площа циліндра висотою ', h, 'та радіутом ', r, 'дорівнює ', qwe1);


//  function expression
let calculateCylinderArea = function (r,h) {
    return (2*Math.PI*r*(r+h)).toFixed(2);
}
console.log('Площа циліндра з висотою h і радіусом r дорівнює ', calculateCylinderArea(3,5));

document.write(`<div><p>Task 3. Площа циліндра з висотою h і радіусом r дорівнює <b>${calculateCylinderArea(3,5)}</b></p></div>`);



//  arrow function
let calculateCylinderArea2 = (r,h) => (2*Math.PI*r*(r+h)).toFixed(2);
console.log('Площа циліндра з висотою h і радіусом r дорівнює ', calculateCylinderArea2(4,4));





//----------------------------Task 4.-----------------------------
// - створити функцію яка приймає масив та виводить кожен його елемент

//  function declaration
// const numbers1 = [11, 22, 33, 44, 55];
//
// function removes(arr) {
//     for (let i = 0; i < numbers1.length; i++) {
//         // console.log(i);   // виводить порядковий № масиву
//         //console.log(arr)  // виводить кожну ітерацію всього масиву
//         console.log(arr[i]);  // виводить 1 елемент масиву
//         // document.write(`<div><h3>${arr[i]}</h3></div>`);
//     }
// }
// removes(numbers1);



//  function expression
const numArray = ['Я виведу кожен елемент', 'і почну з чисела 1!', 1];
let printArrayElements = function (arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
        document.write(`<div><p>Task 4.${arrElement}</p></div>`);
    }
}
printArrayElements(numArray);



//  arrow function
const printArrayElements2 = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
        console.log(arrElement);
    }
}
printArrayElements2(numArray);





//----------------------------Task 5.-----------------------------
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


let text = 'Text!';

//  function declaration
// function addText(t) {
//     document.write(`
//     <div>
//     <p>${t}</p>
// </div>`)
// }
//
// addText(text);


//  function expression
let printTextParagraphCounter = function (p,t) {
    for (let i = 0; i < p; i++) {
           document.write(`<div><p>${t}</p></div>`);
    }
}
printTextParagraphCounter(2,text);


//  arrow function
let printTextParagraphCounter2 = (p,t) => {
    for (let i = 0; i < p; i++) {
        document.write(`<div style="color: teal"><p>${t}</p></div>`);
    }
}
printTextParagraphCounter2(2,text);






//----------------------------Task 6.-----------------------------
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

//  function declaration
// function addUl(t) {
//     document.write(`<ul style="color: coral">
// <li>${t}</li>
// <li>${t}</li>
// <li>${t}</li>
// </ul>`)
// }
//
// addUl('Text');


//  function expression
let createListWithItems = function (t, counter) {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${t}</li>`);
    }
    document.write(`</ul>`);
}

let liValue = 'Hello Li!'
createListWithItems(liValue, 2);


//  arrow function
let createListWithItems2 = (t, counter) => {
    document.write(`<ul>`)
    for (let i = 0; i < counter; i++) {
        document.write(`<li>${t}</li>`);
    }
    document.write(`</ul>`);
}

let liValue2 = '<= Li =>'
createListWithItems2(liValue2, 1);





//----------------------------Task 7.-----------------------------
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)


//  arrow function
let createListWithItems3 = (t, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${t}</li>`);
    }
    document.write(`</ul>`);
}
let liItems = 'New li!'
createListWithItems3(liItems, 2);




//----------------------------Task 8.-----------------------------
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr11 = [12, 11, 10, 'string', true];

function printArr(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

printArr(arr11);





//----------------------------Task 9.-----------------------------
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrUsers = [
    {id: 1, name: 'Max', age: 31},
    {id: 2, name: 'Tom', age: 30},
    // {id: 3, name: 'Nikolas', age: 29},
    // {id: 4, name: 'Oleg', age: 28},
    // {id: 5, name: 'Max', age: 30}
]

function printUsers1(arr) {
    for (const arrElement of arr) {
        document.write(`<div>
            <p>User has id: ${arrElement.id}, name: ${arrElement.name}, age: ${arrElement.age}.</p>
                        </div>`);
    }
}

printUsers1(arrUsers);


// виводить окремо блок і кожен елемент
function printUsers2(arr) {
    for (const arrElement of arr) {

        document.write(`<div style="margin: 5px; border: 2px solid rebeccapurple; width: 200px;font-size: 15px; padding-left: 5px">`);

        for (const key in arrElement) {
            document.write(`<p>${key}: ${arrElement[key]}</p>`);
        }

        document.write(`</div>`);
    }

}

printUsers2(arrUsers);






//----------------------------Task 10.-----------------------------
// - створити функцію яка повертає найменьше число з масиву
let summa = [2, 3, 6, 9, 1, 8, 13];

function minMaxValue(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {min, max};
}

console.log(minMaxValue(summa));






//----------------------------Task 11.-----------------------------
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = [10, 20, 70];

function calculateSum(arr) {
    let sumElement = 0;
    for (const arrElement of arr) {

        // sumElement = sumElement + arrElement;
        sumElement += arrElement;
    }
    return sumElement;
}

console.log(calculateSum(sum));





//----------------------------Task 12.-----------------------------
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swat = [11,22,33,44];

function changeIndex (arr, index1, index2) {
    if(index1>=0 && index1<arr.length && index2>=0 && index2<arr.length) {  // чи індекси є в межах масиву
        let temp = arr[index1];                                             // Зберігаємо значення першого елемента
        arr[index1] = arr[index2];               // Замінюємо значення першого елемента на значення другого елемента
        arr[index2] = temp;
    }
    return arr;                                  // Повертаємо масив зі зміненими значеннями
}

changeIndex(swat,2,1);
console.log(swat);                                // [11, 33, 22, 44]





//----------------------------Task 13.-----------------------------
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function  exchange (sumUAH,currencyValues,exchangeCurrency) {
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));


// 2 варіант
function exchange2(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate = 0;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            exchangeRate = item.value; // Зберігаємо обмінний курс для потрібної валюти
            break;
        }
    }
    // Використовуємо обмінний курс для обчислення результату обміну
    return sumUAH / exchangeRate;
}

console.log(exchange2(10000, [{currency:'USD', value:40}, {currency:'EUR', value:42}], 'EUR'));



// 2.1 варіант з використанням масиву з об'єктами
function exchange3(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate = 0;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency){
            exchangeRate = item.value; // Зберігаємо обмінний курс для потрібної валюти
            break;
        }
    }
    // Використовуємо обмінний курс для обчислення результату обміну
    let result = sumUAH / exchangeRate;
    return parseFloat(result.toFixed(2)); // Округлюємо до 0,00 і перетворюємо у число
}

let currencyValues = [
    {currency:'USD', value:40},
    {currency:'EUR', value:42},
    {currency: 'PLN', value: 9.37}
];

console.log(exchange3(10000, currencyValues, 'PLN'));




