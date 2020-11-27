let archivoTareas = require ('./funcionesDeTareas');
let accion = process.argv [2];

switch(accion){
    case 'listar':
        console.log('listado de tareas');
        let tareas = archivoTareas.leerJson();
        for (let i= 0; i< tareas.length;i++){
            console.log(i+'.'+tareas[i].titulo+'-'+tareas[i].estado);
        }
        console.log()
        break;
         // Micro desafío 1
    // Atajar el caso en que no se envíe un parámetro
    case undefined:
        console.log('Tenés que pasarme una acción');
        break;

    // Micro desafío 2
    default:
        console.log('No entiendo qué me estás pidiendo');
        console.log('Las acciones disponibles son: listar');
        break;
}

