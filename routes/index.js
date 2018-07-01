var express = require('express');
var router = express.Router();

const config = require('config');
/* GET home page. */
router.use('/', function(req, res, next) {
  res.end(config.get('Customer.dbConfig.url'));
});

module.exports = router;
