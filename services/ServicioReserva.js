import { modeloReserva } from "../Models/modeloReserva.js";



export class ServicioReserva {
    constructor (){}    

   async resgistarReserva (datos){
    let reservaNueva = new modeloReserva (datos)
    return await reservaNueva.save()
    }
   async buscarReservas (){
    let reservaciones =await modeloReserva.find()
    return reservaciones
   }
   async buscarReserva (id){
    let reserva = await modeloReserva.findById (id)
        return reserva
   }
   async modificarReserva (id,datos){

    return await modeloReserva.findByIdAndUpdate (id,datos)
   }
   async borrarReserva (id){
    let borrar = await modeloReserva.findByIdAndDelete (id)
    return borrar
   }
}