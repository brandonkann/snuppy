import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        student: { type: String, required: true },
        subject: { type: String, required: true },
        price: { type: Number, required: true },
        date: {type: Date, required: true},
        sessionNotes: {type: String, required: false},
        isPaid: {type: Boolean, default: false},
        age: {type: Number, required: true}
      },

      {
        timestamps: true,
      }
)


const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);

export default Session