// task 1.1
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// iter - Enter

document.write(`<div> <h3>Task 1.1.</h3>`)
document.write(`<div style="display: flex">`);
let colors1 = ['yellow', 'gold', 'orange', 'darkorange', 'orangered', 'rosybrown', 'coral', 'red', 'darkred', 'crimson'];
for (const color of colors1) {
    document.write(
        `<div>
             <h3 style="color: ${color}; margin: 6px">${color}</h3>
        </div>`
    );
}
document.write(`</div>`);
document.write(`</div>`);


// task 1.2
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
document.write(`<div> <h3>Task 1.2.</h3>`);
document.write(`<div style="display: flex">`)
let colors2 = ['lightblue', 'powderblue', 'lightseagreen', 'lightslategrey', 'darkblue', 'blue', 'purple', 'indigo', 'violet', 'darkviolet'];
for (let i = 0; i < colors2.length; i++) {
    const color = colors2[i];
    console.log(i);
    document.write(
        `<div>
             <h3 style="color: ${color}; margin: 5px"> ${color} - ${i}
             </h3>
         </div>`)
}
document.write(`</div>`);
document.write(`</div>`);


// Або так - коротке виконання: Task 1.1. i Task 1.2.
for (let i = 0; i < 10; i++) {
    // document.write(`<div>Block</div>`)            // Виводить 10 div з написом
    document.write(`<div>Block - ${i}</div>`)      // Виводить 10 div з написом і індексом масива
}


// task 1.3.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<div>This is my block! They should be 20!</div>`)
    // console.log(i);
    i++;
}

// task 1.4.
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i2 = 0;
while (i2 < 20) {
    document.write(`<div>Block has number - ${i2}</div>`)
    console.log(i2);
    i2++;
}







