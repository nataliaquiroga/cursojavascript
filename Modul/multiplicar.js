function multiplicar (n1,n2){
    if (isNaN(n1)||isNaN(n2)){
        return "debe enviar valores numericos"
    }
    let resultado = n1*n2;
    return "El resultado de la multiplicacion es: " + resultado;
}

module.exports =multiplicar;