/*
    Declarar una variable que se llame `ganeLaCarrera` y asignarle el valor `false`. Mostrar por la terminal un mensaje que diga `'Ganaste'` si `ganeLaCarrera` es verdadero y `'Perdiste'` si su valor es falso.
*/

var ganeLaCarrera = false;

if (ganeLaCarrera == true) {
    console.log('Ganaste');
} else {
    console.log('Perdiste');
}

/*
    Declarar una variable que se llame `posicionEnLaCarrera` y asignarle el número `6`. Mostrar por la terminal uno de los siguientes mensajes según la posición que salió el corredor:

        * `'FELICITACIONES, SALISTE 1RO'` si la `posicionEnLaCarrera` es 1.
        * `'Te falto poquito para ganar'` si la `posicionEnLaCarrera` es 2.
        * `'Sos un orgullo para tu familia'` si la `posicionEnLaCarrera` es 3.
        * `'Volvé a tu casa'` si la `posicionEnLaCarrera` es mayor a 3.
*/

var posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
    console.log('FELICITACIONES, SALISTE 1RO');
} else if (posicionEnLaCarrera == 2) {
    console.log('Te falto poquito para ganar');
} else if (posicionEnLaCarrera == 3) {
    console.log('Sos un orgullo para tu familia');
} else {
    console.log('Volvé a tu casa');
}

/*
    Repetir el ejercicio anterior pero usando un solo `console.log` en todo el programa.
*/

var posicionEnLaCarrera = 6;
var mensaje = '';

if (posicionEnLaCarrera == 1) {
    mensaje = 'FELICITACIONES, SALISTE 1RO';
} else if (posicionEnLaCarrera == 2) {
    mensaje = 'Te falto poquito para ganar';
} else if (posicionEnLaCarrera == 3) {
    mensaje = 'Sos un orgullo para tu familia';
} else {
    mensaje = 'Volvé a tu casa';
}

console.log(mensaje);
