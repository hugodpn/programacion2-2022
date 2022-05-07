import express, {Request, Response} from 'express';

const PORT = 5005;
const app = express();

app.get("/saludar", (req: Request, res: Response) => {
    const nombre = req.query.nombre;
    const edad = req.query.edad;
    
    res.send(`<html><body><h1>Hola ${nombre}</h1><p>Tu edad es: ${edad}</p></body></html>`);
});

app.listen(PORT, () => {
    console.info(`Ejecutando en puerto ${PORT}`);
});