let autos = require ('./autos');
//let personas = require ('./personas');
let concesionaria = {
autos: autos,
personas:{
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 200000000000,
    capacidadDePagoTotal: 1000000000000
    },

buscarAuto:  function (patente){
     let autocoincide = autos.find(function(auto){
     return auto.patente == patente    
     })
     if (autocoincide === undefined){     
        return  null   
    }  return autocoincide
    
},

venderAuto: function(patente){
    let autoexiste = this.buscarAuto(patente)
        if (autoexiste){
            autoexiste.vendido = true
            let index = autos.findIndex((variable)=>variable.patente==patente)
            autos[index]= autoexiste
        } 
        let a = autos.filter((v)=>v.vendido==true)
        return a   
    }, 

    autosParaLaVenta: function (){
        return autos.filter((variable=>!variable.vendido))
    },

    autos0KM: function (){
        let autoventa = this.autosParaLaVenta()
        let cerokm = autoventa.filter(auto=>{return(auto.km<=100)})
        return cerokm
    },

   

    listaDeVentas: function(){
        let autolista = this.venderAuto()
        let lista = autolista.map(function(x){
            return x.precio
         }) 
         return lista
    },

    totalDeVentas: function(){
        let listasumar = this.listaDeVentas()
        if (listasumar > 0 ){
        let suma = listasumar.reduce(function(acum,num){
           return acum + num;
        }) 
        return suma
      } return 0   
    },

        puedeComprar : function (auto, persona){
            const cuota = 15000/12;
         return (this.personas.capacidadDePagoEnCuotas >= cuota && this.personas.capacidadDePagoTotal >= 15000) ? true : false;
         },

         autosQuePuedeComprar: function (persona){
            let personaPuedeComprar = this.puedeComprar()
            let filtro = personaPuedeComprar.filter(this.puedeComprar(auto,persona))
            return filtro
        }

} 

/*
Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
Al llamar a la función autosQuePuedeComprar una persona con capacidadDePagoEnCuotas: 30000 y capacidadDePagoTotal: 100000000 debe devolver todos los autos
Al llamar a la función autosQuePuedeComprar una persona con capacidadDePagoEnCuotas: 7200 y capacidadDePagoTotal: 100000000 debe devolver 1 auto*/
//console.log(concesionaria.buscarAuto('JJK116'))
//console.log(concesionaria.venderAuto('APL123'))
//console.log(concesionaria.venderAuto('JJK116'))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autos0KM())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
console.log(concesionaria.puedeComprar(this.autos,this.personas))
console.log(concesionaria.autosQuePuedeComprar(this.personas))

