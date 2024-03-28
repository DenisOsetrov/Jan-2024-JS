// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.


let currentPage = 1;
const limitPerPage = 5;

function fetchData (skip) {
    fetch(`https://dummyjson.com/recipes?skip=${skip}&limit=${limitPerPage}`)
        .then(response => response.json())
        .then(({recipes, total, skip, limit}) => {
            const mainContainer = document.querySelector('.recipe-container');


            mainContainer.innerHTML = ''; // Очистка контейнера перед відображенням нових даних
            document.getElementById('prevButton').disabled = (currentPage === 1); // атрибут disabled для кнопки
            // "Back", якщо поточна сторінка вже 1:

            // Перевіряємо, чи є ще рецепти для відображення, і встановлюємо атрибут disabled для кнопки "Next", якщо поточна сторінка вже остання:
            document.getElementById('nextButton').disabled = ((currentPage * limitPerPage) >= total);

            recipes.forEach(recipe => {
                const recipeContainer = document.createElement('div');
                recipeContainer.classList.add('recipe-container');

                const recipeHeader = document.createElement('div');
                recipeHeader.classList.add('recipe-header');

                const recipeId = document.createElement('div');
                recipeId.classList.add('recipe-id');
                recipeId.textContent = 'Рецепт №' + recipe.id;
                recipeHeader.appendChild(recipeId);

                const recipeName = document.createElement('div');
                recipeName.classList.add('recipe-name');
                recipeName.textContent = 'Назва: "' + recipe.name + '"';
                recipeHeader.appendChild(recipeName);

                const recipeCaloriesPerServing = document.createElement('div');
                recipeCaloriesPerServing.classList.add('recipe-caloriesPerServing');
                recipeCaloriesPerServing.innerText = `${recipe.caloriesPerServing} ккал за 1 порцію`
                recipeHeader.appendChild(recipeCaloriesPerServing);

                recipeContainer.appendChild(recipeHeader);


                const recipeDetails = document.createElement('div');
                recipeDetails.classList.add('recipe-details');

                const ingredients = document.createElement('div');
                ingredients.classList.add('ingredients');

                // Додавання заголовка "Інгрідієнти:"
                const ingredientsHeader = document.createElement('h4');
                ingredientsHeader.classList.add('ingredients-header')
                ingredientsHeader.textContent = 'Інгрідієнти:';
                ingredients.appendChild(ingredientsHeader);

                const ingredientsList = document.createElement('ul');
                recipe.ingredients.forEach(ingredient => {
                    const ingredientItem = document.createElement('li');
                    ingredientItem.textContent = ingredient;
                    ingredientsList.appendChild(ingredientItem);
                });
                ingredients.appendChild(ingredientsList);
                recipeDetails.appendChild(ingredients);

                const recipeImage = document.createElement('div');
                recipeImage.classList.add('recipe-image');
                const image = document.createElement('img');
                image.src = recipe.image;
                image.alt = recipe.name;
                recipeImage.appendChild(image);
                recipeDetails.appendChild(recipeImage);

                recipeContainer.appendChild(recipeDetails);

                const instructions = document.createElement('div');
                instructions.classList.add('instructions');

                // Додавання заголовка "Інструкція для приготування:"
                const instructionsHeader = document.createElement('h4');
                instructionsHeader.classList.add('instructions-header')
                instructionsHeader.textContent = 'Інструкція для приготування:';
                instructions.appendChild(instructionsHeader);

                const instructionsList = document.createElement('ol');
                recipe.instructions.forEach(instruction => {
                    const instructionItem = document.createElement('li');
                    instructionItem.textContent = instruction;
                    instructionsList.appendChild(instructionItem);
                });
                instructions.appendChild(instructionsList);
                recipeContainer.appendChild(instructions);

                mainContainer.appendChild(recipeContainer);
            });
        })
        .catch(error => {
            console.error('Помилка отримання даних з API:', error);
        });
}

document.getElementById('nextButton').addEventListener('click', () => {
    currentPage++;
    const skip = (currentPage - 1) * limitPerPage;
    fetchData(skip);
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        const skip = (currentPage - 1) * limitPerPage;
        fetchData(skip);
    }
});

// Початкове завантаження даних
fetchData(0);






















// старе з ліміт і скіп - не працює!!!!!!!!!!
//
// const nextButton = document.getElementById('nextButton');
// const prevButton = document.getElementById('prevButton');
//
// let skip = 0;
// const limit = 10;
// let total = 50;
//
// function fetchRecipes() {
//     fetch(`https://dummyjson.com/recipes?skip=${skip}&limit=${limit}`)
//         .then(response => response.json())
//         .then(({ recipes, total }) => {
//             const mainContainer = document.querySelector('.recipe-container');
//             // mainContainer.innerHTML = ''; // Очищуємо контейнер перед додаванням нових рецептів
//
//
//             recipes.forEach(recipe => {
//                 const recipeContainer = document.createElement('div');
//                 recipeContainer.classList.add('recipe-container');
//
//                 // Створення елементів для відображення рецепту (ID, назва, калорії, інгредієнти, інструкції, зображення і т.д.)
//             const recipeHeader = document.createElement('div');
//             recipeHeader.classList.add('recipe-header');
//
//             const recipeId = document.createElement('div');
//             recipeId.classList.add('recipe-id');
//             recipeId.textContent = 'Рецепт №' + recipe.id;
//             recipeHeader.appendChild(recipeId);
//
//             const recipeName = document.createElement('div');
//             recipeName.classList.add('recipe-name');
//             recipeName.textContent = 'Назва: "' + recipe.name + '"';
//             recipeHeader.appendChild(recipeName);
//
//             const recipeCaloriesPerServing = document.createElement('div');
//             recipeCaloriesPerServing.classList.add('recipe-caloriesPerServing');
//             recipeCaloriesPerServing.innerText = `${recipe.caloriesPerServing} ккал за 1 порцію`
//             recipeHeader.appendChild(recipeCaloriesPerServing);
//
//             recipeContainer.appendChild(recipeHeader);
//
//
//             const recipeDetails = document.createElement('div');
//             recipeDetails.classList.add('recipe-details');
//
//             const ingredients = document.createElement('div');
//             ingredients.classList.add('ingredients');
//
//             // Додавання заголовка "Інгрідієнти:"
//             const ingredientsHeader = document.createElement('h4');
//             ingredientsHeader.classList.add('ingredients-header')
//             ingredientsHeader.textContent = 'Інгрідієнти:';
//             ingredients.appendChild(ingredientsHeader);
//
//             const ingredientsList = document.createElement('ul');
//             recipe.ingredients.forEach(ingredient => {
//                 const ingredientItem = document.createElement('li');
//                 ingredientItem.textContent = ingredient;
//                 ingredientsList.appendChild(ingredientItem);
//             });
//             ingredients.appendChild(ingredientsList);
//             recipeDetails.appendChild(ingredients);
//
//             const recipeImage = document.createElement('div');
//             recipeImage.classList.add('recipe-image');
//             const image = document.createElement('img');
//             image.src = recipe.image;
//             image.alt = recipe.name;
//             recipeImage.appendChild(image);
//             recipeDetails.appendChild(recipeImage);
//
//             recipeContainer.appendChild(recipeDetails);
//
//             const instructions = document.createElement('div');
//             instructions.classList.add('instructions');
//
//             // Додавання заголовка "Інструкція для приготування:"
//             const instructionsHeader = document.createElement('h4');
//             instructionsHeader.classList.add('instructions-header')
//             instructionsHeader.textContent = 'Інструкція для приготування:';
//             instructions.appendChild(instructionsHeader);
//
//             const instructionsList = document.createElement('ol');
//             recipe.instructions.forEach(instruction => {
//                 const instructionItem = document.createElement('li');
//                 instructionItem.textContent = instruction;
//                 instructionsList.appendChild(instructionItem);
//             });
//             instructions.appendChild(instructionsList);
//             recipeContainer.appendChild(instructions);
//
//                 mainContainer.appendChild(recipeContainer);
//             });
//
//
//
//
//             // Приховуємо або відображаємо кнопки пагінації в залежності від значень skip та limit
//             if (skip === 0) {
//                 prevButton.style.display = 'none';
//             } else {
//                 prevButton.style.display = 'inline-block';
//             }
//
//             if (skip + limit >= total) {
//                 nextButton.style.display = 'none';
//             } else {
//                 nextButton.style.display = 'inline-block';
//             }
//         })
//         .catch(error => {
//             console.error('Помилка отримання даних з API:', error);
//         });
// }
//
// function fetchNextRecipes() {
//     skip += limit;
//     fetchRecipes();
// }
//
// function fetchPrevRecipes() {
//     skip -= limit;
//     if (skip < 0) {
//         skip = 0;
//     }
//     fetchRecipes();
// }
//
// nextButton.addEventListener('click', fetchNextRecipes);
// prevButton.addEventListener('click', fetchPrevRecipes);
//
// fetchRecipes();


