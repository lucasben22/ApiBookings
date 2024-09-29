import { userModel } from "../models/users.models.js";

export const getUsers = async (req,res) => {
    try {
        const users = await userModel.find()
		res.status(201).send({respuesta: 'OK', mensaje: users})
	} catch(error){
		res.status(400).send({respuesta: 'Error', mensaje: error})
	}
}

export const getUserById = async (req, res) => {
    const {id} = req.params;
    
    try {
        const user = await userModel.findById(id)
        if(user) {
			res.status(201).send({respuesta: 'OK', mensaje: user})
        }else{
            res.status(404).send({respuesta: 'Error', mensaje: "User not found"})
            } 
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

export const putUser = async (req,res) => {
    const {id} = req.params;
    const {nombre, apellido, edad, email} = req.body
	
    if (!nombre || !apellido || !edad || !email) {
        return res.status(400).send({respuesta: 'Error', mensaje: 'Faltan datos obligatorios'});
    }

    try {
        const user = await userModel.findByIdAndUpdate(id, {nombre, apellido, edad, email});
        if (user)       
            res.status(201).send({respuesta: 'OK', mensaje: user});
        else 
            res.status(404).send({respuesta: 'Error', mensaje: "User not found"})
    } catch (error) {
        res.status(400).send({respuesta: 'Error', mensaje: error.message});
    }

}

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
         const userDeleted = await userModel.findByIdAndDelete(id);
         if (!userDeleted) {
            return res.status(404).send({ respuesta: 'Error', mensaje: 'User not found' });
        }
        res.status(200).send({ respuesta: 'OK', mensaje: 'Usuario eliminado' });
    } catch (error) {
            res.status(400).send({respuesta: 'Error', mensaje: error.message});
    }
}