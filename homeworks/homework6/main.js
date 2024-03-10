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
// console.log(sortNums(nums, 'foobar'));

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


// -- відсортувати його за спаданням за monthDuration  --- через створення функції!
let sortMonthDurationReduction = (coursesArray) => coursesArray
    .sort((a, b) =>
        b.monthDuration-a.monthDuration);
console.log(sortMonthDurationReduction(coursesAndDurationArray));  // спадання

let sortMonthDurationIncrease =(coursesArray) => coursesArray
    .sort((a, b) =>
        a.monthDuration - b.monthDuration);
console.log(sortMonthDurationIncrease(coursesAndDurationArray));   // зростання


// -- відсортувати його за спаданням за monthDuration
let sortMonthDurationReduction2 = coursesAndDurationArray.sort((a, b) => b-a);
console.log(sortMonthDurationReduction2);


// - відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців --- через створення функції!
let filterCourses = (arr) => arr.filter(item => item.monthDuration > 5);
console.log(filterCourses(coursesAndDurationArray));


// - відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCourses2 = coursesAndDurationArray.filter(item =>
    item.monthDuration > 5);
console.log(filterCourses2);


// - за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let changedCoursesAndDurationArray = coursesAndDurationArray.map((course, index) => ({
    id: index +1,
    title: course.title,
    monthDuration: course.monthDuration})
)
console.log(changedCoursesAndDurationArray);





//  описати колоду карт (від 6 до туза без джокерів)
let cards = [
//spade black
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
//diamond red
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
//heart red
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
//clubs black
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
]

//  - знайти піковий туз  - 1!
let findSpadeAce = cards.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(findSpadeAce);

//  - знайти піковий туз  - 2!
let findSpadeAce2 = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(findSpadeAce2);

//  - знайти піковий туз  - 2 з перевіркою!
let findSpadeAce3 = cards.filter(card => card.cardSuit === 'spade' && card.value === 'ace');

// Перевірка на довжину масива
// if (findSpadeAce3.length > 0) {
//     console.log(findSpadeAce3[0]);
// } else {
//     console.log('Пікового туза в колоді немає!');
// }

if (findSpadeAce3.length > 0) {
    console.log(findSpadeAce3[0]);
} else {
    console.log('Пікового туза в колоді немає!');
}


//  - всі шістки
// find - не підходить, бо знаходить 1-е значення!!!
let sixValue = cards.filter(card => card.value === '6');
console.log(sixValue);

// робимо перевірку через .includes - отримуємо true чи false
let allSixes = cards.filter(card => card.value === '6' && ['spade', 'diamond', 'heart', 'clubs'].includes(card.cardSuit));
console.log(allSixes);


//  - всі червоні карти
let redCards = cards.filter(card => card.color ==='red');
console.log(redCards);


//  - всі буби
let diamondCards = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamondCards);


//  - всі трефи від 9 та більше - порівняли чи є такі в масиві!
let clubsValue = cards.filter(card => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(clubsValue);

//  - всі трефи від 9 та більше - видалили 3 перших елементи
let clubsValue2 = cards.filter(card => card.cardSuit === 'clubs')
    clubsValue2.splice(0, 3);     // відрізаний масив елементів ніде не використовуємо!
console.log(clubsValue2);


// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// v1.1
let packedCards = cards.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.cardSuit]) {
        accumulator[currentValue.cardSuit] = [];
    }
    accumulator[currentValue.cardSuit].push(currentValue);
    return accumulator;
}, {});

console.log(packedCards);


// v2.1
let packedCards2 = cards.reduce((accumulator, currentValue) => {
    accumulator[currentValue.cardSuit] = [...(accumulator[currentValue.cardSuit] || []), currentValue];
    return accumulator;
}, {});

console.log(packedCards2);


// v3.1
const packedCards3 = cards.reduce((acc, current) => {
  acc[current.cardSuit].push(current);
  return acc;
}, { spade:[], diamond:[], heart:[], clubs:[] });

console.log(packedCards3)


// v3.2
const packedCards4 = cards.reduce((acc, current) => {
    const { cardSuit } = current;
    if (!acc[cardSuit]) {
        acc[cardSuit] = []; // Ініціалізуємо масив, якщо він ще не існує
    }
    acc[cardSuit].push(current);
    return acc;
}, {});

console.log(packedCards4);

// packedCards: класичний метод з перевіркою наявності ключа перед додаванням значення.
// packedCards2: зручний синтаксис розширення масиву [...(accumulator[currentValue.cardSuit] || []), currentValue], щоб уникнути перевірки наявності ключа.
// packedCards3: Цей метод створює об'єкт з попередньо ініціалізованими пустими масивами для кожного ключа перед початком операцій. Він гарний для випадків, коли ми точно знаємо, які ключі ми очікуємо, і хочемо уникнути перевірки наявності ключів під час виконання.
// packedCards4: Цей підхід використовує деструктуризацію об'єкта current для отримання значення cardSuit.




// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let moduleSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(moduleSass);

let moduleDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(moduleDocker);


// 2 варіант через метод .some - шукає хоч 1 елемент!

let sassCourses = coursesArray.filter(course => course.modules.some(module => module === 'sass'));
console.log(sassCourses);

let dockerCourses = coursesArray.filter(course => course.modules.some(module => module === 'docker'));
console.log(dockerCourses);








