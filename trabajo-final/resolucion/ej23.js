// 2
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

// 3
let resultado = sumar(2, 3);

// 4
alert(resultado);

// 5
function saludar(usuario) {
    // 6
    return 'Bienvenido ' + usuario + ' a spotify';
}

// 7
let saludo = saludar('nicolas');

// 8
alert(saludo);

// 9
function autenticar(usuario, password) {
    return (usuario === 'javascript101') && (password === 1234);
}

// 10
let usuarioValido = autenticar('javascript101', 1234);

// 11
alert(usuarioValido);

// 12
let usuarioValido = autenticar('ruby101', 12345);

// 13
alert(usuarioValido);

// 14
let nombreDeUsuario = 'javascript101';

// 15
let passwordDeUsuario = 1234;

// 16

if ( autenticar(nombreDeUsuario, passwordDeUsuario) ) {
    alert('Bienvenido javascript101 a spotify');
} else {
    alert('Usuario incorrecto');
}
