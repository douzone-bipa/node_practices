
const model = require('../models/emaillist');

module.exports = {
    index: async function(req, res) {
        const results = await model.findAll(function(){});
        res.render('index', {
            list: results || []
        });
    }
}



