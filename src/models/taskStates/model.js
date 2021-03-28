const mongoose = require('mongoose');
const { schema } = require('./schema');

const TaskState = mongoose.model('TaskState', schema);
module.exports = { TaskState };