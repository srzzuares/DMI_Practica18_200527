const obj = {};

obj.getAllPlayers = (req,res)=>{
    res.status(200).json({Hola: "Desde Get All Player"});
    console.log("Desde Get All Player")
}

obj.findOneById = (req,res)=>{
    const id = req.params.id;
    res.status(200).json({Hola: "Desde find one by ID : --- " + id});
    console.log("Desde find one by ID : --- " + id)
}

obj.findOneByEmail = (req,res)=>{
    const email = req.params.Email;
    res.status(200).json({Hola: "Desde find one by Email : --- " + email});
    console.log("Desde find one by Email : --- " + email)
}

obj.createOnePlayer = (req,res)=>{
    res.status(200).json({Hola: "Desde create one player"});
    console.log("Desde create one player")
}

obj.putPlayer = (req,res)=>{
    const id = req.params.id;
    res.status(200).json({Hola: "Desde put PLAYER : --- " + id});
    console.log("Desde put PLAYER : --- " + id)
}

obj.delPlayer = (req,res)=>{
    const id = req.params.id;
    res.status(200).json({Hola: "Desde delete Player : --- " + id});
    console.log("Desde delete Player : --- " + id)
}
obj.patchPlayer = (req,res)=>{
    const id = req.params.id;
    res.status(200).json({Hola: "Patch Player? : --- " + id});
    console.log("Patch Player? : --- " + id)
}
export default obj;