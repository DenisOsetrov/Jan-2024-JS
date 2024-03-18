// **************** відмежувач завдань в html *******************************************
let taskNumberCounter = 1; // Початкове значення номера завдання

function createTaskNumberElement() {
    const taskNumber = document.createElement('h3');
    taskNumber.innerText = 'Task ' + taskNumberCounter;
    taskNumber.style.textAlign = 'center';
    document.body.appendChild(taskNumber);
}
createTaskNumberElement();      // Викликаємо функцію для створення першого елемента h3
// ***************************************************************************************



// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.


const block = document.createElement('div');   // - створити блок
block.classList.add('wrap', 'collapse', 'alpha', 'beta');               // - додати йому класи
block.style.backgroundColor = 'silver';                                 // - додати стилів
block.style.color = 'green';
block.style.fontSize = '30px';
block.style.margin = '5px';
block.style.width = '200px';

// Додавання стилів разом!
// block.style.cssText = 'background-color: silver; color: green; font-size: 30px; margin: 5px; width: 200px;';

block.innerText = '1 block'                                          // - додаємо текст
document.body.appendChild(block);                                    // - додати цей блок в body

let cloneBlock = block.cloneNode(true);                 // - клонувати його повністю, з дояірніми елем.
document.body.appendChild(cloneBlock);                               // - додати клон в body.
cloneBlock.innerText = '2 block';


// **************** відмежувач завдань в html **************************************
taskNumberCounter++;
createTaskNumberElement();
// *********************************************************************************


// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const newArray = ['Main','Products','About us','Contacts'];

const ulElement = document.createElement('ul');

for (const item of newArray) {
    let liElement = document.createElement('li');
    liElement.innerText = item;
    ulElement.appendChild(liElement);
}
document.body.appendChild(ulElement);     // Додавання блоку до DOM

// Через forEach
// newArray.forEach(item => {
//     const liElement = document.createElement('li');
//     liElement.innerText = item;
//     ulElement.appendChild(liElement);
// });
// document.body.appendChild(ulElement);


// **************** відмежувач завдань в html **************************************
taskNumberCounter++;
createTaskNumberElement();
// *********************************************************************************


// - Є масив let coursesAndDurationArray = []
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// 1 варіант
    for (let course of coursesAndDurationArray) {

    let courseBlock = document.createElement('div');

    courseBlock.innerText = `Title: ${course.title}. Duration: ${course.monthDuration} month`;
    // аналоги у додаванні тексту
    // let textValue = document.textContent(`Title: ${course.title}. Duration: ${course.monthDuration} month`);
    // let textValue = document.createTextNode(`Title: ${course.title}. Duration: ${course.monthDuration} month`);

    // courseBlock.appendChild(textValue);      // Додавання тексту до блоку
    document.body.appendChild(courseBlock); // Додавання блоку до DOM
}


// 2 варіант - виведемо все в окремі блоки по 3 блоки в ряд
const container = document.createElement('div');  // створюємо div контейнер
container.classList.add('container');                              // Додаємо клас до div елемента
container.style.cssText = 'display: flex; flex-wrap: wrap';         // Додаємо стилі до обгортки


// Ітерація по кожному курсу з масиву
for (const course of coursesAndDurationArray) {
    // Створення блоку курсу
    const courseBlock = document.createElement('div');

    // Додавання інформації про курс в блок
    courseBlock.innerText = `Title: ${course.title}\nDuration: ${course.monthDuration} months`;

    // Додавання стилів до блоку курсу
    courseBlock.style.backgroundColor = '#add8e6';    // Світлоглакитний фон
    courseBlock.style.color = 'navy';                 // Темно-синій текст
    courseBlock.style.width = '25%';
    courseBlock.style.border = '1px solid black';
    courseBlock.style.padding = '10px';
    courseBlock.style.margin = '5px';
    courseBlock.style.flexGrow = '1'; // Задання автоматичного розташування блоків на рядку

    // Додавання блоку курсу до контейнерного блоку
    container.appendChild(courseBlock);
}

// Додавання контейнерного блоку до body
document.body.appendChild(container);



// **************** відмежувач завдань в html **************************************
taskNumberCounter++;
createTaskNumberElement();
// *********************************************************************************



// - Є масив let coursesAndDurationArray = []
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h3 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.


for (let course of coursesAndDurationArray) {

    let itemDiv = document.createElement('div'); // Створення ел. <div> для кожного ел. масиву
    itemDiv.classList.add('item'); // Додавання класу 'item'


    let heading = document.createElement('h3');    // Створення <h1> з title ел.
    heading.classList.add('heading');                                           // Додавання класу 'heading'
    heading.textContent = course.title;                                         // Встановлення текстового вмісту


    let description = document.createElement('p'); // Створення <p> з monthDuration ел.
    description.classList.add('description');                                    // Додавання класу 'description'
    description.textContent = `Duration: ${course.monthDuration} months`;        // Встановлення текстового вмісту

    itemDiv.appendChild(heading);               // Додавання <h1> до <div>
    itemDiv.appendChild(description);           // Додавання <p>  до <div>

    document.body.appendChild(itemDiv);         // Додавання <div> до DOM

        // Отримуємо перший елемент з класом "heading" за потреби!!!
        heading = itemDiv.querySelector('.heading');
        // Змінюємо колір тексту
        heading.style.color = '#a9a9a9';

}


// **************** відмежувач завдань в html **************************************
taskNumberCounter++;
createTaskNumberElement();
// *********************************************************************************



// - є масив simpsons, котрий лежить в arrays.js
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
// Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const simpson of simpsons) {
    const simpsonDiv = document.createElement('div');
    simpsonDiv.classList.add('member');

    const nameTitle = document.createElement('h3');
    nameTitle.textContent = `Name: ${simpson.name}`;
    simpsonDiv.appendChild(nameTitle);

    const ageParagraph = document.createElement('p');
    ageParagraph.textContent = `Age: ${simpson.age}`;
    simpsonDiv.appendChild(ageParagraph);

    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = `Info: ${simpson.info}`;
    infoParagraph.style.width = '60vw';
    simpsonDiv.appendChild(infoParagraph);

    const photoImg = document.createElement('img');
    photoImg.src = simpson.photo;
    photoImg.alt = `${simpson.name} ${simpson.surname}`;
    simpsonDiv.appendChild(photoImg);

    document.body.appendChild(simpsonDiv);
}



// **************** відмежувач завдань в html **************************************
taskNumberCounter++;
createTaskNumberElement();
// *********************************************************************************

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

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

// 1 варіант зі стилями, прописаними в html
const body = document.body;
for (const item of coursesArray) {
  const block = document.createElement('div');
  const title = document.createElement('h3');
  const duration = document.createElement('div');
  const month = document.createElement('div');
  const hour = document.createElement('div');
  const ul = document.createElement('ul');

  title.innerText = item.title;
  month.innerText = `monthDuration: ${item.monthDuration}`;
  hour.innerText = `hourDuration: ${item.hourDuration}`;

  for (const module of item.modules) {
    const li = document.createElement('li');
    li.innerText = module;
    li.classList.add('elementsBlock', 'list-none');
    ul.appendChild(li);
  }

  block.classList.add('main');
  title.classList.add('text-center', 'elementsBlock');
  duration.classList.add('flex');
  month.classList.add('elementsBlock', 'text-center', 'grow1');
  hour.classList.add('elementsBlock', 'text-center', 'grow5');
  ul.classList.add('margin', 'elementsBlock')

  duration.append(month, hour);
  block.append(title, duration, ul);
  body.append(block);
}


// 2 варіант - цикл в циклі без стилів в html (тільки в JS)
for (const course of coursesArray) {
    // Створюємо блок для кожного курсу
    const courseBlock = document.createElement('div');
    courseBlock.classList.add('course-block');

    // Додаємо блок для назви курсу
    const titleBlock = document.createElement('h3');
    titleBlock.classList.add('title-block');
    titleBlock.style.display = 'flex';               // Додаємо стиль flex
    titleBlock.style.justifyContent = 'center';      // вирівнюємо по центру заголовок
    titleBlock.style.color = '#8c6969'
    titleBlock.textContent = `Title: ${course.title}`;
    courseBlock.appendChild(titleBlock);

    // Створюємо блок для тривалості
    const durationBlock = document.createElement('div');
    durationBlock.classList.add('duration-block');
    durationBlock.style.display = 'flex'; // Додаємо стиль flex
    durationBlock.style.justifyContent = 'center';
    courseBlock.appendChild(durationBlock);

    // Додаємо блок для тривалості у місяцях
    const monthDurationBlock = document.createElement('div');
    monthDurationBlock.textContent = `Month Duration: ${course.monthDuration}`;
    durationBlock.appendChild(monthDurationBlock);

    // Додаємо блок для тривалості у годинах
    const hourDurationBlock = document.createElement('div');
    hourDurationBlock.textContent = `Hour Duration: ${course.hourDuration}`;
    hourDurationBlock.style.marginLeft = '80px';
    durationBlock.appendChild(hourDurationBlock);

    // Додаємо блок для модулів
    const modulesBlock = document.createElement('div');
    modulesBlock.classList.add('modules-block');
    const modulesList = document.createElement('ul');
    for (const module of course.modules) {
        const moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }
    modulesBlock.appendChild(modulesList);
    courseBlock.appendChild(modulesBlock);

    // Додаємо блок курсу до сторінки
    document.body.appendChild(courseBlock);
}
