const mongoose = require('mongoose');
const { schema } = require('./schema');

const Task = mongoose.model('Tasks', schema);
module.exports = { Task };