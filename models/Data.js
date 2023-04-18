const mongoose = require('mongoose');
const {Schema} = mongoose;

const DataSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    age: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    cp: {
        type: String,
        required: true
    },
    trestbps: {
        type: String,
        required: true
    },
    fbs: {
        type: String,
        required: true
    },
    restecg: {
        type: String,
        required: true
    },
    thalach: {
        type: String,
        required: true
    },
    exang: {
        type: String,
        required: true
    },
    oldpeak: {
        type: String,
        required: true
    },
    slope: {
        type: String,
        required: true
    },
    ca: {
        type: String,
        required: true
    },
    thal: {
        type: String,
        required: true
    },
    chol: {
        type: String,
        required: true
    },
    col: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: "General"
    }

  });

  module.exports = mongoose.model('data', DataSchema);