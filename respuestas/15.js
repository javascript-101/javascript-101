// 1

const nombreEmpresaUno = "Empresa1";
const saludoEmpresaUno = "Buenas tardes, muchas gracias por adquirir su torta.";

const nombreEmpresaDos = "Empresa2";
const saludoEmpresaDos = "¡Hola! Muy buena onda que compren tortas ;D";

const nombreEmpresaTres = "Empresa3";
const saludoEmpresaTres = "¡Muchas thank you!";

const saludoGenérico = "¡Muchas gracias!";

function devolverSaludo() {
    const empresaCargadaPorUsuario = prompt("Por favor, escriba el nombre de una empresa")

    if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaUno)
    } else if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaDos)
    } else if (empresaCargadaPorUsuario === nombreEmpresaUno) {
        alert(saludoEmpresaTres)
    } else {
        const confirmacion = confirm("Esa empresa no existe, ¿Deseas ver un saludo genérico?");
        if (confirmacion) {
            alert(saludoGenérico);
        } else {
            devolverSaludo();
        }
    }
}

// devolverSaludo();

// 2

const nombreEmpresaUno = "Empresa1";
const saludoEmpresaUno = "Buenas tardes, muchas gracias por adquirir su torta.";
const tortasCompradasEmpresaUno = 352;

const nombreEmpresaDos = "Empresa2";
const saludoEmpresaDos = "¡Hola! Muy buena onda que compren tortas ;D";
const tortasCompradasEmpresaUno = 470;

const nombreEmpresaTres = "Empresa3";
const saludoEmpresaTres = "¡Muchas thank you!";
const tortasCompradasEmpresaUno = 563;

const saludoGenérico = "¡Muchas gracias!";

const tortasExtrasPedidoMinimo = 10;
const tortasExtrasDadas = 1;
const tortasExtrasCada = 15;

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
        const confirmacion = confirm("Esa empresa no existe, ¿Deseas ver un saludo genérico?");
        if (confirmacion) {
            alert(saludoGenérico);
        } else {
            devolverSaludo();
        }
    }
}

function aplicarDescuentos(cantidadTortasCompradasEmpresa, monto) {

    const descuentoNivel1TortasNecesarias = 100;
    const descuentoNivel1Valor = 0.10;

    const descuentoNivel2TortasNecesarias = 500;
    const descuentoNivel2Valor = 0.15;

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

    const monto = Number(prompt("Por favor, escriba el valor del monto"))

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

const empresaCargadaPorUsuario = prompt("Por favor, escriba el nombre de una empresa")
devolverMontoTotal(empresaCargadaPorUsuario);
devolverSaludo(empresaCargadaPorUsuario);
