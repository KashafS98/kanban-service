const { sendUpdated } = require('../../middleware/index');
const create = ({ Task, User, WorkspaceMember }) => async (req, res, next) => {
  try {
    const {id} = req.params;
    const updatedData = req.body;
    const task = await Task.findOneAndUpdate({ _id: id }, updatedData, {new:true});
   
    // save to db
    await task.save()

    return sendUpdated(res, { task });
  } catch (error) {
    next(error);
  }
};

module.exports = create;
