# Variables

1. En esta actividad necesitamos definir variables que almacenen la cantidad de elementos de nuestro botiquín. 

   En él tenemos 3 apósitos adhesivos, 1 alcohol en gel, 1 blister \(_tableta_\) de aspirinas y 2 pares de guantes de latex. 

   A su vez, es necesario mostrar las cantidades en la consola \(Pista: Usa `console.log();`\)

```javascript
var cantidadApositosAdhesivos = 3;
var cantidadAlcoholEnGel = 1;
var cantidadBlisterAspirinas = 1;
var cantidadGuantesDeLatex = 4;
console.log(cantidadApositosAdhesivos, cantidadAlcoholEnGel, cantidadBlisterAspirinas, cantidadGuantesDeLatex);
```

1. Defina las variables necesarias para mostrar el nombre de los elementos que contiene nuestro botiquin.

   ```javascript
   var nombreApositos = 'Curitas';
   var nombreAlcohol = 'Alcohol en Gel';
   var nombreAspirinas = 'Aspirinas';
   var nombreGuantes = 'Guantes de Latex';
   console.log(nombreApositos, nombreAlcohol, nombreAspirinas, nombreGuantes);
   ```

2. Muestre en la consola, el nombre de cada elemento del botiquín junto con la cantidad correspondiente.

   ```javascript
   console.log(nombreApositos, ':', cantidadApositosAdhesivos);
   console.log(nombreAlcohol, ':', cantidadAlcoholEnGel);
   console.log(nombreAspirinas, ':', cantidadBlisterAspirinas);
   console.log(nombreGuantes, ':', cantidadGuantesDeLatex);
   ```

3. ¿Que sucede si queremos ver la cantidad de algun elemento que no definimos en el botiquín? Ejemplo: `cantidadDeVendas`.
4. ¿Que problema tiene la siguiente sentencia?

   ```javascript
   console.log("Nuevo botiquín');
   ```

