const Pool = require('../../models/resources-models/pool');

const getAllPools = async (req, res) => {
    try {
        const pools = await Pool.find();
        res.status(200).json(pools);
    } catch (error) {
        console.error('Error fetching pools:', error);
        res.status(500).json({
            message: 'Error fetching pools',
            error: error.message
        });
    }
};

const postPool = async (req, res) => {
    try {
        const {name, clusters, status} = req.body;
        const newPool = new Pool({
            name,
            clusters,
            status
        });
        await newPool.save();
        res.status(201).json(newPool);
    } catch (error) {
        console.error('Error creating pool:', error);
        res.status(500).json({
            message: 'Error creating pool',
            error: error.message
        });
    }
}

const getPools = async (req, res) => {
    try {
        const pools = await Pool.find();
        res.json(pools);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getPoolById = async (req, res) => {
    try {
        console.log('Fetching pool by id:', req.params.poolId);
        const poolId = req.params.poolId;
        
        const pool = await Pool.findById(poolId).populate('clusterIds'); // Optional: populate clusterIds if needed

        if (!pool) {
            return res.status(404).json({ message: 'Pool not found' });
        }

        res.json(pool);
    } catch (error) {
        console.error('Error fetching pool:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getPoolById,
    getPools,
    getAllPools,
    postPool
};