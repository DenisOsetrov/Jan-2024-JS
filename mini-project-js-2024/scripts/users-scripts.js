
// Створюємо новий URL для отримання даних користувачів з JSONPlaceholder API
const url = new URL('https://jsonplaceholder.typicode.com/users');

// Виконуємо запит за допомогою fetch для отримання даних користувачів
fetch(url)
    .then(response => response.json()) // Парсимо відповідь сервера в форматі JSON
    .then(users => { // Обробляємо дані користувачів, які повернув сервер

        // Отримуємо лівий та правий стовпці для розміщення блоків користувачів
        const leftColumn = document.getElementById('left-column');
        const rightColumn = document.getElementById('right-column');

        // Ітеруємося по кожному користувачеві з отриманих даних
        users.forEach(user => {
            // Створюємо новий блок для кожного користувача
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block'); // Додаємо клас для стилізації

            // Створюємо блок для інформації про користувача
            const userInfo = document.createElement('div');
            userInfo.classList.add('user-info'); // Додаємо клас для стилізації

            // Створюємо елемент для відображення ID користувача
            const id = document.createElement('p');
            id.classList.add('user-id');
            id.textContent = `ID: ${user.id}`; // Встановлюємо текст ID

            // Створюємо заголовок для відображення імені користувача
            const name = document.createElement('h3');
            name.classList.add('user-name');
            name.textContent = `${user.name}`; // Встановлюємо текст імені

            // Створюємо кнопку "Details", що веде до сторінки з деталями user
            const detailsButton = document.createElement('button');
            detailsButton.textContent = 'Details'; // Встановлюємо текст кнопки
            detailsButton.onclick = () => window.location.href = `html-pages/user-details.html?data=` + JSON.stringify(user); // Обробник події для кнопки

            // Додаємо ID та ім'я до блоку інформації про user
            userInfo.appendChild(id);
            userInfo.appendChild(name);

            // Додаємо блок інформації та кнопку до блоку user
            userBlock.appendChild(userInfo);
            userBlock.appendChild(detailsButton);

            // Розподіляємо блоки користувачів між лівим та правим стовпцями по кількості, а не по парності!
            if (users.length % 2 !== 0) {
                leftColumn.appendChild(userBlock); // Якщо кількість користувачів непарна
            } else if (leftColumn.children.length <= rightColumn.children.length) {
                leftColumn.appendChild(userBlock); // Якщо лівий стовпець має менше блоків
            } else {
                rightColumn.appendChild(userBlock); // Якщо правий стовпець має менше блоків
            }
        });
    })
    .catch(error => console.error(error)); // Обробляємо помилки, якщо вони виникли під час виконання запиту
