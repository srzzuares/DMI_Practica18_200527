import express from "express";
import obj2 from "../controllers/partidaController.js"
const ruta = express.Router()


ruta.get('/getAll', obj2.getAllPartidas)
ruta.get('/getOneById/:id', obj2.findOneById)
ruta.get('/getOneByIdPlayer/:idPlayer', obj2.findOneByIdPlayer)
ruta.post('/createOnePartida', obj2.createOnePartida)
ruta.put('/updatePartida/:id', obj2.putPartida)
ruta.delete('/delPartida/:id', obj2.delPartida)
ruta.patch('/patchPartida/:id', obj2.patchPartida)

export default ruta;