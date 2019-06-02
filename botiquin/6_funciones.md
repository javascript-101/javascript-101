# Funciones

1. Declare una función que muestre el mensaje `'Bienvenidos al botiquín virtual!'`.

   ```javascript
   function bienvenidos() {
   console.log('Bienvenidos al botiquín virtual!');
   }
   bienvenidos();
   ```

2. Declare una función que reciba tu nombre como parametro y lo una al mensaje de bienvenida. 

   ```javascript
   function bienvenido(nombre) {
   console.log('Bienvenido ' + nombre + ' al botiquín virtual!');
   }
   bienvenido('Gastón');
   ```

3. Utilice la función nativa de JavaScript `prompt()` para ingresar tu nombre y luego envielo como parametro a la función anterior.

   ```javascript
   var nombre = prompt('¿Cuál es tu nombre?');
   bienvenido(nombre);
   ```

4. Declare una función que calcule y retorne la cantidad de aspirinas que hay en el botiquín a partir de los blisters que hay en él \(Tal cual hicimos en el ejercicio 2 de _Operadores_\);

   ```javascript
   function aspirinasEnBotiquin(blistersDeAspirinas) {
   return blistersDeAspirinas * 10;
   }
   var cantidadBlisterAspirinas = 3;
   console.log(aspirinasEnBotiquin(cantidadBlisterAspirinas));
   ```

5. ¿Qué sucederá si la función anterior la llamamos sin enviarle los parametros necesarios?

   ```javascript
   console.log(aspirinasEnBotiquin());
   ```

6. Defina la función `sonIguales` que determine si 2 objetos del botiquín son iguales o  no. A su vez, escriba un programa que use esta función y muestre un mensaje a partir de su resultado. 

   \`\`\` javascript

   function sonIguales\(elemento1, elemento2\) {

   return elemento1.nombre === elemento2.nombre;

   }

if\(sonIguales\(curitas, alcohol\)\) { console.log\('Son el mismo elemento!'\); } else { console.log\('Son elementos diferentes!'\); }

```text
7. Defina la función `mostrarBotiquin` que muestre lo que contiene nuestro botiquín (que recibe como parametro) en forma de tabla como se describe abajo. Al momento de presentar las aspirinas, muestre la cantidad aspirinas, no de blisters (_Tip: Reusa las funciones anterior_). 

**Bienvenido Gastón al botiquin virtual! Este es tu botiquín:**

| Elemento      | Cantidad      |
|:-------------:|:-------------:|
| Curitas       | 13            |
| ...           | ...           |

``` javascript
function mostrarBotiquin(nombre, botiquin){
...
}
var nombre = prompt('¿Cuál es tu nombre?');
mostrarBotiquin(nombre, botiquin);
```

