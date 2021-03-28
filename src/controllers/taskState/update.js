const { sendUpdated } = require('../../middleware/index');
const update = ({ TaskState }) => async (req, res, next) => {
  try {
    const {id} = req.params;
    const updatedData = req.body;
    console.log(id, updatedData)
    const taskState = await TaskState.findOneAndUpdate({ _id: id }, updatedData, {new:true});
   
    // save to db
    await taskState.save()

    return sendUpdated(res, { taskState });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
