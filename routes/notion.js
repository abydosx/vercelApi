const { query, updateDatabase, updatePage } = require('../services/notion/index')
var express = require('express');
var router = express.Router();

router.post('/pages', function (req, res, next) {
  const params = req.body;
  query(params).then((results) => {
    res.json({ ...results, status_code: 200 });
  }).catch((err) => {
    res.json({ ...err, status_code: 400 });
  })
});

router.post('/updateDatabase', function (req, res, next) {
  const params = req.body;
  updateDatabase(params).then(results => {
    res.json({ ...results, status_code: 200 });
  }).catch((err) => {
    res.json({ ...err, status_code: 400 });
  })
});

router.post('/updatePage', function (req, res, next) {
  const params = req.body;
  updatePage(params).then(results => {
    res.json({ ...results, status_code: 200 });
  }).catch((err) => {
    res.json({ ...err, status_code: 400 });
  })
});

module.exports = router;
