
document.addEventListener('DOMContentLoaded', function () {
    // Отримання ідентифікатора користувача з параметрів URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');


    // Отримання детальної інформації про користувача з API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            // Відображення детальної інформації про користувача на сторінці
            const userDetailsContainer = document.getElementById('user-details-container');
            userDetailsContainer.innerHTML = `
                <h2>User Details</h2>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Company:</strong> ${user.company.name}</p>
            `;
        })
        .catch(error => console.error('Error fetching user details:', error));

    // Отримання посилання на кнопку "Назад"
    const backButton = document.getElementById('back-button');

    // Додавання обробника події для кнопки "Назад"
    backButton.addEventListener('click', function () {
        // Повернення на попередню сторінку у історії перегляду
        window.history.back();
    });

});
