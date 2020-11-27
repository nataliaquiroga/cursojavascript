let autos = require ('./autos');
let personas = require ('./personas');
let concesionaria = {
autos: autos,
personas:personas,

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

    puedeComprar:function(persona, auto){
        let cuotas = this.autos.precio/this.autos.cuotas
        let capacidadcuotas = this.personas.capacidadDePagoEnCuotas
        let pagototal= this.personas.capacidadDePagoTotal
        let precio =this.autos.precio
        if(pagototal >= precio){
        }else if(capacidadcuotas >= cuotas){
                return "true de dos if"
        } return "false de if principal"
        

    }
       
} 


/*
{
    nombre: “Juan”,
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }*/

//console.log(concesionaria.buscarAuto('JJK116'))
//console.log(concesionaria.venderAuto('APL123'))
//console.log(concesionaria.venderAuto('JJK116'))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autos0KM())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.totalDeVentas())
console.log(concesionaria.puedeComprar(10,5))

