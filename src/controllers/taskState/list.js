const { sendList } = require('../../middleware/index');
const list = ({ TaskState }) => async (req, res) => {
  
  const aggregation = [
    {
      '$lookup': {
        'from': 'tasks', 
        'localField': '_id', 
        'foreignField': 'taskState', 
        'as': 'tasks'
      }
    }
  ]

  const taskState = await TaskState.aggregate(aggregation)
  return sendList(res, { taskState });
};
module.exports = list;
