
const Cluster = require('../../models/resources-models/cluster');
const Pool = require('../../models/resources-models/pool');

exports.getClustersByPool = async (req, res) => {
    try {
        const poolId = req.params.poolId;
        const pool = await Pool.findById(poolId);

        if (!pool) {
            return res.status(404).json({ message: 'Pool not found' });
        }

        // Fetch clusters associated with the pool
        const clusterIds = pool.clusters.map(cluster => cluster._id);
        const clusters = await Cluster.find({ _id: { $in: clusterIds } });
        res.json(clusters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

