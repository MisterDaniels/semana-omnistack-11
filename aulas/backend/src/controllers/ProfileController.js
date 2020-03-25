const connection = require('../database/connection');

module.exports = {

    async list(req, res) {
        const ong_id = req.headers.authorization;

        const incidents = await connection('incident')
            .where('ond_id', ong_id)
            .select('*');

        return res.json(incidents);
    }

}