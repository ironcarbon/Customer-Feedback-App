const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false }
});
// recipientSchema is a subdocument


module.exports = recipientSchema;
//Rather than registering the schema with Mongoose, we export the schema