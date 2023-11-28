import { Api } from "./Api.js"
import 'dotenv/config'

//console.log(process.env)


// para usar una clase debo crear un objeto
// para usar una clase debe crar una instancia
// todo objeto es una variable
let servidor = new Api()

//levantar o despertar el servidor
servidor.levantarServidor()