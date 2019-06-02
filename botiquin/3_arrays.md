# Arrays

1. Defina el botiquín como un **arreglo** con el nombre de los elementos que contiene.

   ```javascript
   var botiquin = ['Curitas', 'Alcohol en gel', 'Aspirinas', 'Guantes de latex'];
   console.log(botiquin);
   ```

2. Muestre en la consola la cantidad de elementos que contiene el botiquín.

   ```javascript
   var cantidadDeElementos = botiquin.length;
   console.log(cantidadDeElementos);
   ```

3. Obtenga el primer elemento y el ultimo que contiene el botiquín. \(Tip: _Los índices de los arrays comienzan desde 0._\)

   ```javascript
   var primerElemento = botiquin[0];
   var ultimoElemento = botiquin[ botiquin.length - 1 ];
   console.log(primerElemento, ultimoElemento);
   ```

4. Defina un arreglo con las cantidades de cada elemento del botiquín en la misma posicion definida anteriormente. Luego muestre la cantidad de aspirinas que tiene el botiquín como `NOMBRE: CANTIDAD`.

   ```javascript
   var botiquin = ['Curitas', 'Alcohol en gel', 'Aspirinas', 'Guantes de latex'];
   var cantidades = [13, 1, 3, 4];
   var indiceDeAspirinas = 2;
   console.log(botiquin[indiceDeAspirinas], ':', cantidades[indiceDeAspirinas]);
   ```

5. Pasamos nuevamente por la farmacia y trajimos 1 paquete de gasas. Agregue este elemento al botiquín. \(Pista: Llame al método _push_ sobre el `botiquin`\)

   ```javascript
   botiquin.push('Gasas');
   console.log(botiquin);
   ```

6. Quite el último elemento agregado del botiquín. \(Pista: Llame al método _pop_ sobre el `botiquin`\)

   ```javascript
   var ultimoElemento = botiquin.pop();
   console.log(botiquin, ultimoElemento);
   ```

7. ¿Qué elemento tomaremos en esta sentencia?

   ```javascript
   console.log(botiquin[ botiquin.length ]);
   ```

