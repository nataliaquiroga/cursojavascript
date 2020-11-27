function dividir(n1,n2) {
    if(isNaN(n1) || isNaN(n2)) {
        return 'Debe enviar 2 numeros'
    }
    if (n2 == 0) {
        return "No se puede dividir por cero";
    }
    let resultado = n1 / n2;
    return "El resultado de la división es: " + resultado;
}

module.exports = dividir;