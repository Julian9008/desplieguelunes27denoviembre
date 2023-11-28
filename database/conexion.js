import mongoose from "mongoose";
export async function establecerConexion() {
    try {
        await mongoose.connect(process.env.Database)
        console.log("Exito en la conexion")
    } catch (error) {
        console.log("error en la conexion " + error)
    }
}