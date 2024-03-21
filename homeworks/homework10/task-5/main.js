// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


// функція прибирання блоку з id="text"
function hideElement() {
    const element = document.getElementById("text");

    element.style.opacity = "0";
    // element.style.display = "none"; // без opacity
}


// функція рандомної зміни кольору фону при написканні на кнопку
function performMagic() {
    // Генеруємо випадковий колір
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}
