//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної
// корзини. Для fetch беремо https://dummyjson.com/carts!!!, а не URL документації!

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(({ carts, total, skip, limit }) => {
        const mainContainer = document.getElementById('main-container'); // Отримуємо контейнер для вставки

        // Створюємо елемент для відображення загальної кількості корзин
        const totalCartsElement = document.createElement('h3');
        totalCartsElement.textContent = "Загальна кількість корзин: " + total;
        mainContainer.appendChild(totalCartsElement);

        // Цикл для кожної корзини
        carts.forEach(cart => {
            // Створюємо контейнер для корзини
            const cartContainer = document.createElement('div');
            cartContainer.classList.add('cart-container');

            // Створюємо елементи для відображення інформації про корзину
            const cartIdElement = document.createElement('p');
            cartIdElement.textContent = "Корзина ID: " + cart.id;
            cartContainer.appendChild(cartIdElement);

            const totalCostElement = document.createElement('p');
            totalCostElement.textContent = "Загальна вартість корзини: " + cart.total;
            cartContainer.appendChild(totalCostElement);

            const totalProductsElement = document.createElement('p');
            totalProductsElement.textContent = "Кількість товарів у корзині: " + cart.totalProducts;
            cartContainer.appendChild(totalProductsElement);

            // Цикл для кожного продукту в корзині
            cart.products.forEach(product => {
                // Створюємо контейнер для продукту
                const productContainer = document.createElement('div');
                productContainer.classList.add('product-container');

                // Створюємо елементи для відображення інформації про продукт
                const productNameElement = document.createElement('p');
                productNameElement.textContent = "Назва продукту: " + product.title;
                productContainer.appendChild(productNameElement);

                const priceElement = document.createElement('p');
                priceElement.textContent = "Ціна: " + product.price;
                productContainer.appendChild(priceElement);

                const quantityElement = document.createElement('p');
                quantityElement.textContent = "Кількість: " + product.quantity;
                productContainer.appendChild(quantityElement);

                const totalElement = document.createElement('p');
                totalElement.textContent = "Загальна вартість: " + product.total;
                productContainer.appendChild(totalElement);

                // Додаємо контейнер продукту до контейнера корзини
                cartContainer.appendChild(productContainer);
            });

            // Додаємо контейнер корзини до основного контейнера на сторінці
            mainContainer.appendChild(cartContainer);
        });
    })
    .catch(error => {
        console.error('Помилка отримання даних з API:', error);
    });