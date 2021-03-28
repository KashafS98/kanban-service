const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  description: {
      type: String,
      default: '',
      required: [false],
  },
  featuredImg: {
      type: String,
      required: [false],
    },
  taskState: {
    type: Schema.Types.ObjectId,
    ref: 'TaskStates',
    required: [false],
    },
},
{ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }, toJSON: { virtuals: true } }
);

module.exports = { schema };
