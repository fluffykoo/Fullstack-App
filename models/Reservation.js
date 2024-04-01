import mongoose from 'mongoose';

const ReservationSchema = new mongoose.Schema({
    userId: String,
    listingId: String,
    startDate: Date,
    endDate: Date
});

const Reservation = mongoose.model('Reservation', ReservationSchema);

export default Reservation;