// 1. Послідовність завантаження: спочатку з src, а в body - по черзі
console.log('555')

// 2. Змінні
// var
// let
//const

var a;  // - процес декларації змінної - оголошення змінної
a = 'hello'; // - ініціалізація змінної

{
    var b = 'happy'; // можна за раз
    let c = 'strong'; // доступна лише в межах блока ініціалізації
}
console.log(a);
console.log(b);
// console.log(c);

const PI = 3.14;
console.log(PI);

// можна змінювати
let si = 'start';
console.log(si);
si = 'finish';
console.log(si);

// Базові типи даних:
//number
//string
//boolean

let age = 123;
let name = 'Igor';
let gender = 'male';
let status = true;

// string
let school = 'Number 25';
let number = '25';

console.log(typeof school, typeof number);
console.log(school, number);

let n = 100500;
console.log(n);
console.log(age, name, gender, status, n);
console.log(typeof age, typeof name, typeof gender, typeof status,typeof n);
console.log(typeof age, age, typeof name, name, typeof gender, gender, typeof status, status, typeof n, n);

// Типи string та базові операції з ними.

let aa = 'asd';
let bb = "asdd";
let as = '\"pppppp\"'; // екранізація лапок
console.log(aa, bb, as);

let sos = '\"sos123\"'; //
console.log(sos);

// темплейт стрінг - за допомогою бекквотів ` ` - шаблонний рядок
let template = `back quotes`;
console.log(template);

// Конкатинація - з'єднання в один рядок
// 1) +' '+  2) ' слово'  3) `${змінна} ${змінна}`
let name1 ='Denis';
let surname1 = 'Osetrov';
let lastname1 = 'Volodymyrovych';
let fullname1 = name1 + ' ' + surname1 + ' '+ lastname1;
console.log(fullname1);

console.log(name1+surname1+lastname1);

let name2 = 'Denis';
let surname2 = ' Osetrov';
let lastname2 = ' Volodymyrovich';
let fullname2 = name2 + surname2 + lastname2;
console.log(fullname2)

// відображають порізно
// `${}` - інтерполяція!
console.log(`${name1} ${surname1} ${lastname1}`);

console.log(name1, surname1, lastname1, name2, surname2, lastname2);

let myself = 'Мене звати Денис!';
let mysurname = 'Я мешкаю в невеличкому місті';
console.log(`${myself} ${mysurname}`);
console.log(myself, mysurname);
console.log(myself+' '+mysurname);
console.log(myself+mysurname)   // без пробіла!!!
console.log(`${myself} ${mysurname}. I add other information!`)

// Числові значення!
let a1 = 12300;   // integer
console.log(a1);

let b1 = 3.345345345;   // float, double
console.log(b1);

console.log(10+20+20+50);
console.log(20-10);
console.log(10*10);
console.log(50/10);
console.log(10/0);    // Infinity

// Ділення по модулю
console.log(11 % 3);  // 2 - залишок написує

// робота з дробами
console.log(0.1+0.2);  // 0.30000000000000004 - треба використовувати функцію - tofix
console.log((0.1+0.2).toFixed(2));  // 0.30 - число з фіксованою точністю до двох знаків після коми: "0.30".

console.log(0.4+0.02);  // 0.42000000000000004
console.log((0.4+0.02).toFixed(3));  // 0.420

// Великі значення:
// 1. відображаються не повністю!
let big = 1234567891011121314151617181920;
console.log(big);   // 1.2345678910111213e+30

// пропишемо n в кінці числа
let big1 = 1234567891011121314151617181920n;
console.log(big1);   // все число видно!

// Запишемо за допомогою BigInt
let big11 = BigInt(1234567891011121314151617181920n);  // з n в кінці буде точніше!
console.log(big11);

// Робота з цифровими бібліотеками bignumber.js і mathjs з офіційних сайтів!

console.log(15%2);

// Конвертація типів даних
let num = 'qweqwe'+123;   //qweqwe123
num = 123123+'';                 //123123 - string
num = +'123123';                 //123123 - number
num = 10 + +'232323';            //232333 - Конвертація в число!  +'число'
num = (+'123p');                 // Nan
num = (+'p123');                 // Nan

console.log(num);


// Функція parseInt
num2 = '12345qwerqwerqwer';
console.log(parseInt(num2));     // 12345 - прибирає зайве

num3 = 'qwe12345';
console.log(parseInt(num3));     // NaN

let num1 = 42.23423423423;
console.log(parseInt(num1));    //42 - прибирає дроби!!!
                                // Видає помилку, бо parseInt перетворює string в number;
console.log(Math.round(num1));  // 42 - округлило

let num10 = '52.235235';
console.log(typeof Number(num10));  // number  - перетворило стрінгу в number



// Function alert, prompt, confirm
// alert('Давай навчатися!');
// confirm('Впернений, ти готовий!');
// prompt('Якщо не готовий - поясни!');  // виводить ТІЛЬКИ string
// console.log(5+confirm());   // 6 - якщо confirm - ok(true)
// let promptNumber = +prompt('Введи число від 1-100');
// console.log(promptNumber);  // виведе число, наприклад, 23!
// let prompt12 = +prompt('Введіть вік від 18-60', '18'); // Дуфолтне значення


// Конвертація в Boolean - перед даними - !!

console.log(!!'qwerqwer');   //true
console.log(!!' ');          //true
console.log(!!-123123321);   //true

console.log(!!'');           //false
console.log(!!undefined);    //false
console.log(!!null);         //false
console.log(!!NaN);          //false
console.log(!!0);            //false


// Об'єкти і масиви
let user1 = {
    name: 'Denis',
    surname: 'Osetrov',
    age:38,
    live: 'Kremenchuk'
}
console.log(user1);
console.log(user1.age);       // Звернення до елементів об'єкта
console.log(user1['name']);   // Звернення до елементів об'єкта

// Масив
let users = ['Max', 'Olga', 'Bob', user1];
console.log(users);
console.log(users[3]);       // user1
users[1] = 'Zina';           // зміна даних в масиві
console.log(users[1]);
console.log(users);