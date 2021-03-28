const express = require("express");

const { Task } = require("../models/tasks");
const { TaskState } = require("../models/taskStates");

const task = require("../controllers/task");
const taskState = require("../controllers/taskState");

const models = {
  Task, TaskState
};

const routersInit = () => {

  const router = express();

  router.use("/task", task(models));
  router.use("/task-state", taskState(models));

  return router;
};

module.exports = routersInit;
