import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Reserva = new Schema({
 fechaEntrada: {
    type: Date,
required: true
},
fechaSalida: 
{type: Date,
    required: true
    },
numeroPersonas : {
    type: Number,
required: true
},
nombreQuienReserva: {
    type:String,
required: true
},
costoReserva: {
    type: Number,
    required: false
},
})

export const modeloReserva = mongoose.model('reservas',Reserva)