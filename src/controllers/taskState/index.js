const { Router: router } = require('express');
const create = require('./create');
const get = require('./get')
const list = require('./list');
const deleteTaskState = require('./delete');
const update = require('./update');

module.exports = (models) => {
  const api = router();
  api.post('/', create(models));
  api.delete('/:id', deleteTaskState(models));
  api.get('/:id', get(models));
  api.get('/', list(models));
  api.patch('/:id', update(models));
  return api;
};

