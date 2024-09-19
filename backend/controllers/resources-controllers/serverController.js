const Server = require('../../models/resources-models/server');
const Cluster = require('../../models/resources-models/cluster');

exports.getServersByCluster = async (req, res) => {
    try {
        const clusterId = req.params.clusterId;
        const cluster = await Cluster.findById(clusterId);

        if (!cluster) {
            return res.status(404).json({ message: 'Cluster not found' });
        }

        // Fetch servers associated with the cluster
        const serverIds = cluster.servers.map(server => server._id);
        const servers = await Server.find({ _id: { $in: serverIds } });       
         res.json(servers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
