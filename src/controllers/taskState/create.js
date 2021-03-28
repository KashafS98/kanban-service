const { sendCreated } = require('../../middleware/index');

const create = ({ TaskState }) => async (req, res, next) => {
  try {
    const data = req.body;

    const taskState = new TaskState(data);

    // save to db
    await taskState.save();

    return sendCreated(res, { taskState });

  } catch (error) {
    next(error);
  }
};

module.exports = create;
