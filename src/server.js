import ex from "express";
import 'dotenv/config'
import ROUTER from "./routes/playerRoutes.js";
const api = ex();
const port = process.env.PORT || 44446;

api.use(ex.json())
api.use("/player",ROUTER)
api.get('/' , (req,res) => { res.json({Hola:"Hola"})})
api.listen(port,()=>console.log("Tu Servidor se encuentra en ------------ http://localhost:"+port))