// Отримуємо кнопку "Назад" та додаємо обробник події для повернення на попередню сторінку
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', () => {
    window.history.back();
});

// Отримуємо кнопку "Очистити пости" та додаємо обробник події для очищення списку постів
const clearPostsButton = document.getElementById('clear-posts-button');
clearPostsButton.addEventListener('click', () => {
    userPostsList.innerHTML = ''; // Очищаємо усі пости
});

// Отримуємо параметри URL та розпаковуємо дані користувача з JSON
const urlParams = new URLSearchParams(window.location.search);
const data = JSON.parse(urlParams.get('data'));

// Отримуємо контейнер для відображення даних користувача та створюємо та додаємо елементи з інформацією
const container = document.getElementById('user-details-container');
const id = document.createElement('p');
id.textContent = `ID: ${data.id}`;
const name = document.createElement('p');
name.textContent = `Name: ${data.name}`;
const username = document.createElement('p');
username.textContent = `Username: ${data.username}`;
const email = document.createElement('p');
email.textContent = `Email: ${data.email}`;
const phone = document.createElement('p');
phone.textContent = `Phone: ${data.phone}`;
const website = document.createElement('p');
website.textContent = `Website: ${data.website}`;
const address = document.createElement('p');
address.textContent = `Address: ${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;
const company = document.createElement('p');
company.textContent = `Company: ${data.company.name}, ${data.company.catchPhrase}, ${data.company.bs}`;

container.appendChild(id);
container.appendChild(name);
container.appendChild(username);
container.appendChild(email);
container.appendChild(phone);
container.appendChild(website);
container.appendChild(address);
container.appendChild(company);

// Отримуємо кнопку "Пости користувача" та список для відображення постів
const userPostsButton = document.getElementById('user-posts-button');
const userPostsList = document.getElementById('user-posts-list');

// Додаємо обробник події для завантаження постів користувача та відображення їх у списку
userPostsButton.addEventListener('click', () => {
    clearPostsButton.disabled = false; // Робимо кнопку "Очистити пости" активною
    fetch(`https://jsonplaceholder.typicode.com/users/${data.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            userPostsList.innerHTML = ''; // Очищаємо список постів перед завантаженням нових
            posts.forEach(post => {
                const li = document.createElement('li');
                li.classList.add('li-a-style');
                const postLink = document.createElement('a');
                postLink.href = `post-details.html?data=${JSON.stringify(post)}`;
                postLink.textContent = post.title;
                li.appendChild(postLink);
                userPostsList.appendChild(li);
            });
        })
        .catch(error => console.error(error)); // Обробляємо помилки під час завантаження постів
});