// 2
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

// 3
var resultado = sumar(2, 3);

// 4
console.log(resultado);

// 5
function saludar(usuario) {
    // 6
    return 'Bienvenido ' + usuario + ' a spotify';
}

// 7
var saludo = saludar('nicolas');

// 8
console.log(saludo);

// 9
function autenticar(usuario, password) {
    return (usuario === 'javascript101') && (password === 1234);
}

// 10
var usuarioValido = autenticar('javascript101', 1234);

// 11
console.log(usuarioValido);

// 12
var usuarioValido = autenticar('ruby101', 12345);

// 13
console.log(usuarioValido);

// 14
var nombreDeUsuario = 'javascript101';

// 15
var passwordDeUsuario = 1234;

// 16

if ( autenticar(nombreDeUsuario, passwordDeUsuario) ) {
    console.log('Bienvenido javascript101 a spotify');
} else {
    console.log('Usuario incorrecto');
}
