
import getConnection from "./../db/database.js"

const getcategorias = async (req,res) =>{
    const connection = await getConnection();
    const result = await connection.query("SELECT categoriaID, Categorias,Descripcion,Imagen FROM categorias");
    console.log(result);
    res.json(result);
}

export const methodsHTTP = {
    getcategorias
}