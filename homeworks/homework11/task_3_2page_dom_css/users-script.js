// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX, де ХХХ - айді користувача)

// Отримання списку користувачів з API
document.addEventListener('DOMContentLoaded', function () {
    // Отримання списку користувачів з API
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Створення кнопок для кожного користувача
            users.forEach(user => {
                const button = document.createElement('button');
                button.textContent = `${user.id} - ${user.name}`;
                button.classList.add('user-button'); // Додаємо клас кнопки
                button.addEventListener('click', function () {
                    // Перехід на сторінку деталей користувача з відповідним id
                    window.location.href = `user-details.html?id=${user.id}`;
                });
                document.body.appendChild(button);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});