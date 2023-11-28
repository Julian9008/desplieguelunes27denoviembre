import { modeloHabitacion } from "../Models/modeloHabitacion.js";
export class ServicioHabitacion {
    constructor (){}

    async resgistarHabitacion (datos){
        let habitacionNueva = new modeloHabitacion (datos)
    return await habitacionNueva.save()
    }
    async buscarHabitaciones (){
       let habitaciones =await modeloHabitacion.find()
       return habitaciones
    }
    async buscarHabitacion (id){
        let habitacion = await modeloHabitacion.findById (id)
        return habitacion
    }
    async modificarHabitacion (id,datos){
        return await modeloHabitacion.findByIdAndUpdate (id,datos)
    }
   async borrarHabitacion (id){
    let borrar = await modeloHabitacion.findByIdAndDelete (id)
    return borrar
   }

}