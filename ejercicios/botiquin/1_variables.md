# Variables
1. En esta actividad necesitamos definir variables que almacenen la cantidad de elementos de nuestro botiquín.
   En él tenemos 3 apósitos adhesivos, 1 alcohol en gel, 1 blister (_tableta_) de aspirinas y 2 pares de guantes de latex.
   A su vez, es necesario mostrar las cantidades en la consola (Pista: Usa `console.log();`)

``` javascript
const cantidadApositosAdhesivos = 3;
const cantidadAlcoholEnGel = 1;
const cantidadBlisterAspirinas = 1;
const cantidadGuantesDeLatex = 4;
console.log(cantidadApositosAdhesivos, cantidadAlcoholEnGel, cantidadBlisterAspirinas, cantidadGuantesDeLatex);
```


2. Defina las variables necesarias para mostrar el nombre de los elementos que contiene nuestro botiquin.
``` javascript
const nombreApositos = 'Curitas';
const nombreAlcohol = 'Alcohol en Gel';
const nombreAspirinas = 'Aspirinas';
const nombreGuantes = 'Guantes de Latex';
console.log(nombreApositos, nombreAlcohol, nombreAspirinas, nombreGuantes);
```

3. Muestre en la consola, el nombre de cada elemento del botiquín junto con la cantidad correspondiente.
``` javascript
console.log(nombreApositos, ':', cantidadApositosAdhesivos);
console.log(nombreAlcohol, ':', cantidadAlcoholEnGel);
console.log(nombreAspirinas, ':', cantidadBlisterAspirinas);
console.log(nombreGuantes, ':', cantidadGuantesDeLatex);
```
4. ¿Que sucede si queremos ver la cantidad de algún elemento que no definimos en el botiquín? Ejemplo: `cantidadDeVendas`.

5. ¿Que problema tiene la siguiente sentencia?
``` javascript
console.log("Nuevo botiquín');
```