
//- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
// Для fetch беремо https://dummyjson.com/carts!!!, а не URL документації!

fetch('https://dummyjson.com/carts')
    .then(response => response.json())
    .then(({ carts, total, skip, limit }) => {
        // Виводимо загальну кількість корзин
        document.write("<h2>Загальна кількість корзин: " + total + "</h2>");

        // Цикл для кожної корзини
        carts.forEach(cart => {
            document.write("<h3>Корзина ID: " + cart.id + "</h3>");
            document.write("<h4>Загальна вартість корзини: " + cart.total + "</h4>");
            document.write("<p>Кількість товарів у корзині: " + cart.totalProducts + "</p>");

            // Цикл для кожного продукту в корзині
            cart.products.forEach(product => {
                document.write("<p>Назва продукту: " + product.title + "</p>");
                document.write("<p>Ціна: " + product.price + "</p>");
                document.write("<p>Кількість: " + product.quantity + "</p>");
                document.write("<p>Загальна вартість: " + product.total + "</p>");
                // Додаткові дані про продукт
            });

            document.write("<hr>"); // Роздільник між корзинами
        });
    })
    .catch(error => {
        console.error('Помилка отримання даних з API:', error);
    });
