const { sendOne } = require('../../middleware/index');
const get = ({ Task }) => async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id })
  return sendOne(res, { task });
};
module.exports = get;
