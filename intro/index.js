let array1 = ['hola', 'como']
let array2 = ['chau', 'adios']

function alternados (array1,array2){
  let concatenado = [];
  let a =[];
  let b =[];
  let frase;
  for (let i=0; i < array1.length ;i++){
    a = array1[i];  
    concatenado.push(a + " ");  
    b = array2[i];
    concatenado.push(b + " ");
    frase = concatenado.join('');
    

    
  
  }
    return frase +""+"!!!"

}

console.log(alternados(array1,array2))