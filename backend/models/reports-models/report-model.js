
const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tests: [{ type: String }],  // Array of test names or IDs
  version: { type: String, required: true },
  status: { type: String, required: true },
  cluster: { type: mongoose.Schema.Types.ObjectId, ref: 'Cluster', required: true },  // Assuming `cluster` is a reference to another collection
  pool: { type: mongoose.Schema.Types.ObjectId, ref: 'Pool', required: true },  // Assuming `pool` is a reference to another collection
  schedType: { type: String, required: true },
  estimatedRunTime: { type: String, required: true },
  date: { type: Date, required: true },  // The date field is stored as a Date object
  triggeredBy: { type: String, required: true },
  startTime: { type: Date },  // Start time as Date object
  endTime: { type: Date },  // End time as Date object
  runtimeDuration: { type: String },  // Duration as string
  testResults: [{ type: String }]
});

module.exports = mongoose.model('Report', reportSchema);
