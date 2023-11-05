// Biggest Word
// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
//  En caso de haber varias con longitud máxima que devuelva siempre la primera. 
//  Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.
// TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

function biggestWord(phrase) {
    let words = phrase.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        };
    };
    console.log("La primera palabra mas larga de la frase es:")
    return longestWord;
};
console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// Values
// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

function values(obj) {
    const values = [...Object.values(obj)];
    return values;
};
console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// Califications
// NOTA IMPORTANTE: Realiza primero el ejercicio "Values".
// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
};

// Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo el sistema de calificación español:

// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4


function printAverage(classResults) {
    const calificationsArray = (values(classResults));
    const initialValue = 0;
    const sumWithInitial = calificationsArray.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    const classAverage = sumWithInitial / calificationsArray.length;

    if (classAverage === 10) {
        return "La media de la clase es de Matrícula de Honor"
    }
    else if (classAverage >= 9 && classAverage < 10) {
        return "La media de la clase es de Sobresaliente"
    }
    else if (classAverage >= 7 && classAverage < 9) {
        return "La media de la clase es de Notable"
    }
    else if (classAverage >= 6 && classAverage < 7) {
        return "La media de la clase es de Bien"
    }
    else if (classAverage >= 5 && classAverage < 6) {
        return "La media de la clase es de Suficiente"
    }
    else if (classAverage >= 4 && classAverage < 5) {
        return "La media de la clase es de Insuficiente"
    }
    else {
        return "La media de la clase es de Muy deficiente"
    }
};

console.log(printAverage(eso2o));

// TIP: Rompe en tantas funciones auxiliares como necesites.
// TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
// En Array.prototype también cuentas con otro método que podría resultarte útil para transformar un array a un único valor.

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// # Check Arguments

// Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean `undefined` o `null`.
// En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.
// **TIP**: Piensa en el operador ternario y también en el operador OR.
// **TIP**: Puedes suponer que input es siempre de tipo string, incluyendo `null` o `undefined`.
// Es decir, no vas a recibir números, objetos, etc.

function f(input) {
    var result;
    if (input === undefined) {
        result = "Unknown";
    } else if (input === null) {
        result = "";
    } else {
        result = input;
    }
    return result;
};

//La función resumida queda así:

const check = (input = "Unknown") => (input === null) ? "" : input;

console.log("Al introducir un string:",check("Hello"));
console.log("Al introducir null:",check(null));
console.log("Al introducir un string vacío (undefined):",check());



//-----------------------------------------------------------------------------------------------------------------------------------------------//

// # Clone Merge

// ## Apartado A
// Implementa una función `clone` que devuelva un objeto clonado a partir de otro:

function clone(source) {
    let copy = {...source};
    console.log(`¿Es el mismo objeto? ${source === copy}`);
    return copy;
};
console.log(clone(eso2o));



// ## Apartado B
// Dados dos objetos cualesquiera, implementa una función `merge` que mezcle uno sobre otro. 
//El objeto resultante debe ser la mezcla de las propiedades del objeto `source` sobre las del objeto `target`.
// **TIP**: Usa la función `clone` del apartado A.

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
var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

// El resultado de mezclar a sobre b sería:
console.log("Los objetos mezclados quedan así:", merge(a, b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}


//-----------------------------------------------------------------------------------------------------------------------------------------------//


// # Deep Equal

// ## Apartado A
// Suponiendo objetos sin anidamiento y con propiedades primitivas, construye una función que compare el contenido de 2 objetos.
// **TIP**: Recuerda, los objetos tienen un método `hasOwnProperty` que nos indica si dicho objeto tiene o no una propiedad concreta.
// Ejemplo `a.hasOwnProperty("name")`, si `a` tiene una propiedad `name` nos devolverá `true`, en caso contrario `false`.


var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };
console.log("¿Son objetos diferentes?", user !== clonedUser); // true

function isEqualContent(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    };
    for (let prop in a) {
        if (a[prop] !== b[prop]) {
            return false;
        };
    };
    return true;
};
console.log("¿Aún siendo objetos diferentes su contenido es el mismo?", isEqualContent(user, clonedUser)); // true


// ## Apartado B

// Vamos a mejorar la solución del apartado A suponiendo ahora que si puede existir anidamiento de objetos.
// **TIP**: Recuerda que el operador `typeof` en Javascript nos devuelve un string indicando el tipo de una variable de entre tipos primitivos, objetos o funciones.
// Ejemplo, `typeof 12 // "number"` o `typeof {} // "object"`.


var user2 = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var clonedUser2 = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
};
var clonedUser3 = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: "Pedro",
};


function isDeepEqual(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object') {
        return a === b;
    };
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    };
    for (let prop in a) {
        if (!b.hasOwnProperty(prop) || !isDeepEqual(a[prop], b[prop])) {
            return false;
        };
    };
    return true;
};

console.log(isDeepEqual(user2, clonedUser2)); // true
console.log(isDeepEqual(user2, clonedUser3)); // false 
