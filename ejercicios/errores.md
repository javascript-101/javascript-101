 # :heavy_exclamation_mark: Errores comunes

Como todos somos humanos y los humanos solemos cometer errores, hay que dedicarnos un tiempo para poder entender cuando algo no salió como esperabamos.
d
Node.js tiende a brindar información útil sobre cómo mitigar los errores que podamos llegar a tener en el código.

 # La consola es tu amiga para encontrar errores

Recordando lo que vimos en la lección anterior, tenemos el siguiente código:

```javascript
console.log(1, 2, 3, 4, 5);
```
Nos devuelve exitosamente:
```javascript
1 2 3 4 5
```
Ahora supongamos nos olvidamos de agregar una "," entre alguno de los números. Por ejemplo:
```javascript
console.log(1, 2, 3 4, 5);
```
Y de repende ¡PUM! tenemos al menos trece lineas de información sobre algo que pasó:

```text
/home/ale/workspace/js101/index.js:1
(function (exports, require, module, __filename, __dirname) { console.log(1, 2, 3 4, 5);
                                                                                ^

SyntaxError: missing ) after argument list
    at new Script (vm.js:51:7)
    at createScript (vm.js:138:10)
    at Object.runInThisContext (vm.js:199:10)
    at Module._compile (module.js:626:28)
    at Object.Module._extensions..js (module.js:673:10)
    at Module.load (module.js:575:32)
    at tryModuleLoad (module.js:515:12)
    at Function.Module._load (module.js:507:3)
    at Function.Module.runMain (module.js:703:10)
    at startup (bootstrap_node.js:193:16)
```
Al principio ver esto sin comprender lo que Node.js nos está queriendo decir puede resultar un poco abrumador, es por eso que haremos un analisis, parte por parte.

# Desglocemos la información de los errores
En la primera línea, Node.js nos avisa en qué archivo ocurrió el problema y hasta en qué linea:
```text
/home/ale/workspace/js101/index.js:1
```
Hubo un problema en el archivo /home/ale/workspace/js101/index.js en la línea 1.

```
(function (exports, require, module, __filename, __dirname) { console.log(1, 2, 3 4, 5);
                                                                                ^
```
Acá hay algo interesante; fíjate en el circunflejo `^` y cómo nos apunta al lugar exacto donde omitimos la coma.

Ahora, seguramente te estarás preguntando qué es esto: 
```
(function (exports, require, module, __filename, __dirname) {
```
Recordemos que Node.js es un entorno de ejecución de Javascript. Por lo que el código que **nuestro código Javascript será ejecutado junto a más código Javascript de Node.js** en un ambiente contenido, principalmente por el motor V8. 

Por lo que si ves código que desconoces (y por lo general con nombres que empiecen con _ o __), **ignóralo en primer instancia. Asume que el código de Node.js funciona y enfócate en ver qué parte de tu código desencadenó el error.**

Si te interesa saber más sobre cómo funciona Node.js por dentro
# Los errores en la consola indican qué se rompió, no cuál fue la causa

```text 
SyntaxError: missing ) after argument list
```
Si leemos esto, pareciera que nos faltó un paréntesis en nuestro código, cuando en realidad nos faltó una coma.

Para esto tenemos que saber que en todos los lenguajes formales, en particular los de programación, existe alguna especificación de cómo se debería leer y escribir el lenguaje. 

Ahora, parte del trabajo que hace Node.js es leer tu código línea a línea, caracter por caracter, verificando que lo que hayas escrito cumpla con las reglas del lenguaje con cada caracter que ingresas.

Al mecanismo que se ocupa de verificar estos errores de sintáxis, se lo conoce como parser.
De manera simplificada, Node.js analiza tu código en busca de errores de sintáxis de la siguiente manera:
```text
c
```
Parser: "¿Es válido en Javascript escribir c? Si, seguí."
```text
co
```
Parser: "¿Es válido en Javascript escribir co? Si, seguí."
```text
con
```
Parser: "¿Es válido en Javascript escribir con? Si, seguí."

... y así sucesivamente hasta llegar a:
```text
console.log(1, 2, 3
```
Parser: "¿Es válido en Javascript escribir console.log(1, 2, 3? Si, seguí."
```text
console.log(1, 2, 3 4
```
Parser: "¿Es válido en Javascript escribir console.log(1, 2, 3 4 ? **No.** Mirá, **entiendo que no me quieras dar una coma, pero si te vas [del contexto actual] sin un ~~adiós~~ paréntesis, se terminó nuesta ~~relación~~ ejecución**."

Es importante notar como el parser lanza el primer error que encuentre, ya que no tiene mucho sentido seguir parseando el código con errores, si ya sabemos que va a fallar de todos modos.

## Stacktrace
```
    at new Script (vm.js:51:7)
    at createScript (vm.js:138:10)
    at Object.runInThisContext (vm.js:199:10)
    at Module._compile (module.js:626:28)
    at Object.Module._extensions..js (module.js:673:10)
    at Module.load (module.js:575:32)
    at tryModuleLoad (module.js:515:12)
    at Function.Module._load (module.js:507:3)
    at Function.Module.runMain (module.js:703:10)
    at startup (bootstrap_node.js:193:16)
```
Estas lineas son las que más causan miedo, pero son inofensivas.

Lo que nos dicen es el orden de sucesos que desencadenó el error. Los eventos más recientes están arriba, y los primeros eventos más abajo.

En nuestro caso se empezó a ejecutar boostrap_node.js en la línea 193, columna 16, luego se ejecutó el archivo module.js en la línea 703 columna 10, y así sucesivamente.

Por lo general toma la misma sugerencia que para código que no reconozcas, son de Node.js y él (¿o ella?) sabe como resolverlo, por lo que sólo deberías enfocarte, en principio, en los archivos que reconozcas que son tuyos, que se verían algo así:
```
TypeError: console.lo is not a function
    at Object.<anonymous> (/home/ale/workspace/js101/index.js:1:71)
```


# Otros errores comunes 

Ahora que vimos la estructura de cómo interpretar un error, veamos algunos casos rápidos y concretos:
```
ReferenceError: consol is not defined
```
No existe consol. Es común cuando se comente un error al escribir el nombre de una variable u objeto que sí existe. 

Si el nombre está definitivamente bien escrito y tienes este error, significa que existe una variable u objeto con ese nombre.
```
TypeError: console.lo is not a function
```
Muy probablemente sea un error en la palabra, al igual que el caso anterior. 

Si no lo es, es porque nuestro objeto no sabe hacer lo que se le pidió. El objeto console 'sabe' hacer log pero no 'sabe' hacer lo.

```
SyntaxError: Unexpected token ,
```
Hay un caracter que no respeta la sintáxis del lenguaje.

[Continuar con números, cadenas de texto y booleanos](/ejercicios/02.md)
