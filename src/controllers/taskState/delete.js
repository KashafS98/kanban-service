const { sendDeleted } = require('../../middleware/index');
const deleteTask = ({ TaskState }) => async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedState = await TaskState.findOneAndDelete({ _id: id });

    if (!deletedState) {
      return res.status(404).json({ error: 'Task State not found' }).end()
    }

    return sendDeleted(res, {deletedState});
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTask
