// Task 1.
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами a і b


// Без return!

let area;

function areaOfRectangle1(a, b) {
    area = a * b;
}

areaOfRectangle1(4, 5);
console.log('Площа прямокутника зі сторонами a і b дорівнює ', area);

// з return!

function areaOfRectangle2(a, b) {
    return a * b;
}

let qwe = areaOfRectangle2(5, 5);
console.log('Площа прямокутника зі сторонами a і b дорівнює ', qwe)


//-----------------------------------------Для себе!!!------------------------------------
// Використання функції areaOfRectangle2 з масивом з об'єктами

let rectangles = [
    {lengthRec: 10, widthRec: 5},
    {lengthRec: 3, widthRec: 4},
    {lengthRec: 2, widthRec: 3},
    {lengthRec: 4, widthRec: 4},
    {lengthRec: 5, widthRec: 5},
    {lengthRec: 10, widthRec: 4}
];

let rectanglesArea = [];   // Пустий масив для зберігання результатів функції
for (let i = 0; i < rectangles.length; i++) {
    const rectangle = rectangles[i];
    let areaRectangle = areaOfRectangle2(rectangle.lengthRec, rectangle.widthRec);
    rectanglesArea.push(areaRectangle);
}
console.log(rectanglesArea);  // результат роботи ф-ції [50, 12, 6, 16, 25, 40]


// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaOfCircle(r) {
    return Math.PI * (r ** 2);
}

// console.log(areaOfCircle(2));
// використання функції і виведення результату
let radius1 = 25;
let radius1Area = areaOfCircle(radius1);
// console.log(`Площа кола з радіусом ${radius1} дорівнює ${radius1Area}`);
console.log('Площа кола з радіусом ', radius1, 'дорівнює ', radius1Area);


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function calcAreaCylinder(r, h) {
    return 2 * Math.PI * r * (r + h);
}

// console.log(calcAreaCylinder(3,5));
let h = 4;
let r = 2;
let qwe1 = calcAreaCylinder(r, h);
console.log('Площа циліндра висотою ', h, 'та радіутом ', r, 'дорівнює ', qwe1);


// - створити функцію яка приймає масив та виводить кожен його елемент
const numbers = [11, 22, 33, 44, 55];

function removes(arr) {
    for (let i = 0; i < numbers.length; i++) {
        // console.log(i);   // виводить порядковий № масиву
        // console.log(arr)  // виводить кожну ітерацію увесь масив
        console.log(arr[i])  // виводить 1 елемент масиву
        // document.write(`<div><h3>${arr[i]}</h3></div>`);
    }
}

removes(numbers);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let text = 'Довільний текст будь-якоро розміру!';

function addText(t) {
    document.write(`
    <div>
    <p>${t}</p>
</div>`)
}

addText(text);

// додаю функцію, що має два аргумента (кіл.параграфів, текст)
//  створюю функцію, що створює параграфи і додає текст
let paragraphCount = 3;

function addParagraph(p, t) {
    for (let i = 0; i < paragraphCount; i++) {
        document.write(`<p style="color: burlywood">${t}</p>`)
    }
}

addParagraph(paragraphCount, text);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function addUl(t) {
    document.write(`<ul style="color: coral">
<li>${t}</li>
<li>${t}</li>
<li>${t}</li>
</ul>`)
}

addUl('Text');


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function addLi(countLi, t) {
    document.write(`<ul style="color: chocolate">`)

    for (let i = 0; i < countLi; i++) {
        document.write(`<li>${t}</li>`)
    }

    document.write(`</ul>`)
}

addLi(5, text)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr11 = [12, 11, 10, 'string', true];

function printArr(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}

printArr(arr11)


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
</div>`)
    }
}

printUsers1(arrUsers)


// виводить окремо блок і кожен елемент
function printUsers2(arr) {
    for (const arrElement of arr) {

        document.write(`<div style="margin: 5px; border: 2px solid rebeccapurple; width: 200px;font-size: 15px; padding-left: 5px">`)

        for (const key in arrElement) {
            document.write(`<p>${key}: ${arrElement[key]}</p>`)
        }

        document.write(`</div>`)
    }

}

printUsers2(arrUsers);


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


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = [10,20,70];

function calculateSum (arr) {
    let sumElement = 0;
    for (const arrElement of arr) {
        sumElement += arrElement;
    }
    return sumElement;
}

console.log(calculateSum(sum))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250