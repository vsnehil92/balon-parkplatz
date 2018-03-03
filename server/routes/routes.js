var express = require('express');
var router = express.Router();
var data = require('./fetch.js');
var MongoClient = require('mongodb').MongoClient

router.get('/', function(req, res){
  res.render('index')
});
router.get('/parking_data', function(req, res){
    MongoClient.connect('mongodb://admin:admin@ds253918.mlab.com:53918/balon_parkplatz', function (err, db) {
        if (err) {
            throw err;
        } else {
            data.getData(db,(err, result) => {
                if (err) {
                  console.log("error "+res);
                  res.send(err);
                } else {
                   ans=result;
                   console.log("in loop ");
                   res.send(data);
                }
            });
        }
        db.close();
    });
});
module.exports = router;