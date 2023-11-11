import ex from "express";
import 'dotenv/config'
import dbsequelize from "./config/db.js"
import Player from "./models/playerModel.js";
import ROUTER from "./routes/playerRoutes.js";

const api = ex();
const port = process.env.PORT || 44446;

api.listen(port,()=>console.log("Tu Servidor se encuentra en ------------ http://localhost:"+port))

try {
    console.log("STATUS => Conexión a base de datos...")
    dbsequelize.authenticate()
    console.log("STATUS => Ha Sido Exitosa")
    console.log("STATUS => Sincronizando objetos existentes")
    dbsequelize.sync(/* {force:true} */)
    console.log("STATUS => Conexión establecida correctamente para realizar operaciones")
} catch (error) {
    console.error("La base de datos no se encuentra disponible \n " + error)
}
api.use(ex.json())
api.use("/player",ROUTER)
api.get('/' , (req,res) => { res.json({Hola:"Hola"})})