const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  key: {
    type: Number,
    required: [false],
  },
},
{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, toJSON: { virtuals: true } }
);

module.exports = { schema };