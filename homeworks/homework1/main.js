// 1 task
// Створити змінні.
// Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log

let hi = 'hello';
console.log(hi);

let company = 'owu';
console.log(company);

let email = 'com';
console.log(email);

let country = 'ua';
console.log(country);

let number1 = 1;
console.log(number1);

let number2 = 10;
console.log(number2);

let number3 = -999;
console.log(number3);

let number4 = 123;
console.log(number4);

let number5 = 3.14;
console.log(number5);

let number6 = 2.7;
console.log(number6);

let number7 = 16;
console.log(number7);

let boolean1 = true;
console.log(boolean1);

let boolean2 = false;
console.log(boolean2);


// 2 task
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Denis';
let middleName = 'Osetrov';
let lastName = 'Volodymyrovych';

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

person = firstName + ' ' +middleName + ' ' + lastName;
console.log(person);

let spase = ' ';
person = firstName+spase+middleName+spase+lastName+spase;
console.log(person);

console.log(firstName, middleName, lastName);

person = firstName + middleName + lastName;   // без пробілів
console.log(person);


// 3 task
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;

console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);


// 4 task (addition)
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль

alert('Приві! Я - Alert! Натисни "Ок!", якщо готовий зустрічати confirm');
confirm('Залишився ще один крок! Готовий?');
let promptMiddleName = prompt('Введіть своє прізвище!');
let promptName = prompt('Введіть своє ім\'я!');
let promptLastName = prompt('Введіть своє по-батькові!');
let promptAge = +prompt('Скільки Вам повних років?', '18');

console.log(promptName, promptMiddleName, promptLastName+'- талановитий developer, якому в цьому році виповнилося -', `${promptAge}`, 'років!');

console.log(promptName+spase+promptMiddleName+spase+promptLastName+spase+'- талановитий developer, якому в цьому році виповнилося - '+promptAge+spase+'років!');

console.log(`${promptName} ${promptMiddleName} ${promptLastName} - талановитий developer, якому в цьому році виповнилося - ${promptAge} років!`);











