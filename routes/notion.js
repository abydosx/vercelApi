const { query, updateDatabase, updatePage } = require('../services/notion/index')
var express = require('express');
var router = express.Router();

router.post('/pages', function (req, res, next) {
  const params = req.body;
  query(params).then((results) => {
    res.json(results);
  }).catch((err) => {
    res.json(err);
  })
});

router.post('/updateDatabase', function (req, res, next) {
  const params = req.body;
  updateDatabase(params).then(results => {
    res.json(results);
  }).catch((err) => {
    console.log('error')
    res.json(err);
  })
});

router.post('/updatePage', function (req, res, next) {
  const params = req.body;
  updatePage(params).then(results => {
    res.json(results);
  }).catch((err) => {
    console.log('error')
    res.json(err);
  })
});

module.exports = router;
