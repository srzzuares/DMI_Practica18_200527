import Partida from "../models/partidaModel.js";
const date = new Date();
const obj2 = {};


obj2.getAllPartidas = async (req,res)=>{
    try {
        const getAll = await Partida.findAll();
        if(!getAll) return res.status(200).json({ Data: "No se encuentra ningún registro" });
        else return res.status(200).json({ Data: getAll })
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in Get All' });
    }
}

obj2.findOneById = async (req,res)=>{
    const id = req.params.id;
    try {
        const getOneById = await Partida.findOne({where: {idPartida: id}});
        if(getOneById === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else return res.status(200).json({ Data: getOneById });
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in find Id Partida' });
    }
}

obj2.findOneByIdPlayer = async (req,res)=>{
    const idPlayer = req.params.idPlayer;
    try {
        const getOneByidPlayer = await Partida.findOne({where: {idPlayer}});
        console.log(getOneByidPlayer)
        if (getOneByidPlayer === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else return res.status(200).json({ Data: getOneByidPlayer });
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in find idPlayer' });
    }
}

obj2.createOnePartida = async (req,res)=>{
    const {idPlayer,level,startGame,endGame,score_st,score_end,previos_game_leve_ID} = req.body;
    try {
        const Create = await Partida.create({
            idPlayer,
            level,
            startGame,
            endGame,
            score_st,
            score_end,
            previos_game_leve_ID
        });
        return res.status(200).json({ Data: "Partida creado exitosamente con id : " + Create.idPartida});
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in Created' });
    }
}

obj2.putPartida = async (req,res)=>{
    const [id, updatedAt] = [req.params.id, date.toLocaleString()];
    const findPartida = await Partida.findOne({where:{idPartida: id}})
    const {idPlayer,level,startGame,endGame,score_st,score_end,previos_game_leve_ID,Estatus} = req.body;
    try {
        if(findPartida === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else {
            const Update = await findPartida.update({
                idPlayer,
                level,
                startGame,
                endGame,
                score_st,
                score_end,
                previos_game_leve_ID,
                Estatus,
                updatedAt
            });
            return res.status(200).json({ Data: "Partida actualizado exitosamente con id : " + Update.idPartida});
        }
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in Update' });
    }
}

obj2.delPartida = async (req,res)=>{
    const id = req.params.id;
    try {
        const getOneByIdDel = await Partida.findOne({where: {idPartida: id}});
        if(getOneByIdDel === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else {
            const delPartida = getOneByIdDel.destroy();
            return res.status(200).json({ Data: "Se elimino el Partida con id : " + getOneByIdDel.idPartida });
        }
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in delete' });
    }
}

obj2.patchPartida = async (req,res)=>{
    const [id, updatedAt] = [req.params.id, date.toLocaleString()];
    try {
        const getOneByIdDelEst = await Partida.findOne({where: {idPartida: id}});
        if(getOneByIdDelEst === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else {
            if (getOneByIdDelEst.Estatus) {
                getOneByIdDelEst.Estatus=false
                getOneByIdDelEst.updatedAt=updatedAt
                await getOneByIdDelEst.save();
                return res.status(200).json({ Data: "Se desactivo el Partida con id : " + getOneByIdDelEst.idPartida + " " + getOneByIdDelEst.Estatus });
            }else {
                getOneByIdDelEst.Estatus=true
                getOneByIdDelEst.updatedAt=updatedAt
                await getOneByIdDelEst.save();
                return res.status(200).json({ Data: "Se activo el Partida con id : " + getOneByIdDelEst.idPartida + " " + getOneByIdDelEst.Estatus });
            }
        }
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in delete Estatus' });
    }
}
export default obj2;