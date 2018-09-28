/*
    Declarar una variable llamada `noValgoNi5` y asignarle el valor `4`. Mostrar el valor de la variable por la terminal.
*/

const noValgoNi5 = 4;

console.log(noValgoNi5);

/*
    Declarar 3 variables:

    * `miAnoDeNacimiento` y asignarle el valor de tu año de nacimiento.
    * `meGustariaTener80Anos` y asignarle el número `80`.
    * `voyATener80ElAno` y asignarle el resultado de sumar las 2 variables anteriores

    Mostrar por la terminal el año en el que vas a cumplir 80 años.
*/

const miAnoDeNacimiento = 1990;
const meGustariaTener80Anos = 80;

const voyATener80ElAno = miAnoDeNacimiento + meGustariaTener80Anos;

console.log(voyATener80ElAno);

/*
    Declarar 3 variables:

    * `costoDeUnaTele` y asignarle el valor `10000`.
    * `ahorros` y asignarle el valor `9000`.
    * `dineroQueMeFalta` y asignarle el resultado de restar las 2 variables anteriores.

    Mostrar por la terminal cuanto dinero te falta para comprar la tele.
*/

const costoDeUnaTele = 10000;
const ahorros = 9000;

const dineroQueMeFalta = costoDeUnaTele - ahorros;

console.log(dineroQueMeFalta);

/*
    Declarar 3 variables:

    * `diasPorAno` y asignarle el número `365`
    * `cantidadDeAnosEnUnaDecada` y asignarle el número `10`
    * `cantidadDeDiasEnUnaDecada` y asignarle el resultado de multiplicar las 2 variables anteriores.

    Mostrar por la terminal cuantos días hay en una década.
*/

const diasPorAno = 365;
const cantidadDeAnosEnUnaDecada = 10;

const cantidadDeDiasEnUnaDecada = 365 * 10;

console.log(cantidadDeDiasEnUnaDecada);

/*
    Teniendo en cuenta que una pizza siempre tiene 8 porciones, mostrar por la terminal cuantas pizzas tengo en la mesa si conté 24 porciones.

    Preguntas que te deberías hacer para resolver este ejercicio: ¿Qué números menciona el enunciado?, ¿Los puedo guardar en variables?, ¿Qué cuenta puedo hacer para obtener el resultado?
*/

const porcionesEnUnaPizza = 8;
const porcionesEnLaMesa = 24;

const pizzasEnTotal = porcionesEnLaMesa / porcionesEnUnaPizza;

console.log(pizzasEnTotal);

/*
    Declarar una variable de nombre `miAnimalFavorito` y asignarle como valor el string que represente el animal que más te gusta. Escribir el código necesario para mostrar por la terminal el valor `true` si el animal que más te gusta es un `'perro'`. De lo contrario, mostrar `false`. Usar el operador de igualdad (`==`).
*/

const miAnimalFavorito = 'topo';

const esUnPerro = miAnimalFavorito == 'perro';

console.log(esUnPerro);

/*
    Usar el operador de desigualdad (`!=`) para mostrar por la terminal el resultado de comparar la cadena de caracteres `'flan'` y `'flan con dulce de leche'` (Podés crear todas las variables que quieras, incluso podés resolverlo sin usar variables).
*/

const sonDesiguales = 'flan' != 'flan con dulce de leche';

console.log(sonDesiguales);

/*
    Declarar una variable llamada `soyMayorDeEdad` y asignarle el resultado de comparar tu edad y el número `18` usando el operador `>` (mayor). Mostrar el valor de la variable por la terminal.
*/

const soyMayorDeEdad = 27 > 18;

console.log(soyMayorDeEdad);

/*
    Declarar una variable llamada `soyMenorDe25` y asignarle el resultado de comparar tu edad y el número `25` usando el operador `<` (menor). Mostrar el valor de la variable por la terminal.
*/

const soyMenorDe25 = 27 < 25;

console.log(soyMenorDe25);

/*
    Declarar una variable llamada `estamosEnEnero` y asignarle el resultado de comparar si el nombre del mes actual es igual a `'Enero'`. Hacerlo usando el operador de igualdad estricta (`===`). Mostrar el valor de la variable por la terminal.
*/

const estamosEnEnero = 'Mayo' === 'Enero';

console.log(estamosEnEnero);

/*
    Declarar una variable llamada `noEstamosEnEnero` y asignarle el resultado de comparar si el nombre del mes actual y el string `'Enero'` son diferentes. Hacerlo usando el operador de desigualdad estricta (`!==`). Mostrar el valor de la variable por la terminal.
*/

const noEstamosEnEnero = 'Mayo' !== 'Enero';

console.log(noEstamosEnEnero);

/*
    Declarar 3 variables:

    * `miNotaEnElParcial` y asignarle un `8`
    * `notaMinimaParaAprobar` y asignarle un `6`
    * `estoyAprobado` y asignarle el resultado de comparar el número las dos variables anteriores usando el operador `>=` (Mayor o igual).

    Mostrar el valor de la variable `estoyAprobado` por la terminal.
*/

const miNotaEnElParcial = 8;
const notaMinimaParaAprobar = 6;

const estoyAprobado = miNotaEnElParcial >= notaMinimaParaAprobar;

console.log(estoyAprobado);

/*
    Declarar una variable llamada `esHoraDeAlmorzar` cuyo valor sea el resultado de comparar con el operador `<=` (Menor o igual) si la hora actual es menor o igual a `12`. Mostrar el valor por la terminal.
*/

const esHoraDeAlmorzar = 19 <= 12;

console.log(esHoraDeAlmorzar);
