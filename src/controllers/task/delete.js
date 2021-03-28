const { sendDeleted } = require('../../middleware/index');
const deleteTask = ({ Task }) => async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findOneAndDelete({ _id: id });

    if (!deletedTask) {
      return res.status(404).json({ error: 'Task not found' }).end()
    }
    return sendDeleted(res, {deletedTask});
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTask
