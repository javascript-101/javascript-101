# Estructuras de control

1. Muestre en la consola un mensaje si aun quedan apósitos en el botiquin, en caso contrario muestre el mensaje `'Hacen falta apósitos!'`.
``` javascript
const cantidadApositosAdhesivos = 13;
if (cantidadApositosAdhesivos > 0) {
  console.log('Aún quedan apositos.');
} else {
  console.log('Hacen falta apósitos!');
}
```

2. Recorra el botiquín y muestre de a uno por vez los elementos en la consola. (Pista: Usa la sentencia `while`).
``` javascript
const botiquin = ['Curitas', 'Alcohol en gel', 'Aspirinas', 'Guantes de latex'];
const indice = 0;
while(indice < botiquin.length) {
  console.log(botiquin[indice]);
  indice = indice + 1;
}
```
3. Recorra el botiquín y muestre el mensaje `'Aun quedan gasas en el botiquin.'` si hay gasas en el botiquín.
``` javascript
const botiquin = ['Curitas', 'Alcohol en gel', 'Aspirinas', 'Guantes de latex'];
const indice = 0;
const quedanGasas = false;
while(indice < botiquin.length) {
  if(botiquin[indice] == 'Gasas') {
    quedanGasas = true;
  }
  indice = indice + 1;
}

if(quedanGasas) {
  console.log('Aun quedan gasas.');
}
```