/*
    Declarar una variable que se llame `ganeLaCarrera` y asignarle el valor `false`. Mostrar en la ventana un mensaje que diga `'Ganaste'` si `ganeLaCarrera` es verdadero y `'Perdiste'` si su valor es falso.
*/

let ganeLaCarrera = false;

if (ganeLaCarrera == true) {
    alert('Ganaste');
} else {
    alert('Perdiste');
}

/*
    Declarar una variable que se llame `posicionEnLaCarrera` y asignarle el número `6`. Mostrar en la ventana uno de los siguientes mensajes según la posición que salió el corredor:

        * `'FELICITACIONES, SALISTE 1RO'` si la `posicionEnLaCarrera` es 1.
        * `'Te falto poquito para ganar'` si la `posicionEnLaCarrera` es 2.
        * `'Sos un orgullo para tu familia'` si la `posicionEnLaCarrera` es 3.
        * `'Volvé a tu casa'` si la `posicionEnLaCarrera` es mayor a 3.
*/

let posicionEnLaCarrera = 6;

if (posicionEnLaCarrera == 1) {
    alert('FELICITACIONES, SALISTE 1RO');
} else if (posicionEnLaCarrera == 2) {
    alert('Te falto poquito para ganar');
} else if (posicionEnLaCarrera == 3) {
    alert('Sos un orgullo para tu familia');
} else if (posicionEnLaCarrera > 3) {
    alert('Volvé a tu casa');
} else {
    alert('No tires fruta')
}

/*
    Repetir el ejercicio anterior pero usando un solo `alert` en todo el programa.
*/

let posicionEnLaCarrera = 6;
let mensaje = '';

if (posicionEnLaCarrera == 1) {
    mensaje = 'FELICITACIONES, SALISTE 1RO';
} else if (posicionEnLaCarrera == 2) {
    mensaje = 'Te falto poquito para ganar';
} else if (posicionEnLaCarrera == 3) {
    mensaje = 'Sos un orgullo para tu familia';
} else if (posicionEnLaCarrera > 3) {
    mensaje = 'Volvé a tu casa';
} else {
    mensaje = 'No tires fruta';
}

alert(mensaje);