const query = require( '../services/notion/index')
var express = require('express');
var router = express.Router();

router.get('/learning', function(req, res, next) {
    query(
      {
        property: 'Tags',
        multi_select: {
          contains: 'Learning',
        },
      },
      [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ]
    ).then((results) => {
      res.json(results); 
    }).catch((err) => {
      res.json(err); 
    })
});

module.exports = router;
