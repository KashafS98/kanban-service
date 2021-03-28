const { sendList} = require('../../middleware/index');
const list = ({ Task }) => async (req, res) => {
  
  const task = await Task.find()
  return sendList(res, { task });
};
module.exports = list;
