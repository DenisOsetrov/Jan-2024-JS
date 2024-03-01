// Task 1.
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б


// Без return!

let area;

function areaOfRectangle1(a, b) {
    area = a * b;
}

areaOfRectangle1(4, 5);
console.log(area);

// з return!

function areaOfRectangle2(a, b) {
    return a * b;
}

let qwe = areaOfRectangle2(5, 5);
console.log(qwe);

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
    return Math.PI*(r**2);
}
console.log(areaOfCircle(2));
// використання функції і виведення результату

let radius1 = 25;
let radius1Area = areaOfCircle(radius1);
// console.log(`Площа кола з радіусом ${radius1} дорівнює ${radius1Area}`);
console.log('Площа кола з радіусом ', radius1, 'дорівнює ', radius1Area);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250