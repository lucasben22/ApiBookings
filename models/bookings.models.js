
import { Schema, model } from "mongoose";
import { userModel } from "./users.models.js";

const bookingSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, 
        ref: 'users', 
        required: true }, 
  room: { type: Number, 
          required: true },
  checkInDate: { type: Date, 
              required: true },
  checkOutDate: { type: Date, 
                required: true },
  numberOfGuests: { type: Number, 
                  required: true, min: 1 },
  totalPrice: { type: Number }
//   bookingStatus: { type: String, 
//                 enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
});

export const bookingModel = model('bookings', bookingSchema);