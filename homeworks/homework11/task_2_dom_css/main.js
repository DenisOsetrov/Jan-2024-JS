// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(({recipes, total, skip, limit}) => {
        const mainContainer = document.getElementById('main-container');

        // Створюємо елемент для відображення загальної кількості рецептів
        const totalRecipesElement = document.createElement('h3');
        totalRecipesElement.innerText = 'Загальна кількість рецептів: ' + total;
        mainContainer.appendChild(totalRecipesElement);

        // Цикл для кожного рецепту
        for (const recipe of recipes) {
            


        }








    })








