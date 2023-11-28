import express, { Router } from 'express'
import {ControladorHabitaciones } from '../controllers/ControladorHabitaciones.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js';

let controladorHabitaciones = new ControladorHabitaciones();
let controladorReservas = new  ControladorReservas ();

export let rutas = express.Router()

rutas.post('/api/habitaciones', controladorHabitaciones.registrarHabitacion)
rutas.get('/api/habitaciones',controladorHabitaciones.buscarHabitaciones)
rutas.get('/api/habitaciones/:id',controladorHabitaciones.buscarHabitacionePorId)
rutas.put('/api/habitaciones/:id',controladorHabitaciones.modificarHabitacion)
rutas.delete('/api/habitaciones/:id',controladorHabitaciones.borrarHabitacion)

rutas.post('/api/reservas',controladorReservas.registrarReserva)
rutas.get('/api/reservas', controladorReservas.buscarReservas)
rutas.get('/api/reservas/:id', controladorReservas.buscarReservaPorId)
rutas.put('/api/reservas/:id',controladorReservas.modificarReserva)
rutas.delete('/api/reservas/:id',controladorReservas.borrarReserva)