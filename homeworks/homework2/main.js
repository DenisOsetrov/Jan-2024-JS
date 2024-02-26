//------------------------------------ task 1. ------------------------------
// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу,
// вивести кожен елемент в консоль
console.log('Task 1.1. Array 10 elements!')
let arrTenElements = [100, 111, 222, '333', 'four', true, 'boolean', 'Jon', null, undefined];
console.log(arrTenElements);
console.log(arrTenElements[0]);
console.log(arrTenElements[1]);
console.log(arrTenElements[2]);
console.log(arrTenElements[3]);
console.log(arrTenElements[4]);
console.log(arrTenElements[5]);
console.log(arrTenElements[6]);
console.log(arrTenElements[7]);
console.log(arrTenElements[8]);
console.log(arrTenElements[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту:
// title ,pageCount, genre.
console.log('Task 1.2. Create 3 object that describe books!')

let collectionBook1 = {
    title: 'Iron Flame',
    pageCount: 340,
    genre: 'history'
};

let collectionBook2 = {
    title: 'Harry Potter and the Prisoner of Azkaban',
    pageCount: 480,
    genre: 'fantasy'
};

let collectionBook3 = {
    title: 'The Goldfinch',
    pageCount: 880,
    genre: 'drama'
};

console.log(typeof collectionBook1, collectionBook1);
console.log(collectionBook2);
console.log(collectionBook3);


// Створити 3 об'єкти які описують книги.
// Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.
console.log('Task 1.3. Create 3 object that describe books! Field authors is []. Each author has  name and age fields!')

let arrBook1 = {
    title: 'Emma',
    pageCount: 592,
    genre: 'autobiographic',
    authors: [
        {
            name: 'Hugh Thomson',
            age: 48
        },
        {
            name: 'Jane Austen',
            age: 37
        }
    ]
}

let arrBook2 = {
    title: 'Normal People',
    pageCount: 288,
    genre: 'action',
    authors: [
        {
            name: 'Sally Rooney',
            age: 45
        },
        {
            name: 'Stephenie Meyer',
            age: 35
        }
    ]
}

let arrBook3 = {
    title: 'Anxious People',
    pageCount: 416,
    genre: 'history',
    authors: [
        {
            name: 'Fredrik Backman',
            age: 50
        },
        {
            name: 'Karen M. McManus',
            age: 53
        }
    ]
}

console.log(arrBook1);
console.log(arrBook2);
console.log(arrBook3);


// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
console.log('Task 1.4. 1[] with 10{}. console.log - password')
const arrUsers = [
    {name: 'user1', username: 'gamer1', password: 'qwerty1'},
    {name: 'user2', username: 'gamer2', password: 'qwerty2'},
    {name: 'user3', username: 'gamer3', password: 'qwerty3'},
    {name: 'user4', username: 'gamer4', password: 'qwerty4'},
    {name: 'user5', username: 'gamer5', password: 'qwerty5'},
    {name: 'user6', username: 'gamer6', password: 'qwerty6'},
    {name: 'user7', username: 'gamer7', password: 'qwerty7'},
    {name: 'user8', username: 'gamer8', password: 'qwerty8'},
    {name: 'user9', username: 'gamer9', password: 'qwerty9'},
    {name: 'user10', username: 'gamer10', password: 'qwerty10'}
];
console.log(arrUsers[0].password);
console.log(arrUsers[1].password);
console.log(arrUsers[2].password);
console.log(arrUsers[3].password);
console.log(arrUsers[4].password);
console.log(arrUsers[5].password);
console.log(arrUsers[6].password);
console.log(arrUsers[7].password);
console.log(arrUsers[8].password);
console.log(arrUsers[9].password);

// Або через Інтерполяцію!
console.log(`Зареєстрований користувач ${arrUsers[0].name} має пароль ${arrUsers[0].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[1].name} має пароль ${arrUsers[1].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[2].name} має пароль ${arrUsers[2].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[3].name} має пароль ${arrUsers[3].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[4].name} має пароль ${arrUsers[4].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[5].name} має пароль ${arrUsers[5].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[6].name} має пароль ${arrUsers[6].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[7].name} має пароль ${arrUsers[7].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[8].name} має пароль ${arrUsers[8].password}!`);
console.log(`Зареєстрований користувач ${arrUsers[9].name} має пароль ${arrUsers[9].password}!`);

// // за допомогою методу forEach!
// users.forEach(user => {
//     console.log(`${user.name}: ${user.password}`);
// });
//
// // за допомогою методу map()!
// const passwords = arrUsers.map(user => user.password);
// console.log(passwords);
//
// // за допомогою циклу
// // Створення порожнього масиву для паролів
// const passwords = [];
//
// // Прохід по кожному об'єкту користувача
// for (let i = 0; i < users.length; i++) {
//     // Додавання паролю поточного користувача до масиву паролів
//     passwords.push(users[i].password);
// }
//
// // Виведення масиву паролів у консоль
// console.log(passwords);


// Task 2.1.
// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Перевірте  скрипт при x, що дорівнює 1, 0, -3
console.log('Task 2.1.')

let x = 22;
if (x !== 0) {
    console.log('Вірно!')
} else {
    console.log('Невірно!')
}
// 22 - Вірно, 1 - Вірно, 0 - Невірно, -3 - Вірно!

// Task 2.2.
// - Дано змінну time, яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
console.log('Task 2.2. Time!')

let time = 13;
if (time >= 0 && time <= 15) {
    console.log('I чверть')
} else if (time >= 16 && time <= 30) {
    console.log('II чверть')
} else if (time >= 31 && time <= 45) {
    console.log('III чверть')
} else if (time >= 46 && time < 60) {
    console.log('VI чверть')
} else {
    console.log('This time is not valid')
}


// Task 2.3.
// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).
console.log('Task 2.3. Decade of month!')

let day = 31;
if (day >= 0 && day <= 10) {
    console.log('First decade')
} else if (day >= 11 && day <= 20) {
    console.log('Second decade')
} else if (day >= 21 && day < 32) {
    console.log('Third decade')
} else {
    console.log('This day is not valid!')
}

// Task 2.4.
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа,
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
console.log('Task 2.4. Switch. Plan for the week!');

let numWeek = 12;

switch (numWeek) {
    case 1:
        console.log('Розпочнемо тиждень з ентузіазму, як коли кіт просинається в 5 ранку, згадуючи, що йому до корму далеко.');
        break;
    case 2:
        console.log('Сьогодні, будемо більш активні, ніж веселий щеня, яке намагається догнати свій власний хвіст.');
        break;
    case 3:
        console.log('Це середа, час почати розгортати свої крила, як півень на ранковій прогулянці, і розлетітися у великі висоти.');
        break;
    case 4:
        console.log('Нехай цей четвер буде таким же цікавим, як пригода кота, який намагається зрозуміти, що трапилося з його хвостом.');
        break;
    case 5:
        console.log('Вітаю, п\'ятниця, мій старий друг! Сьогодні ми будемо радіти, як собача хвіст на прогулянці, і стрибати від радості, як кенгуру на скакалці.');
        break;
    case 6:
        console.log('Субота - це час для веселощів і пригод, як для дітей на дитячому майданчику, тому давайте поринемо у світ веселощів і розваг!');
        break;
    case 7:
        console.log('Неділя, день для відпочинку та релаксу, як прогулянка слоненяти по пляжу - плавно, спокійно і з великим задоволенням.');
        break;
    default:
        console.log('Це точно не твій день!)))')
}

// Task 2.5.
// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.
console.log('Task 2.5. User has two numbers!')

let firstNum = 14;
let secondNum = 15;

if (firstNum> secondNum) {
    console.log(firstNum, 'більше за друге число!')
} else if (secondNum>firstNum) {
    console.log(`${secondNum} більше за перше число`);
} else if (firstNum === secondNum){
    console.log('Так вони ж однакові!')
}


// Task 3.
// - є змінна f, яка може прийняти будь-яке значення
// (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, за допомоги  оператора || буде присвоювати
// змінній f значення "default",  якщо значення змінної f являється falsy
// (хибноподібні, тобто приводиться до false)
console.log('Task 3.');

let f = '';   // undefined, null, false, 0.
f = f || 'default';
console.log(f);


// Task 4.
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
console.log('Task 4. [coursesAndDurationArray] > 5 month "Super!"');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title, 'Super');

} if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title, 'Super');

} if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title, 'Super');

} if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title, 'Super');

} if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title, 'Super');

} if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title, 'Super');
}

console.log('Це все на сьогодні! Нижче - для прикладу на майбутнє, щоб орієнтуватись!')






//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

// Це для прикладу!!!

// Перевіряємо кожен елемент масиву на тривалість навчання за допомогою циклу
for (let i = 0; i < coursesAndDurationArray.length; i++) {
    const course = coursesAndDurationArray[i];

    // Перевіряємо, чи тривалість навчання перевищує 5 місяців
    if (course.monthDuration >5) {
        console.log(`${course.title} - Super`);
    }
}


// метод filter()
// Використовуємо метод filter() для відбору курсів з тривалістю навчання більше 5 місяців
let longCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

// Виводимо всі курси з тривалістю навчання більше 5 місяців
longCourses.forEach(course => {
    console.log(course.title, 'Super');
});

// Зазвичай forEach() використовується в тих випадках, коли ви хочете виконати однакову
// дію для кожного елемента масиву, а for...of використовується в тих випадках,
// коли вам також потрібно отримати доступ до індексів або виконати інші операції,
// крім простого перебору.