const express = require('express');

const routes = express.Router();

routes.get('/users', (req, res) => {

    const queries = req.query;

    const params = req.params;

    const body = req.body;

    console.log(body);

    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Daniel Silva'
    });
});

module.exports = routes;