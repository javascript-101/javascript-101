// 1

let nombreEmpresaUno = "Empresa1";
let saludoEmpresaUno = "Buenas tardes, muchas gracias por adquirir su torta.";

let nombreEmpresaDos = "Empresa2";
let saludoEmpresaDos = "¡Hola! Muy buena onda que compren tortas ;D";

let nombreEmpresaTres = "Empresa3";
let saludoEmpresaTres = "¡Muchas thank you!";

let saludoGenérico = "¡Muchas gracias!";

function devolverSaludo() {
    let empresaCargadaPorUsuario = prompt("Por favor, escriba el nombre de una empresa")

    if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaUno)
    } else if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaDos)
    } else if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaTres)
    } else {
        let confirmacion = confirm("Esa empresa no existe, ¿Deseas ver un saludo genérico?");
        if (confirmacion) {
            alert(saludoGenérico);
        } else {
            devolverSaludo();
        }
    }
}

// devolverSaludo();

// 2

let nombreEmpresaUno = "Empresa1";
let saludoEmpresaUno = "Buenas tardes, muchas gracias por adquirir su torta.";
let tortasCompradasEmpresaUno = 352;

let nombreEmpresaDos = "Empresa2";
let saludoEmpresaDos = "¡Hola! Muy buena onda que compren tortas ;D";
let tortasCompradasEmpresaUno = 470;

let nombreEmpresaTres = "Empresa3";
let saludoEmpresaTres = "¡Muchas thank you!";
let tortasCompradasEmpresaUno = 563;

let saludoGenérico = "¡Muchas gracias!";

let tortasExtrasPedidoMinimo = 10;
let tortasExtrasDadas = 1;
let tortasExtrasCada = 15;

function devolverSaludo(nombreEmpresa) {
    let empresaCargadaPorUsuario = nombreEmpresa;
    if (!empresaCargadaPorUsuario) {
        empresaCargadaPorUsuario = prompt("Por favor, escriba el nombre de una empresa")
    }

    if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaUno)
    } else if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaDos)
    } else if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaTres)
    } else {
        let confirmacion = confirm("Esa empresa no existe, ¿Deseas ver un saludo genérico?");
        if (confirmacion) {
            alert(saludoGenérico);
        } else {
            devolverSaludo();
        }
    }
}

function aplicarDescuentos(cantidadTortasCompradasEmpresa, monto) {

    let descuentoNivel1TortasNecesarias = 100;
    let descuentoNivel1Valor = 0.10;

    let descuentoNivel2TortasNecesarias = 500;
    let descuentoNivel2Valor = 0.15;

    if (cantidadTortasCompradasEmpresa >= descuentoNivel2TortasNecesarias) {
        return monto - (1 - descuentoNivel2Valor);
    } else if (cantidadTortasCompradasEmpresa >= descuentoNivel1TortasNecesarias) {
        return monto - (1 - descuentoNivel1Valor);
    } else {
        return monto;
    }
}

function devolverMontoTotal(nombreEmpresa) {
    let empresaCargadaPorUsuario = nombreEmpresa;
    if (!empresaCargadaPorUsuario) {
        empresaCargadaPorUsuario = prompt("Por favor, escriba el nombre de una empresa")
    }

    let monto = Number(prompt("Por favor, escriba el valor del monto"))

    if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(aplicarDescuentos(tortasCompradasEmpresaUno, monto))
    } else if (empresaCargadaPorUsuario === nombreEmpresaDos) {
        alert(aplicarDescuentos(tortasCompradasEmpresaDos, monto))
    } else if (empresaCargadaPorUsuario === nombreEmpresaTres) {
        alert(aplicarDescuentos(tortasCompradasEmpresaTres, monto))
    } else {
        alert(monto)
    }
}

let empresaCargadaPorUsuario = prompt("Por favor, escriba el nombre de una empresa")
devolverMontoTotal(empresaCargadaPorUsuario);
devolverSaludo(empresaCargadaPorUsuario);
