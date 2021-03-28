const mongoose = require('mongoose');

class MongoManager {
  constructor() {

  }
  getMongoUrl() {
    return 'mongodb://127.0.0.1:27017/kanban';
  }
  connect() {
    return mongoose.connect(this.getMongoUrl(), { useNewUrlParser: true });
  }
}

const mongoManager = new MongoManager();

module.exports = { mongoManager };