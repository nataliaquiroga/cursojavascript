function multiplicar (n1, n2){
    if (isNaN(n1)|| isNaN (n2)){
        console.log('debe ingresar 2 numeros')
    }
    let resultado = n1*n2
    return resultado
}
module.exports = multiplicar;

