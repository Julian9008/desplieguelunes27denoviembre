
import { ServicioHabitacion} from "../services/ServicioHabitacion.js"

export class ControladorHabitaciones {

    constructor (){}
    async registrarHabitacion (peticion,respuesta){
        try {
            let servicioHabitacion = new ServicioHabitacion ()
            // checkear los datos que quieren usar para el registro
            let datosHabitacionRegistrar = peticion.body
            // validar los datos
            // enviar los datos a la base de datos para guardarlos
            await servicioHabitacion.resgistarHabitacion(datosHabitacionRegistrar)
            // responder 
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de guardado",
                "datos":datosHabitacionRegistrar
            })

        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
    async buscarHabitaciones (peticion,respuesta) {
        try { 
            let servicioHabitacion = new ServicioHabitacion ()
            // 1. intentar buscar los datos en BD
            // 2. Responder
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de busqueda",
                "datos":await servicioHabitacion.buscarHabitaciones()
            })

        }catch (error){ 
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
            
        }
    }
    async buscarHabitacionePorId (peticion,respuesta){
        try {
            let servicioHabitacion = new ServicioHabitacion ()
            //1. Checkear los parametros de la peticion 
            let idHabitacionBuscar = peticion.params.id
            // 2. validar el dato que llego
            // 3. buscar la habitacion en BD
            // 4. responder
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de busqueda",
                "datos":await servicioHabitacion.buscarHabitacion(idHabitacionBuscar)
            })

        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
    async modificarHabitacion (peticion,respuesta){
        try { 
            let servicioHabitacion = new ServicioHabitacion()
            //1. traigo el ID a modificar de la peticion
            let idHabitacionModificar = peticion.params.id
            let datosHabitacionModificar = peticion.body
            //2. validar datos
            //3. intentar buscar y modificar en bd
            await servicioHabitacion.modificarHabitacion(idHabitacionModificar,
                datosHabitacionModificar)
            //4. responder

            respuesta.status(200).json({
                "mensaje": "exito en la operacion de modificacion",
                "datos":datosHabitacionModificar
                
            })


        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
    async borrarHabitacion (peticion,respuesta){
        try {
            let servicioHabitacion = new ServicioHabitacion
            let idHabitacionBorrar = peticion.params.id
            
            // validar
            if (!idHabitacionBorrar) {
                respuesta.status(400).json({
                    "mensaje": "Falta el ID de la habitacion a borrar."
                });
            
            
            }
            //intento borrar la habitacion en bd
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de borrado",
                "dato": await servicioHabitacion.borrarHabitacion (idHabitacionBorrar)
                
            })  

        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
}