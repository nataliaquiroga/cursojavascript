let concesionaria = {

personas:{
        nombre: 'Juan',
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 100000
        },

 autos: [ 
    {
    marca: 'Ford ',
    modelo: 'Fiesta',
    precio: 150000,
    km: 200,
    color:'Azul',
    cuotas: 12,
    anio: 2019,
    patente:'APL123',
    vendido: false
},
{
    marca: 'Toyota ',
    modelo: 'Corolla',
    precio: 100000,
    km: 0,
    color:'Blanco',
    cuotas: 14,
    anio: 2019,
    patente:'JJK116',
    vendido:false
}],
puedeComprar : function (auto, persona){
    auto = this.autos
    let a=auto.precio
    let b=auto.cuota
    for (i=0; i<=auto.length; i++){
    let cuota = a[i]/b[i]
    
    return (this.personas.capacidadDePagoEnCuotas >= cuota && this.personas.capacidadDePagoTotal >= auto.precio) ? true : false;
 }
},

 autosQuePuedeComprar: function (persona){
    let personaPuedeComprar = this.puedeComprar()
    let lista
    if (personaPuedeComprar == true){
         lista = autos.findIndex(personaPuedeComprar)
    }
    return lista
 }

}
console.log(concesionaria.puedeComprar(this.autos,this.personas))
//console.log(concesionaria.autosQuePuedeComprar(this.personas))