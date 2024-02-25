//--------------------------------------------------
//---------------------- Масиви --------------------
//--------------------------------------------------

let arr = [12, 13, 15, 22, -45, 0, 'awe', true, 234234];
console.log(arr);         // звернення до всього масиву
console.log(arr[0]);      // Звернення до елементу масива
console.log(arr.length);  // дізнатись довжину масива - 9 числом

arr[1] = '14';            // заміна елементу масива
console.log(arr[1]);

// додавання в кінець масиву - як правило!
arr[arr.length] = 'finish last element arr';
console.log(arr);


//  Багатовимірні масиви

// 0    1           2    3     4     5
let arrInArr = [[], [12, 13, 14], [], 123, 'str', true];
console.log(arrInArr[1]);       // [12,13,14] - увесь 2-й масив
console.log(arrInArr[1] [1]);   // 13 - 2-й ел. 2-го масиву

// запакували елемент масиву в змінну
let innerArr = arrInArr[1][1];
console.log(innerArr);          // 13


//--------------------------------------------------
//---------------------- Об'єкти -------------------
//--------------------------------------------------

// Об'єкти з масивами
let user1 = {
    id: 1,
    name: 'jon',
    age: 32,
    skills: ['html', 'js', 'java', 'css']
}
console.log(user1);
console.log(user1.name);         // виведе 1 значення
console.log(user1['age']);       // виведе 1 значення
console.log(user1.skills[2]);    // java


// Масиви з об'єктими!
const users = [
    {
        name: 'Користувач 1',
        dimensions: {
            length: 10,
            width: 5,
            depth: 3,
            function: ['fly', 'go', 'run']
        }
    },
    {
        name: 'Користувач 2',
        dimensions: {
            length: 8,
            width: 6,
            depth: 4
        }
    },
    // Додаткові користувачі тут
];
console.log(users);
console.log(users[1].dimensions.width);    // Дістатися до значення об'єкта в масиві
console.log(users[0].dimensions['depth'])  // Динамічне звернення до елемента

// запакуємо в змінні об'єкти з масиву
let user0 = users[0];
console.log(user0);
let dimensions = user0.dimensions;
console.log(dimensions);
let functions = dimensions['function'];
// let functions = dimensions.function;           // або такий варіант запису
console.log(functions);
console.log(functions[2]);   //  run


// Модифікація об'єктів (додавання ключів тощо)

let person1 = {
    id: 1,
    name: 'Petya',
    surname: 'Popov'
}
// додамо - age!
person1.age = 42;
console.log(person1);

// додамо 2-им способом
person1['status'] = false;

// додамо масив
person1.skills = ['html', 'java', 'js'];
console.log(person1);

// видалення ключа об'єкта
delete person1.skills[1];
console.log(person1);       // ['html', empty, 'js']


// Різниця між примітивами та референціальними типами

// number
// string
// boolean

let a = 100;
let b = a;
b = b + 10; //110
console.log(a); //100
// Примітиви узяли своє значення, зробили клон і віддами. Самі не міняються

let user11 = {name: 'Vasilij'};
let user22 = user11;
console.log(user22);
user22.age = 31;
console.log(user22);
console.log(user11);
// референціали, а саме [], {} - мають посилання на object і при зміні об'єкти все інші посилання теж змінюються!


// Логічні розгалуження if

let color = 'green';
if (color === 'red') {
    console.log('go');
} else {
    console.log('stop');
}

////////////////////////////////////////
// двухетапна перевірка!
let way = 'free';
if (color === 'red') {
    console.log('stop');
} else if (color === 'yellow') {
    console.log('wait')
} else if (color === 'green'){
    if (way === 'green') {
        console.log('go')
    } else {
        console.log('don\'t worry, wait!')
    }
}else {
    console.log('??????????????')
}
/////////////////////////////////////////
let grade = 85;

if (grade >= 90) {
    console.log('Відмінно');
} else if (grade >= 80) {
    console.log('Добре');
} else if (grade >= 70) {
    console.log('Задовільно');
} else {
    console.log('Потрібно покращити');
}

/////////////////////////////////////////////

// Конструкції && (логічне І) та || (логічне АБО) є логічними операторами у JavaScript

// &&  --------------------------------------------
let num1 = 5;
let num2 = 8;

if (num1 > 0 && num2 > 0) {
    console.log('Обидва числа є позитивними');
} else {
    console.log('Хоча б одне число не є позитивним');
}

// ||  ---------------------------------------------

let num = 7;

if (num % 2 === 0 || num % 5 === 0) {
    console.log('Число є парним або ділиться на 5');
} else {
    console.log('Число не є парним і не ділиться на 5');
}
//--------------------------------------------------
let age = 25;
let score = 80;

// Перевірка, чи вік знаходиться в діапазоні від 18 до 30 років, і чи бал рейтингу більше 75
if (age >= 18 && age <= 30 && score > 75) {
    console.log('Вік знаходиться в діапазоні від 18 до 30 років, і бал рейтингу більше 75');
} else {
    console.log('Умова не виконана');
}


// Switch
let color2 = prompt('enter color');


switch (color2) {
    case 'green':
    case 'yellow':
        console.log('go!');

        break;
    case 'red':
        console.log('stop');
        break;
    default:
        console.log('????');
}
