
const Report = require('../../models/execution-models/phase3Job');

exports.fetchReports = async (req, res) => {
  try {
    console.log("Fetching reports from MongoDB...");
    const reports = await Report.find(); // Fetch all reports from the database
    console.log("Reports fetched: ", reports);
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}
//exports.fetchReports = fetchReports;
