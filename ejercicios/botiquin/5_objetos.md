# Objetos

1. Defina una variable que almacene la información de los apósitos como un objeto y muestre sus propiedades en la consola. \(Pista: Defina el objeto con las propiedades `nombre` y `cantidad`\).

   ```javascript
   var apositos = {
   nombre: 'Apósitos adhesivos',
   cantidad: 13
   };
   console.log(apositos.nombre, apositos.cantidad);
   ```

2. Cambie el nombre de los apósitos por `'Curitas'` y muestrelo en la consola.

   ```javascript
   var apositos = {
   nombre: 'Apósitos adhesivos',
   cantidad: 13
   };
   apositos.nombre = 'Curitas';
   console.log(apositos.nombre, apositos.cantidad);
   ```

3. Agregue la propiedad `fechaDeVencimiento` al objeto de las _aspirinas_ con el valor `'12/18'`.

   ```javascript
   var blistersDeAspirinas = {
   nombre: 'Aspirinas',
   cantidad: 3
   };
   blistersDeAspirinas.fechaDeVencimiento = '12/18';
   console.log(blistersDeAspirinas);
   ```

4. Cambie todos los elementos del botiquín a objetos con la misma estructura.

   ```javascript
   var botiquin = [
   {
    nombre: 'Curitas',
    cantidad: 13
   }, 
   {
    nombre: 'Alcohol en gel',
    cantidad: 11
   },
   {
    nombre: 'Aspirinas',
    cantidad: 3
   },
   {
    nombre: 'Guantes de latex',
    cantidad: 4
   }
   ]; 
   console.log(botiquin);
   ```

5. Recorra el botiquín con los nuevos objetos mostrando el `nombre` y la `cantidad` de cada elemento.

   ```javascript
   var indice = 0;
   while(indice < botiquin.length) {
   var elemento = botiquin[indice];
   console.log(elemento.nombre, elemento.cantidad);
   indice = indice + 1;
   }
   ```

6. ¿Qué diferencia encuentra de usar objetos sobre las soluciones del comienzo de curso?

   ```text
   La idea es que puedan incorporar el concepto de simple de encapsulamiento y agrupamiento de información coherente.
   ```

