const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    user_id: {
        type: Number
    },
    username:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String
    },
    email:{
        type: String,
        require:true,
        unique: true
    }
})

module.exports = User = mongoose.model('user', UserSchema);