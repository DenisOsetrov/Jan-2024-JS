// зробити масив на 100 об'єктів та дві кнопки: prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const locations = [
    {
        "title": "м. Київ",
        "type": "city"
    },
    {
        "title": "Житомирська область",
        "type": "oblast"
    },
    {
        "title": "Харківська область",
        "type": "oblast"
    },
    {
        "title": "Вінницька область",
        "type": "oblast"
    },
    {
        "title": "Чернігівська область",
        "type": "oblast"
    },
    {
        "title": "Дніпропетровська область",
        "type": "oblast"
    },
    {
        "title": "Черкаська область",
        "type": "oblast"
    },
    {
        "title": "Волинська область",
        "type": "oblast"
    },
    {
        "title": "Київська область",
        "type": "oblast"
    },
    {
        "title": "Миколаївська область",
        "type": "oblast"
    },
    {
        "title": "Рівненська область",
        "type": "oblast"
    },
    {
        "title": "Сумська область",
        "type": "oblast"
    },
    {
        "title": "Тернопільська область",
        "type": "oblast"
    },
    {
        "title": "Краматорський район",
        "type": "district"
    },
    {
        "title": "Кіровоградська область",
        "type": "oblast"
    },
    {
        "title": "Хмельницька область",
        "type": "oblast"
    },
    {
        "title": "Запорізька область",
        "type": "oblast"
    },
    {
        "title": "Одеська область",
        "type": "oblast"
    },
    {
        "title": "Полтавська область",
        "type": "oblast"
    },
    {
        "title": "Львівська область",
        "type": "oblast"
    },
    {
        "title": "м. Кривий Ріг",
        "type": "city"
    },
    {
        "title": "Криворізька територіальна громада",
        "type": "community"
    },
    {
        "title": "Івано-Франківська область",
        "type": "oblast"
    },
    {
        "title": "Чернівецька область",
        "type": "oblast"
    },
    {
        "title": "Ізюмський район",
        "type": "district"
    },
    {
        "title": "Бахмутська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Васильків",
        "type": "city"
    },
    {
        "title": "Васильківська територіальна громада",
        "type": "community"
    },
    {
        "title": "Білоцерківська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Біла Церква",
        "type": "city"
    },
    {
        "title": "Донецька область",
        "type": "oblast"
    },
    {
        "title": "Покровський район",
        "type": "district"
    },
    {
        "title": "Уманська територіальна громада",
        "type": "community"
    },
    {
        "title": "Бахмутський район",
        "type": "district"
    },
    {
        "title": "Закарпатська область",
        "type": "oblast"
    },
    {
        "title": "Лубенська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Лубни",
        "type": "city"
    },
    {
        "title": "Полтавська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Полтава",
        "type": "city"
    },
    {
        "title": "м. Старокостянтинів",
        "type": "city"
    },
    {
        "title": "Старокостянтинівська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Миколаїв",
        "type": "city"
    },
    {
        "title": "Миколаївська територіальна громада",
        "type": "community"
    },
    {
        "title": "Торецька територіальна громада",
        "type": "community"
    },
    {
        "title": "Кропивницький район",
        "type": "district"
    },
    {
        "title": "Першотравенська територіальна громада",
        "type": "community"
    },
    {
        "title": "Нікопольська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Нікополь",
        "type": "city"
    },
    {
        "title": "м. Першотравенськ",
        "type": "city"
    },
    {
        "title": "Одеський район",
        "type": "district"
    },
    {
        "title": "м. Черкаси",
        "type": "city"
    },
    {
        "title": "Черкаська територіальна громада",
        "type": "community"
    },
    {
        "title": "Добропільська територіальна громада",
        "type": "community"
    },
    {
        "title": "Херсонська область",
        "type": "oblast"
    },
    {
        "title": "Сумська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Суми",
        "type": "city"
    },
    {
        "title": "Первомайська територіальна громада",
        "type": "community"
    },
    {
        "title": "Краматорська територіальна громада",
        "type": "community"
    },
    {
        "title": "Макарівська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Краматорськ",
        "type": "city"
    },
    {
        "title": "Миргородська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Бориспіль",
        "type": "city"
    },
    {
        "title": "Броварська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Миргород",
        "type": "city"
    },
    {
        "title": "Бориспільська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Бровари",
        "type": "city"
    },
    {
        "title": "м. Вознесенськ",
        "type": "city"
    },
    {
        "title": "Коростенський район",
        "type": "district"
    },
    {
        "title": "м. Первомайськ",
        "type": "city"
    },
    {
        "title": "Миронівська територіальна громада",
        "type": "community"
    },
    {
        "title": "Вознесенський район",
        "type": "district"
    },
    {
        "title": "Синельниківський район",
        "type": "district"
    },
    {
        "title": "Фастівська територіальна громада",
        "type": "community"
    },
    {
        "title": "Вознесенська територіальна громада",
        "type": "community"
    },
    {
        "title": "Житомирський район",
        "type": "district"
    },
    {
        "title": "Дружківська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Фастів",
        "type": "city"
    },
    {
        "title": "Слов'янська територіальна громада",
        "type": "community"
    },
    {
        "title": "Запорізький район",
        "type": "district"
    },
    {
        "title": "м. Слов'янськ",
        "type": "city"
    },
    {
        "title": "м. Кременчук",
        "type": "city"
    },
    {
        "title": "Ніжинський район",
        "type": "district"
    },
    {
        "title": "м. Ватутіне",
        "type": "city"
    },
    {
        "title": "Ватутінська територіальна громада",
        "type": "community"
    },
    {
        "title": "Кременчуцька територіальна громада",
        "type": "community"
    },
    {
        "title": "Пологівський район",
        "type": "district"
    },
    {
        "title": "Дніпровська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Дніпро",
        "type": "city"
    },
    {
        "title": "Лозівський район",
        "type": "district"
    },
    {
        "title": "Покровська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Обухів",
        "type": "city"
    },
    {
        "title": "Узинська територіальна громада",
        "type": "community"
    },
    {
        "title": "Шепетівський район",
        "type": "district"
    },
    {
        "title": "Пирятинська територіальна громада",
        "type": "community"
    },
    {
        "title": "Сумський район",
        "type": "district"
    },
    {
        "title": "Харківський район",
        "type": "district"
    },
    {
        "title": "Жашківська територіальна громада",
        "type": "community"
    },
    {
        "title": "м. Пирятин",
        "type": "city"
    },
    {
        "title": "Павлоградський район",
        "type": "district"
    },
    {
        "title": "Голованівський район",
        "type": "district"
    }
];



let page = 1;
const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.addEventListener('click', () => handler(--page));
next.addEventListener('click', () => handler(++page));

handler(page);

function handler(page, limit = 10) {
    const locationsContainer = document.getElementById('locationsContainer');
    locationsContainer.innerHTML = ''; // Очищаємо контейнер перед додаванням нових об'єктів

    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, locations.length);

    prev.disabled = page === 1; // Відключаємо кнопку prev, якщо ми на першій сторінці
    next.disabled = endIndex >= locations.length; // Відключаємо кнопку next, якщо ми на останній сторінці

    for (let i = startIndex; i < endIndex; i++) {
        const location = locations[i];
        const item = document.createElement('div');
        item.classList.add('item');
        item.innerHTML = `<div><h3>Title: </h3>${location.title}</div><div><h3>Type: </h3>${location.type}</div>`;
        locationsContainer.appendChild(item);
    }
}
// роз'яснення нижче після старого варіанту!!!


// ****************************************************************************************************
// ***************************************  старий варіант  *******************************************
// let page = 1;
//
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
//
// prev.addEventListener('click', () => handler(page -= 1));
// next.addEventListener('click', () => handler(page += 1));
// handler(page);
//
// function handler(page, limit = 10) {
//     const locationsContainer = document.getElementById('locationsContainer');
//
//     const newArr = [];
//     const startIndex = (page - 1) * limit;
//     let endIndex = page * limit;
//
//     if (endIndex < locations.length) {
//         next.removeAttribute('disabled');
//     } else {
//         next.setAttribute('disabled', 'disabled');
//         endIndex = locations.length;
//     }
//     if (startIndex > 0) {
//         prev.removeAttribute('disabled');
//     } else {
//         prev.setAttribute('disabled', 'disabled');
//     }
//
//     for (let i = startIndex; i < endIndex; i++) {
//         const location = locations[i];
//         const item = document.createElement('div');
//         const title = document.createElement('div');
//         const type = document.createElement('div');
//
//         item.classList.add('locationsContainer', 'item');
//
//         title.innerText = `Title: ${location.title}`;
//         type.innerText = `Type: ${location.type}`;
//
//         item.append(title, type);
//         newArr.push(item);
//     }
//     locationsContainer.replaceChildren(...newArr);
// }



// Роз'яснення по 1 коду! для нагадування.
// let page = 1; - Ця змінна визначає поточну сторінку. На початку вона встановлюється на першу сторінку.
//
// const prev = document.getElementById('prev'); та const next = document.getElementById('next'); - Отримання посилань на кнопки "Prev" і "Next" за їх ідентифікаторами.
//
// prev.addEventListener('click', () => handler(--page)); та next.addEventListener('click', () => handler(++page)); - Додає обробники подій для кнопок "Prev" і "Next", які викликають функцію handler з зменшенням або збільшенням значення змінної page.
//
// handler(page); - Виклик функції handler з поточною сторінкою page.
//
// function handler(page, limit = 10) { - Оголошення функції handler, яка приймає номер сторінки та опціональний параметр limit, який визначає кількість об'єктів на сторінці (за замовчуванням 10).
//
// const locationsContainer = document.getElementById('locationsContainer'); - Отримання посилання на контейнер, в якому будуть відображені місця.
//
// locationsContainer.innerHTML = ''; - Очищення контейнера перед додаванням нових об'єктів. Це дозволяє відображати новий вміст на кожній сторінці без додавання до вже існуючого вмісту.
//
// const startIndex = (page - 1) * limit; та const endIndex = Math.min(startIndex + limit, locations.length); - Визначення початкового та кінцевого індексу об'єктів, які будуть відображені на поточній сторінці.
//
// prev.disabled = page === 1; та next.disabled = endIndex >= locations.length; - Встановлення властивості disabled для кнопок "Prev" і "Next". Кнопка "Prev" буде відключена, якщо ми знаходимося на першій сторінці, і кнопка "Next" буде відключена, якщо ми знаходимося на останній сторінці або перевищили загальну кількість об'єктів.
//
// for (let i = startIndex; i < endIndex; i++) { - Цикл, який проходиться по об'єктах, які будуть відображені на поточній сторінці.
//
// const location = locations[i]; - Отримання об'єкта місця за його індексом.
//
// const item = document.createElement('div'); - Створення нового елементу div для представлення об'єкта місця.
//
// item.classList.add('item'); - Додавання класу 'item' до створеного елементу.
//
// item.innerHTML = <div>Title: ${location.title}</div><div>Type: ${location.type}</div>; - Встановлення вмісту створеного елементу div на основі властивостей об'єкта місця.
//
// locationsContainer.appendChild(item); - Додавання створеного елементу до контейнера, щоб він відобразився на сторінці.