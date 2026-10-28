import express from 'express';
import { IUser } from '../../interfaces/IUser';
import createUser from './createUser'

function userRoutes(app: express.Application) {

    app.get('/usuarios', (req, res) => {
        res.send('Get all users');
    });

    app.post("/usuarios" , async (req , res) => {
        const resultado = IUser.safeParse(req.body);

        if(!resultado.success){
            res.send(resultado.error.flatten());
        }
        else{
             const retorno = await createUser(resultado.data);
             res.send(retorno)
        }
    })

}

export default userRoutes;