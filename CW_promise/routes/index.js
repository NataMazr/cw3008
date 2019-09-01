var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { name: 'Vasya' });
});
router.get('/name', function(req, res, next) {
    res.json({ name: 'Vasya' });
});
module.exports = router;