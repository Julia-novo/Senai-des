const validaGerente = (req, res, next) => {
    const usuario = req.headers['user'];

    if(usuario.cargo.toLowerCase () === "gerente"){
        next();
    } else{
        res.status(401).json({
            msg:"Usuário sem premissao"
        }).end();
    }
};

const validarEditor = (req, res, next) => {
    const usuario = req.headers['user'];

    if(
        usuario.cargo.toLowerCase() === "editor" ||
        usuario.cargo.toLowerCase() === "gerente"
    ){
        next();
    } else{
        res.status(401).json({
            msg:"Usuário sem premissao"
        }).end();
    }
};



module.exports = {
    validaGerente,
    validarEditor
}