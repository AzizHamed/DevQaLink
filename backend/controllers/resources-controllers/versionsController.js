const version = require('../../models/resources-models/version');

exports.findAllVersions = async (req, res) => {
    try {
        const versions = await version.find();
        res.status(200).json(versions);
    } catch (error) {
        console.error('Error fetching versions:', error);
        res.status(500).json({
            message: 'Error fetching versions',
            error: error.message
        });
    }
}