import { userModel } from "../models/users.models.js";

export const getUsers = async (req,res) => {
    try {
        const users = await userModel.find()
		res.status(201).send({respuesta: 'OK', mensaje: users})
	} catch(error){
		res.status(400).send({respuesta: 'Error', mensaje: error})
	}
}

export const postUser = async (req,res) => {
    const {nombre, apellido, edad, email} = req.body
	
    if (!nombre || !apellido || !edad || !email) {
        return res.status(400).send({respuesta: 'Error', mensaje: 'Faltan datos obligatorios'});
    }

    try {
        const nuevoUsuario = await userModel.create({nombre, apellido, edad, email});
        res.status(201).send({respuesta: 'OK', mensaje: nuevoUsuario});
    } catch (error) {
        res.status(400).send({respuesta: 'Error', mensaje: error.message});
    }

}