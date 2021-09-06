import mongoose from 'mongoose';
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');



// const { isAuthenticated } = require('../helpers/libs');
export const User = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: { type: String, require: true },
});


User.methods.encryptPassword = async (password:string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;

};

UserSchema.methods.matchPassword = async function (password:string) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('user', User)