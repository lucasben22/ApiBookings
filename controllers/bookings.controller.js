import { bookingModel } from "../models/bookings.models.js";

export const postBooking = async (req, res) => {

const {userId, room, checkInDate, checkOutDate, numberOfGuests, totalPrice } = req.body
	
    if (!room || !checkInDate || !checkOutDate || !numberOfGuests)
 {
        return res.status(400).send({respuesta: 'Error', mensaje: 'Faltan datos obligatorios'});
    }

    try {
        const newBooking = await bookingModel.create({userId, room, checkInDate, checkOutDate, numberOfGuests, totalPrice});
        res.status(201).send({respuesta: 'OK', mensaje: newBooking});
    } catch (error) {
        res.status(400).send({respuesta: 'Error', mensaje: error.message});
    }

}