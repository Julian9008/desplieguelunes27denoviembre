import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReservas {
    constructor (){}
    async registrarReserva (peticion,respuesta){
        try {
            let servicioReserva = new ServicioReserva ()
            // checkear los datos que quieren usar para el registro
            let datosReservaRegistrar = peticion.body
            // validar los datos
            // enviar los datos a la base de datos para guardarlos
            await servicioReserva.resgistarReserva(datosReservaRegistrar)
            // responder 
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de guardado",
                "datos":datosReservaRegistrar
            })

        
        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
    async buscarReservas (peticion,respuesta) {
        try {
            let servicioReserva = new ServicioReserva ()
            // 1. intentar buscar los datos en BD
            // 2. Responder
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de busqueda",
                "datos":await servicioReserva.buscarReservas()
            })

        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
    async buscarReservaPorId (peticion,respuesta){
        try {
            let servicioReserva = new ServicioReserva ()
            //1. Checkear los parametros de la peticion 
            let idReservaBuscar = peticion.params.id
            // 2. validar el dato que llego
            // 3. buscar la habitacion en BD
            // 4. responder
            respuesta.status(200).json({
                "mensaje": "exito en la operacion de busqueda",
                "datos":await servicioReserva.buscarReservas(idReservaBuscar)
                
            })

        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
            })
        }
    }
    async modificarReserva (peticion,respuesta){

        try { 
            let servicioReserva = new ServicioReserva()
            //1. traigo el ID a modificar de la peticion
            let idReservaModificar = peticion.params.id
            let datosReservaModificar = peticion.body
            //2. validar datos
            //3. intentar buscar y modificar en bd
            await servicioReserva.modificarReserva(idReservaModificar,
                 datosReservaModificar)
            //4. responder

            respuesta.status(200).json({
                "mensaje": "exito en la operacion de modificacion",
                "datos":datosReservaModificar
                
            })

        }catch (error){
            respuesta.status(400).json({
                "mensaje": "falla en la operacion de guardado"+error
                
                
            })
        }
    }
    async borrarReserva(peticion, respuesta) {
        try {
            let servicioReserva = new ServicioReserva();
            let idReservaBorrar = peticion.params.id;
            // validar
            if (!idReservaBorrar) {
                respuesta.status(400).json({
                    "mensaje": "Falta el ID de la reserva a borrar."
                });
            } else {
                // Intento borrar la reserva en BD
                const resultado = await servicioReserva.borrarReserva(idReservaBorrar);
                if (resultado) {
                    respuesta.status(200).json({
                        "mensaje": "Exito en la operación de borrado",
                        "dato": resultado
                    });
                } else {
                    respuesta.status(404).json({
                        "mensaje": "Reserva no encontrada"
                    });
                }
            }
        } catch (error) {
            respuesta.status(400).json({
                "mensaje": "Falla en la operación de borrado: " + error
            });
        }
    }
}