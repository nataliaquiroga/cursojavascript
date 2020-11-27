//con este método podemos manejar archivos 
const fs = require('fs');

//mostrar las tareas por terminal, guardar el contenido del archivo tareas.json 
//en una variable y convertir la misma a un dato tipo array.

let archivoTareas = {
    archivo: 'tareas.json',
    leerJson: function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'))

    }
    
}
module.exports = archivoTareas;