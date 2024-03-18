// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// звичайний варіант
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    // console.log(this);    // при використанні ф-ції конструктора створює об'єкт з усіма ключами
}
// new User(1,'Max', 'Li', 'xxx@com', 123);


// зі змінним id
// let id = 1;
//
// function User(name, surname, email, phone) {
//     this.id = id++;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     console.log(this);
// }

// new User('Tom', 'So', 'zzz@com', 2323);

//****************************************************************************************
//****************************************************************************************

// створити пустий масив, наповнити його 10 об'єктами new User(....)

// звичайний варіант наповнення масису через функцію конструктор
// const users = [
//     new User('Maksym', 'Gnedenko', 'feden@gmail.com', '+38097453323'),
//     new User('Tamara', 'Gnedenko', 'rrr@gmail.com', '+380974533234'),
//     new User('Oksana', 'Gnedenko', 'uyyy@gmail.com', '+38097453323'),
//     new User('Dina', 'Gnedenko', 'kjhkj@gmail.com', '+38097453323'),
//     new User('Dima', 'Gnedenko', 'hgfh@gmail.com', '+38097453323'),
//     new User('Anna', 'Gnedenko', 'hgv@gmail.com', '+38097453323'),
//     new User('Artem', 'Gnedenko', 'fds@gmail.com', '+38097453323'),
//     new User('Alina', 'Gnedenko', 'sdfsfd@gmail.com', '+38097453323'),
//     new User('Inna', 'Gnedenko', 'gdfsff@gmail.com', '+38097453323'),
//     new User('Alyona', 'Gnedenko', 'fdfsfd@gmail.com', '+38097453323'),
// ];

const users = [];
for (let i = 0; i < 10; i++) {
    users.push(new User(i+1, `Name${(i+1)*10}`, `Surname${(i+1)*100}`, `okten@${i}.com`, 8099223310+i));
    // users.push(new User(`id:${i+1}`,`Name${i+1}`,`Surname${(i+1)}`, `okten@${i+100}.com`, `+38099223310${i+1}`));
}
console.log(users);


// наповнюємо масив значеннями фунції конструктора рандомними значеннями
// const users = [];
//
// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let i = 0; i < 10; i++) {
//     const id = i + 1;
//     const name = `Name${generateRandomNumber(1000, 9999)}`;
//     const surname = `Surname${generateRandomNumber(100, 999)}`;
//     const email = `${surname.toLowerCase()}@okten.com`;
//     const phone = `+380${generateRandomNumber(100000000, 999999999)}`;
//
//     users.push(new User(id, name, surname, email, phone));
// }
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let doubleIdUsers = users.filter(user => user.id % 2 ===0);
console.log(doubleIdUsers);



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortUsers = users.sort((a, b) => b.id - a.id);                 // спадання!!!
let sortUsers = users.sort((a, b) => a.id - b.id);   // зростання!!!
console.log(sortUsers);



//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
     // id, name, surname , email, phone, order  --- викликаємо Alt+Insert --- i будуємо конструктор
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}



// створити пустий масив, наповнити його 10 об'єктами Client
const clientsArr = [];
for (let i = 0; i < 10; i++) {
    clientsArr.push(new Client(i+1, `name${i+1}`, `surname${i+1}`, `email${i+10}`, `+38067232323${i+1}`, ['car', 'apple', 'doll', 'machine', 'pen', 'bolt', 'table', 'lamp', 'mouse', 'telephone']));
}
console.log(clientsArr);


// створюємо і наповнюємо новими об'єктами масив. В масиві ітеруємо підмасив і динамічно додаємо елементи!!!
// for (let i = 0; i < 10; i++) {
//     const orderId = i + 1;
//     const client = new Client(orderId, `Name${orderId}`, `Surname${orderId}`, `client${orderId}@example.com`, `+38067232323${orderId}`, []);
//
//     // Пушимо різну кількість товарів в залежності від id
//     for (let j = 0; j < orderId; j++) {
//         client.order.push(`Product${orderId}${String.fromCharCode(65 + j)}`);
//     }
//     clientsArr.push(client);
// }
// console.log(clientsArr);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// масив для перевірки sort()!!!
// const clientsArr = [
//     new Client(1, 'Іван', 'Іванов', 'ivan@example.com', '+380971234567', ['яблука', 'груші']),
//     new Client(2, 'Марія', 'Петренко', 'maria@example.com', '+380971234568', ['банани', 'помідори', 'огірки']),
//     new Client(3, 'Петро', 'Петров', 'petro@example.com', '+380971234569', ['апельсини', 'броколі', 'цибуля', 'картопля']),
//     new Client(4, 'Ольга', 'Олексіївна', 'olga@example.com', '+380971234570', ['вишні', 'персики', 'морква']),
//     new Client(5, 'Василь', 'Васильович', 'vasyl@example.com', '+380971234571', ['гранати', 'кавун', 'кабачок']),
//     new Client(6, 'Наталія', 'Наталіївна', 'natalia@example.com', '+380971234572', ['абрикоси', 'ківі', 'салат']),
//     new Client(7, 'Олена', 'Олександрівна', 'olena@example.com', '+380971234573', ['черешні', 'апельсини', 'баклажан']),
//     new Client(8, 'Михайло', 'Михайлович', 'mikhail@example.com', '+380971234574', ['сливи', 'мандарини']),
//     new Client(9, 'Тетяна', 'Тетянівна', 'tetyana@example.com', '+380971234575', ['яблука', 'помідори', 'цибуля', 'картопля']),
//     new Client(10, 'Олександр', 'Олександрович', 'oleksandr@example.com', '+380971234576', ['груші', 'апельсини', 'морква', 'буряк'])
// ];
let sortClientArr = clientsArr.sort((a, b) => a.order.length - b.order.length);
console.log(sortClientArr);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = [];

        this.drive = () => console.log(`Їдемо зі швидкістю ${maxSpeed} на годину!`);

        // просто вивели інформацію про автомобіль
        // this.info = () => console.log(`Model: ${this.model}, Producer: ${this.producer}, Year: ${this.year}, Max Speed: ${this.maxSpeed}, Volume: ${this.volume}`);

        // динамічно вивели всі ключі з інформацією про автомобіль
        this.info = function ()  {
            console.log(`Інформацію про машину оновлено!`)
            for (const key in this) {
                if (typeof this[key] !== "function")     // Перевірка, чи не є ключ функцією
                console.log(`${key}`);
            }
        }

        this.increaseMaxSpeed = (newSpeed) => {
            let maxSpeedValue = 300;    // вказуємо максимально допустиме значення швидкості!
            let speed = this.maxSpeed + newSpeed;
            if (speed < 0) {
                this.maxSpeed = 0;              // Усуваємо випадок від'ємної швидкості, переводимо до 0
            }
            else if (speed > maxSpeedValue) {
                this.maxSpeed = maxSpeedValue   // вказуємо, щоб не перевищувало макс. швидкості
            }
                else {
                    this.maxSpeed = speed;
                }
            console.log(`Швидкість збільшена до: ${this.maxSpeed} км/год`)
        }


        this.changeYear = (newValue) => {
            this.year = newValue;
            console.log(`Рік випуску змінено на: ${this.year}`);
            }

        // встановлюємо лише 1 водія
        // this.addDriver = (driver) => {
        //     this.driver = driver;
        // }

        this.addDriver = function (driver) {
            this.driver.push(driver);
            console.log(`Водія на ім'я ${driver.name} успішно додано до автомобіля ${this.model}`)
        }

    // Оголошуємо клас Driver, який відповідає за водіїв
    // Функцію Driver краще визначити поза класом Car, оскільки це є окремою сутністю!
//     function Driver(name, age, experience) {
//         this.name = name;     // Ім'я водія
//         this.age = age;       // Вік водія
//         this.experience = experience;   // Досвід водія
//     }
//
//     // Функція для додавання водія до автомобіля
//     this.addDriver = function(driver) {
//         if (driver instanceof Driver) { // Перевіряємо, чи переданий об'єкт є екземпляром класу Driver
//             this.driver.push(driver); // Додаємо водія до списку водіїв автомобіля
//             console.log(`Водія на ім'я ${driver.name} успішно додано до автомобіля ${this.model}`);
//         } else {
//             console.log('Invalid driver object'); // Виводимо повідомлення про помилку, якщо переданий об'єкт не є водієм
//         }
//     }
//
// // Створюємо екземпляр класу Driver
//     const driver1 = new Driver('Jimi', 'Shon', 35, '15 years');
// // Додаємо водія до автомобіля
//     car1.addDriver(driver1);

}


let car1 = new Car('X5', 'BMW', '2024', 60, 5500);
console.log('*****************Info drive!*****************')
car1.drive();

console.log('******************Info car!******************')
car1.info();

console.log('**********Info increase Max Speed!***********')
car1.increaseMaxSpeed(230);
car1.info();

console.log('***************Info new year!****************')
car1.changeYear(2015);
car1.info();

console.log('**********Info for add new driver!***********')
const driver1 = {name: 'Jimi', surname: 'Shon', age: 35, skills: ['license A', 'license B', 'license C', 'Boxer']};
car1.addDriver(driver1);
car1.info();

console.log('***************driver array*****************')
console.log(car1.driver)



//*******************************************************************************************
//*******************************************************************************************
//*******************************************************************************************
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//********************************************************************************************
//********************************************************************************************
//********************************************************************************************


class CarClass {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = [];
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину!`);
    }

    info() {
        console.log(`Інформацію про машину оновлено!`);
        for (const key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        const maxSpeedValue = 300;
        let speed = this.maxSpeed + newSpeed;
        if (speed < 0) {
            this.maxSpeed = 0;
        } else if (speed > maxSpeedValue) {
            this.maxSpeed = maxSpeedValue;
        } else {
            this.maxSpeed = speed;
        }
        console.log(`Швидкість збільшена до: ${this.maxSpeed} км/год`);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(`Рік випуску змінено на: ${this.year}`);
    }

    addDriver(driver) {
        this.driver.push(driver);
        console.log(`Водія на ім'я ${driver.name} успішно додано до автомобіля ${this.model}`);
    }
}

class Driver {
    constructor(name,surname, age, experience, skills) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.experience = experience;
        this.skills =  skills || [];
    }
}

const driver2 = new Driver('Tom', 'Cruz', 45, '15 years', ['license A', 'license B', 'license C', 'Boxer']);
const car2 = new Car('X3', 'BMW', '2020', 90, 3500);
car2.addDriver(driver2);
car2.info();
console.log(driver2.name, driver2.surname, driver2.age, driver2.experience, driver2.skills);
console.log(`${driver2.name} ${driver2.surname}, ${driver2.age} years old, ${driver2.experience} of experience. Skills: ${driver2.skills.join(', ')}`);




//*************************************************************************************************************
//*************************************************************************************************************
//*************************************************************************************************************


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// використовуємо функцію конструктор для Попелюшки
function Cinderella (name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}


//  -----------------v1---------------
// // Створюємо масив для зберігання попелюшок
// let cinderellas = [];
//
// // Додаємо 10 попелюшок до масиву
// for (let i = 1; i <= 10; i++) {
//     let name = `Cinderella ${i}`; // Генеруємо унікальне ім'я для кожної попелюшки
//     let age = Math.floor(Math.random() * 20) + 18; // Генеруємо випадковий вік від 18 до 37 років
//     let footSize = Math.floor(Math.random() * 5) + 35; // Генеруємо випадковий розмір ноги від 35 до 39
//
//     // Створюємо нову попелюшку і додаємо її до масиву
//     let cinderella = new Cinderella(name, age, footSize);
//     cinderellas.push(cinderella);
// }
// console.log(cinderellas); // масив попелюшок


// ------------------v2-----------------
// // Статичний масив з іменами попелюшок
// const names = ['Anna', 'Bella', 'Catherine', 'Diana', 'Elena', 'Fiona', 'Grace', 'Hannah', 'Isabella', 'Julia'];
//
// // Створюємо масив попелюшок, використовуючи функцію map для створення нового екземпляру Cinderella для кожного імені
// const cinderellas = names.map(name => new Cinderella(name, Math.floor(Math.random() * 20) + 18, Math.floor(Math.random() * 5) + 35));
//
// console.log(cinderellas); // масив попелюшок


// -------------------v3------------------
// Створюємо масив попелюшок за допомогою створення кожного екземпляру окремо
const cinderellas = [
    new Cinderella('Anna', 18, 36),
    new Cinderella('Bella', 19, 37),
    new Cinderella('Catherine', 20, 38),
    new Cinderella('Diana', 21, 39),
    new Cinderella('Elena', 22, 40),
    new Cinderella('Fiona', 23, 41),
    new Cinderella('Grace', 24, 42),
    new Cinderella('Hannah', 25, 43),
    new Cinderella('Isabella', 26, 44),
    new Cinderella('Julia', 27, 45)
];

console.log(cinderellas);



// ----------------------------------------------------------------------------------
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince  {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}

const prince = new Prince('Robert', 42, 37);


//-------------------------------------------------------------------------------------
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        prince.princesa = cinderella;
        break;     // зупиняємо пошук Попелюшки!
    }
}
console.log(prince)


//---------------------------------------------------------------------------------------
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

prince.girlfriend = cinderellas.find(item => item.footSize === prince.shoeSize);
console.log(prince);




// виконання з перевіркою
let foundCinderella;
for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoeSize) {
        foundCinderella = cinderella;
        break;            // Зупиняємо цикл, якщо знайдено 1-у попелюшку
    }
}

if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов свою попелюшку! Це - ${foundCinderella.name}!`);
} else {
    console.log(`Принц ${prince.name} буде шукати далі!`);
}


// Також можемо використати метод масиву find з перевіркою!!!
const foundCinderellaBySize = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);

if (foundCinderellaBySize) {
    console.log(`${prince.name} знайшов свою попелюшку! Це - ${foundCinderellaBySize.name}!`);
} else {
    console.log(`${prince.name} не впорався з завданням!`);
}



