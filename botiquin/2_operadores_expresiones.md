# Operadores y Expresiones

1. Pasamos por una farmacia y trajimos 1 caja de 10 apósitos adhesivos y 2 blisters de aspirinas. Actualice las cantidades de los elementos correspondientes en nuestro botiquín.

   ```javascript
   var cantidadApositosAdhesivos = 3;
   var cantidadBlisterAspirinas = 1;
   cantidadApositosAdhesivos = cantidadApositosAdhesivos + 10;
   cantidadBlisterAspirinas = cantidadBlisterAspirinas + 2;
   console.log(cantidadApositosAdhesivos, cantidadBlisterAspirinas);
   ```

2. Defina una variable que tenga la cantidad total de aspirinas del botiquín sabiendo que cada blister tiene 10 aspirinas.

   ```javascript
   var cantidadAspirinas = cantidadBlisterAspirinas * 10;
   console.log(cantidadAspirinas);
   ```

3. Defina la variable `quedanApositos` la cual determine si quedan apósitos disponibles.

   ```javascript
   var quedanApositos = cantidadApositosAdhesivos > 0;
   console.log('¿Quedan apósitos?', quedanApositos);
   ```

4. Muestre en la consola, el nombre de cada elemento del botiquín junto con la cantidad correspondiente.

   ```javascript
   console.log(nombreApositos, ':', cantidadApositosAdhesivos);
   console.log(nombreAspirinas, ':', cantidadBlisterAspirinas);
   console.log(nombreGuantes, ':', cantidadGuantesDeLatex);
   ```

5. ¿Que problema tiene el siguiente código?

   ```javascript
   var cantidadApositosAdhesivos = '3';
   cantidadApositosAdhesivos = cantidadApositosAdhesivos + 10;
   console.log(cantidadApositosAdhesivos);
   ```

