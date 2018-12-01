var filtro = require('../models/Filtro');
var filtroController = {};

filtroController.index =  async function(req,res,next){
    try {
        var filtros= await filtro.find();
        return res.status(200).json(filtros);
    } catch (error) {
        return res.status(500).json({error:error});
    }
};

filtroController.store = async function(req,res,next){
    var f = new filtro();
    f.codigo = req.body.codigo;
    f.tipo = req.body.tipo;
    f.precio = req.body.precio;
    try {
        await f.save();
        return res.status(200).json({message:"ingresado con ext"});
    } catch (error) {
        return res.status(500).json({error:error});
    }
};

filtroController.delete = async function(req,res,next){
let {id} = req.params;
try {
    await filtro.remove({_id:id});
    return res.status(200).json({message:"eliminaado con ext"})
} catch (error) {
    return res.status(500).json({error:error});
}
};

module.exports = filtroController;