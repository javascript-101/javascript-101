# Operadores y Expresiones

1. Pasamos por una farmacia y trajimos 1 caja de 10 apósitos adhesivos y 2 blisters de aspirinas. Actualice las cantidades de los elementos correspondientes en nuestro botiquín.

   ```javascript
   let cantidadApositosAdhesivos = 3;
   let cantidadBlisterAspirinas = 1;
   cantidadApositosAdhesivos = cantidadApositosAdhesivos + 10;
   cantidadBlisterAspirinas = cantidadBlisterAspirinas + 2;
   alert(cantidadApositosAdhesivos, cantidadBlisterAspirinas);
   ```

2. Defina una variable que tenga la cantidad total de aspirinas del botiquín sabiendo que cada blister tiene 10 aspirinas.

   ```javascript
   let cantidadAspirinas = cantidadBlisterAspirinas * 10;
   alert(cantidadAspirinas);
   ```

3. Defina la variable `quedanApositos` la cual determine si quedan apósitos disponibles.

   ```javascript
   let quedanApositos = cantidadApositosAdhesivos > 0;
   alert('¿Quedan apósitos?', quedanApositos);
   ```

4. Muestre en la ventana, el nombre de cada elemento del botiquín junto con la cantidad correspondiente.

   ```javascript
   alert(nombreApositos, ':', cantidadApositosAdhesivos);
   alert(nombreAspirinas, ':', cantidadBlisterAspirinas);
   alert(nombreGuantes, ':', cantidadGuantesDeLatex);
   ```

5. ¿Que problema tiene el siguiente código?

   ```javascript
   let cantidadApositosAdhesivos = '3';
   cantidadApositosAdhesivos = cantidadApositosAdhesivos + 10;
   alert(cantidadApositosAdhesivos);
   ```

