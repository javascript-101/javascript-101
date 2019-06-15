/*
    Declarar una variable llamada `noValgoNi5` y asignarle el valor `4`. Mostrar el valor de la variable en la ventana.
*/

let noValgoNi5 = 4;

alert(noValgoNi5);

/*
    Declarar 3 variables:

    * `miAnoDeNacimiento` y asignarle el valor de tu año de nacimiento.
    * `meGustariaTener80Anos` y asignarle el número `80`.
    * `voyATener80ElAno` y asignarle el resultado de sumar las 2 variables anteriores

    Mostrar en la ventana el año en el que vas a cumplir 80 años.
*/

let miAnoDeNacimiento = 1990;
let meGustariaTener80Anos = 80;

let voyATener80ElAno = miAnoDeNacimiento + meGustariaTener80Anos;

alert(voyATener80ElAno);

/*
    Declarar 3 variables:

    * `costoDeUnaTele` y asignarle el valor `10000`.
    * `ahorros` y asignarle el valor `9000`.
    * `dineroQueMeFalta` y asignarle el resultado de restar las 2 variables anteriores.

    Mostrar en la ventana cuanto dinero te falta para comprar la tele.
*/

let costoDeUnaTele = 10000;
let ahorros = 9000;

let dineroQueMeFalta = costoDeUnaTele - ahorros;

alert(dineroQueMeFalta);

/*
    Declarar 3 variables:

    * `diasPorAno` y asignarle el número `365`
    * `cantidadDeAnosEnUnaDecada` y asignarle el número `10`
    * `cantidadDeDiasEnUnaDecada` y asignarle el resultado de multiplicar las 2 variables anteriores.

    Mostrar en la ventana cuantos días hay en una década.
*/

let diasPorAno = 365;
let cantidadDeAnosEnUnaDecada = 10;

let cantidadDeDiasEnUnaDecada = 365 * 10;

alert(cantidadDeDiasEnUnaDecada);

/*
    Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar en la ventana cuantas pizzas tengo en la mesa si conté 24 porciones.

    Preguntas que te deberías hacer para resolver este ejercicio: ¿Qué números menciona el enunciado?, ¿Los puedo guardar en variables?, ¿Qué cuenta puedo hacer para obtener el resultado?
*/

let porcionesEnUnaPizza = 8;
let porcionesEnLaMesa = 24;

let pizzasEnTotal = porcionesEnLaMesa / porcionesEnUnaPizza;

alert(pizzasEnTotal);

/*
    Declarar una variable de nombre `miAnimalFavorito` y asignarle como valor el string que represente el animal que más te gusta. Escribir el código necesario para mostrar en la ventana el valor `true` si el animal que más te gusta es un `'perro'`. De lo contrario, mostrar `false`. Usar el operador de igualdad (`==`).
*/

let miAnimalFavorito = 'topo';

let esUnPerro = miAnimalFavorito == 'perro';

alert(esUnPerro);

/*
    Usar el operador de desigualdad (`!=`) para mostrar en la ventana el resultado de comparar la cadena de caracteres `'flan'` y `'flan con dulce de leche'` (Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).
*/

let sonDesiguales = 'flan' != 'flan con dulce de leche';

alert(sonDesiguales);

/*
    Declarar una variable llamada `soyMayorDeEdad` y asignarle el resultado de comparar tu edad y el número `18` usando el operador `>` (mayor). Mostrar el valor de la variable en la ventana.
*/

let soyMayorDeEdad = 27 > 18;

alert(soyMayorDeEdad);

/*
    Declarar una variable llamada `soyMenorDe25` y asignarle el resultado de comparar tu edad y el número `25` usando el operador `<` (menor). Mostrar el valor de la variable en la ventana.
*/

let soyMenorDe25 = 27 < 25;

alert(soyMenorDe25);

/*
    Declarar una variable llamada `estamosEnEnero` y asignarle el resultado de comparar si el nombre del mes actual es igual a `'Enero'`. Hacerlo usando el operador de igualdad estricta (`===`). Mostrar el valor de la variable en la ventana.
*/

let estamosEnEnero = 'Mayo' === 'Enero';

alert(estamosEnEnero);

/*
    Declarar una variable llamada `noEstamosEnEnero` y asignarle el resultado de comparar si el nombre del mes actual y el string `'Enero'` son diferentes. Hacerlo usando el operador de desigualdad estricta (`!==`). Mostrar el valor de la variable en la ventana.
*/

let noEstamosEnEnero = 'Mayo' !== 'Enero';

alert(noEstamosEnEnero);

/*
    Declarar 3 variables:

    * `miNotaEnElParcial` y asignarle un `8`
    * `notaMinimaParaAprobar` y asignarle un `6`
    * `estoyAprobado` y asignarle el resultado de comparar el número las dos variables anteriores usando el operador `>=` (Mayor o igual).

    Mostrar el valor de la variable `estoyAprobado` en la ventana.
*/

let miNotaEnElParcial = 8;
let notaMinimaParaAprobar = 6;

let estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;

alert(estoyAprobado);

/*
    Declarar una variable llamada `esHoraDeAlmorzar` cuyo valor sea el resultado de comparar con el operador `<=` (Menor o igual) si la hora actual es menor o igual a `12`. Mostrar el valor en la ventana.
*/

let esHoraDeAlmorzar = 19 <= 12;

alert(esHoraDeAlmorzar);
