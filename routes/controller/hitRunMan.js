/**
 * Created by zyg on 15/11/6.
 */
var config = require('../../models/config');

var env = process.env.NODE_ENV;

module.exports = {
    index: function (req, res) {
        config.count();

        res.render('hitRunMan', {
            env: env,
            position: config.getR()
        });
    }
};