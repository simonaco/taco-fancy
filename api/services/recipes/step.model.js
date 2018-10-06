const mongoose = require('mongoose');
const StepSchema = new mongoose.Schema(
  {
    description: String,
    time: String,
    number: String
  },
  {
    collection: 'Steps',
    read: 'nearest'
  }
);

const Step = mongoose.model('Step', StepSchema);
module.exports = Step;
