const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClusterSchema = new Schema({
  //id: { type: Number, required: true },
  //status: { type: String, required: true },
  servers: [{ type: Schema.Types.ObjectId, ref: 'Server' }],
  serverIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Server' }],
  poolId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pool' },
  status: { type: String, enum: ['available', 'running'], default: 'available' } // Add status field with default 'active'
});

module.exports = mongoose.model('Cluster', ClusterSchema);
