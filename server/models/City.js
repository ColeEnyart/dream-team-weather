const { Schema } = require('mongoose')

const citySchema = new Schema({
    city: {
        type: String,
        required: true,
    },
    temperature: {
        type: Integer,
        required: true,

    },
    humidity: {
        type: Integer,
        required: true,

    },
    uvIndex: {
        type: Integer,
        required: true,

    },

})
