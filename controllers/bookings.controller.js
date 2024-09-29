import { bookingModel } from "../models/bookings.models.js";
import { userModel } from "../models/users.models.js";

export const getBookings = async (req, res) => {
    try {
        const bookings = await bookingModel.find().populate('userId'); // Usar populate para obtener los datos del usuario
        res.status(200).send({ respuesta: 'OK', mensaje: bookings });
    } catch (error) {
        res.status(400).send({ respuesta: 'Error', mensaje: error.message });
    }
};


export const postBooking = async (req, res) => {
const {userId, room, checkInDate, checkOutDate, numberOfGuests, totalPrice } = req.body
	
    if (!userId || !room || !checkInDate || !checkOutDate || !numberOfGuests)
 { 
        return res.status(400).send({respuesta: 'Error', mensaje: 'Faltan datos obligatorios'});
    }

    try {
        const userExists = await userModel.findById(userId);
        if (!userExists) {
            return res.status(400).send({ respuesta: 'Error', mensaje: 'Usuario no encontrado' });
        }

        const existingBooking = await bookingModel.findOne({
            userId,
            $or: [
                { checkInDate: { $lte: checkOutDate, $gte: checkInDate } },
                { checkOutDate: { $gte: checkInDate, $lte: checkOutDate } },
                { checkInDate: { $gte: checkInDate, $lte: checkOutDate }, checkOutDate: { $lte: checkOutDate } } // Todo el rango se superpone
            ]
        });

        if (existingBooking) {
            return res.status(400).send({ respuesta: 'Error', mensaje: 'El usuario ya tiene una reserva activa en esas fechas' });
        }

        const newBooking = await bookingModel.create({ userId, room, checkInDate, checkOutDate, numberOfGuests, totalPrice });
        res.status(201).send({ respuesta: 'OK', mensaje: newBooking });

    } catch (error) {
        res.status(400).send({respuesta: 'Error', mensaje: error.message});
    }
}