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

console.log(dirtyString.split(' ').filter((item) => item.length).join(' ')); // "dirty string"


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

let nums = [11,21,3];

let sortNums = (arr, order) => {
    if (order === 'ascending') {
        return arr.sort((a, b) => a - b)
    }
    if (order === 'descending') {
        return arr.sort((a, b) => b - a)
    }
    else {
        console.error('Неправильний напрямок сортування. Використовуйте "ascending" або "descending".')
        return 'Обери ascending або descending в order - аргумент функції!'
    }
}

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'foobar'));

let sortedArray = sortNums(nums, 'ascending');   // Викликаємо функцію та зберігаємо результат в змінну
console.log(sortedArray);






// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


// -- відсортувати його за спаданням за monthDuration
let sortMonthDurationReduction = (coursesArray) => coursesArray
    .sort((a, b) =>
        b.monthDuration-a.monthDuration);
console.log(sortMonthDurationReduction(coursesAndDurationArray));  // спадання

let sortMonthDurationIncrease =(coursesArray) => coursesArray
    .sort((a, b) =>
        a.monthDuration - b.monthDuration);
console.log(sortMonthDurationIncrease(coursesAndDurationArray));   // зростання


// - відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filterCourses = (arr) => arr.filter(item => item.monthDuration > 5);
console.log(filterCourses(coursesAndDurationArray));


// - за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}










