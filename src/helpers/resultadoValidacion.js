import { validationResult } from "express-validator";

const resultadosValidacion = (req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return res.status(400).json({errors: errors.array()}); //muestra todos los errores encontrados
        //return res.status(400).json({errors: errors.mapped()}); //muestra el primer error que se rompe
    }
    next();
}

export default resultadosValidacion;
