import Player from "../models/playerModel.js";
const date = new Date();
const obj = {};


obj.getAllPlayers = async (req,res)=>{
    try {
        const getAll = await Player.findAll()
        if(!getAll) return res.status(200).json({ Data: "No se encuentra ningún registro" });
        else return res.status.json({ Data: getAll })
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in Get All' });
    }
}

obj.findOneById = async (req,res)=>{
    const id = req.params.id;
    try {
        const getOneById = await Player.findOne({where: {idPlayer: id}});
        if(getOneById === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else return res.status(200).json({ Data: getOneById });
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in find Id' });
    }
}

obj.findOneByEmail = async (req,res)=>{
    const Email = req.params.idEmail;
    try {
        const getOneByEmail = await Player.findOne({where: {email: Email}});
        if (getOneByEmail === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else return res.status(200).json({ Data: getOneByEmail });
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in find Email' });
    }
}

obj.createOnePlayer = async (req,res)=>{
    const {name,email,password,nickname,bithday,portrait_img} = req.body;
    try {
        const Create = await Player.create({
            name,
            email,
            password,
            nickname,
            bithday,
            portrait_img
        });
        return res.status(200).json({ Data: "Player creado exitosamente con id : " + Create.idPlayer});
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in Created' });
    }
}

obj.putPlayer = async (req,res)=>{
    const [id, updatedAt] = [req.params.id, date];
    const findPlayer = await Player.findOne({where:{idPlayer: id}})
    const {name,email,password,nickname,bithday,portrait_img,Estatus} = req.body;
    try {
        if(findPlayer === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else {
            const Update = await findPlayer.update({
                name,
                email,
                password,
                nickname,
                bithday,
                portrait_img,
                Estatus,
                updatedAt
            });
            return res.status(200).json({ Data: "Player actualizado exitosamente con id : " + Update.idPlayer});
        }
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in Update' });
    }
}

obj.delPlayer = async (req,res)=>{
    const id = req.params.id;
    try {
        const getOneByIdDel = await Player.findOne({where: {idPlayer: id}});
        if(getOneByIdDel === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else {
            const delPlayer = getOneByIdDel.destroy();
            return res.status(200).json({ Data: "Se elimino el Player con id : " + getOneByIdDel.idPlayer });
        }
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in delete' });
    }
}

obj.patchPlayer = async (req,res)=>{
    const id = req.params.id;
    try {
        const getOneByIdDelEst = await Player.findOne({where: {idPlayer: id}});
        if(getOneByIdDelEst === null) return res.status(500).json({ Data: "Id no encontrado o incorrecto" });
        else {
            if (getOneByIdDelEst.Estatus === true) {
                getOneByIdDelEst.Estatus=false
                await getOneByIdDelEst.save();
                return res.status(200).json({ Data: "Se desactivo el Player con id : " + getOneByIdDelEst.idPlayer + " " + getOneByIdDelEst.Estatus });
            }else {
                getOneByIdDelEst.Estatus=true
                await getOneByIdDelEst.save();
                return res.status(200).json({ Data: "Se activo el Player con id : " + getOneByIdDelEst.idPlayer + " " + getOneByIdDelEst.Estatus });
            }
        }
    } catch (error) {
        console.log('Hubo un Error', error);
        return res.status(500).json({ message: 'Internal server error in delete Estatus' });
    }
}
export default obj;