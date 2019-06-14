# Variables

1. En esta actividad necesitamos definir variables que almacenen la cantidad de elementos de nuestro botiquín. 

   En él tenemos 3 apósitos adhesivos, 1 alcohol en gel, 1 blister \(_tableta_\) de aspirinas y 2 pares de guantes de latex. 

   A su vez, es necesario mostrar las cantidades en la ventana \(Pista: Usa `alert();`\)

```javascript
let cantidadApositosAdhesivos = 3;
let cantidadAlcoholEnGel = 1;
let cantidadBlisterAspirinas = 1;
let cantidadGuantesDeLatex = 4;
alert(cantidadApositosAdhesivos, cantidadAlcoholEnGel, cantidadBlisterAspirinas, cantidadGuantesDeLatex);
```

1. Defina las variables necesarias para mostrar el nombre de los elementos que contiene nuestro botiquin.

   ```javascript
   let nombreApositos = 'Curitas';
   let nombreAlcohol = 'Alcohol en Gel';
   let nombreAspirinas = 'Aspirinas';
   let nombreGuantes = 'Guantes de Latex';
   alert(nombreApositos, nombreAlcohol, nombreAspirinas, nombreGuantes);
   ```

2. Muestre en la ventana, el nombre de cada elemento del botiquín junto con la cantidad correspondiente.

   ```javascript
   alert(nombreApositos, ':', cantidadApositosAdhesivos);
   alert(nombreAlcohol, ':', cantidadAlcoholEnGel);
   alert(nombreAspirinas, ':', cantidadBlisterAspirinas);
   alert(nombreGuantes, ':', cantidadGuantesDeLatex);
   ```

3. ¿Que sucede si queremos ver la cantidad de algun elemento que no definimos en el botiquín? Ejemplo: `cantidadDeVendas`.
4. ¿Que problema tiene la siguiente sentencia?

   ```javascript
   alert("Nuevo botiquín');
   ```

