const mongoose = require('mongoose');

const versionSchema = new mongoose.Schema({
  versionNumber: { type: String, required: true },
  builds: [
    {
      buildId: { type: String, required: true }
    }
  ]
});


module.exports =  mongoose.model('Version', versionSchema);

