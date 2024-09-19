const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PoolSchema = new Schema({
  //id: { type: Number, required: true },
  name: { type: String, required: true, unique: true },
  clusters: [{ type: Schema.Types.ObjectId, ref: 'Cluster' }],
  status: { type: Boolean, required: true },
  photoUrl: { type: String, required: true },
  clusterIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cluster' }]
});

module.exports = mongoose.model('Pool', PoolSchema);
