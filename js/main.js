//Promedio Compras 

function calcularPromedioCompras () {
    let cantCompras = parseInt(prompt('Para calcular promedio de las compra, primero ingrese la cantidad de compras que desea calcular (MAXIMO 30)'));
    
    while (cantCompras > 30) {
        alert('Podes ingresar maximo 50 compras, por favor, ingrese menos');
        cantCompras = parseInt(prompt('Para calcular promedio de las compras, primero ingrese la cantidad de compras que desea calcular (MAXIMO 30)'));
    }

    var totalSumaCompras = 0;
    for (let i = 1; i <= canCompras; i++) {
        let nombreCompras = prompt('Ingresa el nombre de la compra ' + i);
        for (let n = 1; n <= 3; n++) {
            let valorCompra = parseInt(prompt('Ingrese el monto de la compra' + n + ' de la compra ' + nombreCompra));
            if (nombreCompra > 0) {
                totalSumaCompras += nombreCompra;
            }
        }
        alert('El promedio de la compra ' + nombreCompra + ' es ' + promedio(totalSumaCompras));
        totalSumaCompras= 0;
    }

    function promedio(total) {
        return total / 4;
    }
}


calcularPromedioCompras();