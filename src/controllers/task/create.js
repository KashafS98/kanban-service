const { sendCreated } = require("../../middleware/index");

const create = ({ Task }) => async (req, res, next) => {
  // return res.status(200).send('hello')
  try {
    const data = req.body;

    const task = new Task(data);

    // save to db
    await task.save();

    return sendCreated(res, { task });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
