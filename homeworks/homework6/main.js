// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let lengthString1 = 'hello world';
console.log(lengthString1.length);

let lengthString2 = 'lorem ipsum';
console.log(lengthString2.length);

let lengthString3 = 'javascript is cool';
console.log(lengthString3.length);




// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCaseString1 = 'hello world';
let resToUpperCase = toUpperCaseString1.toUpperCase();
console.log(resToUpperCase);

let toUpperCaseString2 = 'lorem ipsum';
console.log(toUpperCaseString2.toUpperCase());

let toUpperCaseString3 = 'javascript is cool';
console.log(toUpperCaseString3.toUpperCase());




// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCaseString1 = 'HELLO WORLD';
let resToLowerCaseString1 = toLowerCaseString1.toLowerCase();
console.log(resToLowerCaseString1);

let toLowerCaseString2 = 'LOREM IPSUM';
console.log(toLowerCaseString2.toLowerCase());

let toLowerCaseString3 = 'JAVASCRIPT IS COOL';
console.log(toLowerCaseString3.toLowerCase());

// або з першого завдання переробляємо:
console.log(toUpperCaseString1.toLowerCase());
console.log(toUpperCaseString2.toLowerCase());
console.log(toUpperCaseString3.toLowerCase());




// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
let cleanStr = dirtyString.trim();       // Видаляє пробіли з початку і кінця рядка
console.log(cleanStr);

console.log(dirtyString.trimStart().trimEnd()); // Видаляє спочатку і з кінця рядка пробіли

console.log(dirtyString.substring(1,13));       // Вирізає рядок у заданому діапазоні




// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let longString = 'Ревуть воли як ясла повні';
console.log(longString.split(' '));          // ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let stringToArray = longString.split(' ');
console.log(stringToArray);



// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0].
// За допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numberArray = [10,8,-7,55,987,-1011,0,1050,0];
console.log(numberArray.map(item => item.toString()));

// через функцію
let numberString = numberArray.map(function (number) {
    return String(number);
})
console.log(numberString);


let numberString2 = numberArray.map(number => String(number));
console.log(numberString2);



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]






