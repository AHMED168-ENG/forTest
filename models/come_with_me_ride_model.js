import mongoose from 'mongoose'

const schema = new mongoose.Schema({


    user_id: { type: String, required: true },

    car_brand: { type: String, required: true },
    car_type: { type: String, required: true },

    user_lat: { type: Number, required: true },
    user_lng: { type: Number, required: true },

    destination_lat: { type: Number, required: true },
    destination_lng: { type: Number, required: true },

    from: { type: String, required: true },
    to: { type: String, required: true },

    distance: { type: String, required: true },

    duration: { type: String, required: true },

    passengers: { type: Number, required: true },

    price: { type: Number, required: true },

    phone: { type: String },

    is_repeat: { type: Boolean, required: true },

    time: { type: String, required: true },


    country_code: { type: String, required: true },
    requests: { type: Array },
    calls: { type: Array },

    is_approved : {type: Boolean , default : false},
}, { versionKey: false, timestamps: true })

export default mongoose.model("come_with_me_rides", schema);
