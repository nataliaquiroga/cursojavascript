const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerJSON: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJson: function(){
        let tareasEnJason=JSON.stringify(tareas, null,2);
        fs.writeFileSync(this.archivo, tareasEnJason)
    }
    

}

module.exports = archivoTareas;