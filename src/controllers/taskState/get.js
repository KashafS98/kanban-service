const { sendOne } = require('../../middleware/index');
const get = ({ TaskState }) => async (req, res) => {
  const { id } = req.params;
  const taskState = await TaskState.findOne({ _id: id })
  return sendOne(res, { taskState });
};
module.exports = get;
