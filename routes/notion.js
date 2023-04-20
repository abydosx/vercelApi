const query = require('../services/notion/index')
var express = require('express');
var router = express.Router();

router.post('/learning', function (req, res, next) {
  const { filter, sort } = req.body;
  query(filter, sort).then((results) => {
    res.json(results);
  }).catch((err) => {
    res.json(err);
  })
});

module.exports = router;
