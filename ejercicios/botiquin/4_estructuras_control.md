# Estructuras de control

1. Muestre en la ventana un mensaje si aun quedan apósitos en el botiquin, en caso contrario muestre el mensaje `'Hacen falta apósitos!'`.

   ```javascript
   let cantidadApositosAdhesivos = 13;
   if (cantidadApositosAdhesivos > 0) {
    alert('Aún quedan apósitos.');
   } else {
    alert('Hacen falta apósitos!');
   }
   ```

2. Recorra el botiquín y muestre de a uno por vez los elementos en la consola. \(Pista: Usa la sentencia `while`\).

   ```javascript
   let botiquin = ['Curitas', 'Alcohol en gel', 'Aspirinas', 'Guantes de latex'];
   let indice = 0;
   while(indice < botiquin.length) {
    alert(botiquin[indice]);
    indice = indice + 1;
   }
   ```

3. Recorra el botiquín y muestre el mensaje `'Aun quedan gasas en el botiquin.'` si hay gasas en el botiquín.

   \`\`\` javascript

   let botiquin = \['Curitas', 'Alcohol en gel', 'Aspirinas', 'Guantes de latex'\];

   let indice = 0;

   let quedanGasas = false;

   while\(indice &lt; botiquin.length\) {

   if\(botiquin\[indice\] == 'Gasas'\) {

    quedanGasas = true;

   }

   indice = indice + 1;

   }

if\(quedanGasas\) { alert\('Aun quedan gasas.'\); } \`\`\`

