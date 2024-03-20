document.addEventListener('DOMContentLoaded', function() {
    // Отримуємо список сесій з локального сховища
    const jsonSessions = localStorage.getItem('sessions');
    const sessions = jsonSessions ? JSON.parse(jsonSessions) : [];

    // Знаходимо контейнер для списку сесій
    const sessionsListContainer = document.getElementById('sessionsList');

    // Побудова DOM-структури для кожної сесії
    sessions.forEach(session => {
        // Створюємо новий елемент div для кожної сесії
        const sessionDiv = document.createElement('div');
        sessionDiv.classList.add('session');

        // Додаємо дані сесії до параграфів та додаємо їх до div
        const dateParagraph = document.createElement('p');
        dateParagraph.innerText = 'Date: ' + session.date;
        sessionDiv.appendChild(dateParagraph);

        const userLanguageParagraph = document.createElement('p');
        userLanguageParagraph.innerText = 'User Language: ' + session.userLanguage;
        sessionDiv.appendChild(userLanguageParagraph);

        const userAgentParagraph = document.createElement('p');
        userAgentParagraph.innerText = 'User Agent: ' + session.userAgentInfo;
        sessionDiv.appendChild(userAgentParagraph);

        // Додаємо div з даними сесії до контейнера для списку сесій
        sessionsListContainer.appendChild(sessionDiv);
    });
});
// Очищаємо всі дані збережені в локальному сховищі. Усі збережені дані будуть втрачені.
// localStorage.clear();



///*******************************************************************************************************
///*******************************************************************************************************

// Групування коду за побудовою, наповненням, додаванням елементів. Код такий же!!!


// // Чекаємо, поки весь DOM буде завантажений, перш ніж почати виконання скрипту
// document.addEventListener('DOMContentLoaded', function() {
//
//     // Отримуємо список сесій з локального сховища, які ми зробили з попередньої сторінки html
//     const jsonSessions = localStorage.getItem('sessions');
//     const sessions = jsonSessions ? JSON.parse(jsonSessions) : [];
//
//     // Знаходимо контейнер div за класом для списку сесій з index.html
//     const sessionsListContainer = document.getElementById('sessionsList');
//
//     // Побудова DOM-структури для кожної сесії
//     sessions.forEach(session => {
//         // Створюємо новий елемент div для кожної сесії
//         const sessionDiv = document.createElement('div');
//
//         // Створюємо елементи paragraph для дати, мови користувача та інформації про агент користувача
//         const dateParagraph = document.createElement('p');
//         const userLanguageParagraph = document.createElement('p');
//         const userAgentParagraph = document.createElement('p');
//
//         // Встановлюємо текстовий вміст для кожного елемента paragraph
//         dateParagraph.innerText = 'Date: ' + session.date;
//         userLanguageParagraph.innerText = 'User Language: ' + session.userLanguage;
//         userAgentParagraph.innerText = 'User Agent: ' + session.userAgentInfo;
//
//         // Додаємо клас "session" до кожного елемента div, щоб визначити стилі для сесій
//         sessionDiv.classList.add('session');
//
//         // Додаємо кожен елемент paragraph до елемента div
//         sessionDiv.appendChild(dateParagraph);
//         sessionDiv.appendChild(userLanguageParagraph);
//         sessionDiv.appendChild(userAgentParagraph);
//
//         // Додаємо елемент div, який представляє сесію, до контейнера списку сесій
//         sessionsListContainer.appendChild(sessionDiv);
//     });
// });