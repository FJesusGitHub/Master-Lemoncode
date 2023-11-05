// 1. Array operations

let array = ["Hello", 432, true];

// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ([first]) => first; // Implementation here.
console.log(head(array));

// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([first, ...rest]) => rest;
console.log(tail(array));

// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (array) => array.slice(0, -1);
console.log(init(array));

// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (array) => array.pop();
console.log(last(["Hello", 432, true]));


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos.
//  Utiliza rest / spread operators.

const concat = (a, b) => [...a, ...b];
let array2 = [34, 56, false];
console.log(concat(array, array2));

// Opcional:
// Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const multConcat = (...args) => args.reduce((result, currentArray) => [...result, ...currentArray]);

let array3 = [212, "Jason", true, true];
console.log(multConcat(array, array2, array3));


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//



// 3. Clone Merge
// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone(source) {
    let copy = { ...source };
    console.log(`¿Es el mismo objeto? ${source === copy}`);
    return copy;
};

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};
console.log(clone(eso2o));

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target,
//  devuelva un nuevo objeto con todas las propiedades de target y de source,
//  y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:

function merge(source, target) {
    newObject = clone(target);
    for (let prop in source) {
        if (source.hasOwnProperty(prop)) {
            newObject[prop] = source[prop]
        };
    };
    return newObject
};

// Por ejemplo, dados estos 2 objetos:
let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
let b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log("Los objetos mezclados quedan así:", merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}


//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// 4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
//  Un libro es un objeto con title como string y isRead como booleano.
//  En caso de no existir el libro devolver false 
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
// Ejemplo
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

function isBookRead(books, titleToSearch) {
    for (let book of books) {
        if (book.title === titleToSearch) {
            return book.isRead;
        };
    };
    return "I haven't read that book"
};

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// Opcional
// Utiliza Typescript para añadir los tipos adecuados.

// interface Book {
//     title: string;
//     isRead: boolean;
// }

// const books: Book[] = [
//     { title: "Harry Potter y la piedra filosofal", isRead: true },
//     { title: "Canción de hielo y fuego", isRead: false },
//     { title: "Devastación", isRead: true },
// ];

// function isBookRead(books: Book[], titleToSearch: string): boolean | string {
//     for (let book of books) {
//         if (book.title === titleToSearch) {
//             return book.isRead;
//         }
//     }
//     return "I haven't read that book";
// }


// 5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
// El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".
// Ejemplo de uso

class SlotMachine {
    constructor() {
        this.counter = 0;
    }

    play() {
        this.counter++;
        let randomBoolean1 = Math.random() >= 0.5;
        let randomBoolean2 = Math.random() >= 0.5;
        let randomBoolean3 = Math.random() >= 0.5;

        if (randomBoolean1 && randomBoolean2 && randomBoolean3) {

            console.log(`Congratulations!!!. You won ${this.counter} coins!!`)
            this.counter = 0;
        }
        else {
            console.log("Good luck next time!!")
        }
    };
};

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play(); 
machine1.play(); 
machine1.play(); 