/*
    Declará y asigná un objeto llamado `miRecetaMatadora` que contenga 3 propiedades: `titulo` (string), `porciones` (número) e `ingredientes` (array de string). Mostrar el objeto creado en la terminal
*/

var miRecetaMatadora = {
    titulo: 'Polenta con queso',
    porciones: 4,
    ingredientes: [
        'Polenta',
        'Queso fresco',
        'Queso rallado'
    ]
};

console.log(miRecetaMatadora);

/*
    Escribí un programa que:

        * Declare 3 objetos llamados `persona1`, `persona2` y `persona3` con las siguientes propiedades: `nombre` (string) y `edad` (numero).
        * Declare un array llamado `usuarios` y use los 3 objetos anteriormente creados como elementos.
        * Muestre por la terminal la cantidad de usuarios del array.
        * Muestre por la terminal la edad del segundo elemento del array.
        * Muestre por la terminal el nombre del primer elemento del array.
*/

var persona1 = {
    nombre: 'Juan',
    edad: 10
};
var persona2 = {
    nombre: 'Pedro',
    edad: 20
};
var persona3 = {
    nombre: 'Martin',
    edad: 30
};
var usuarios = [persona1, persona2, persona3];

console.log(usuarios.length);
console.log(usuarios[1].edad);
console.log(usuarios[0].nombre);
