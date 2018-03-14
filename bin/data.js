var data = require('./fetch.js');
var MongoClient = require('mongodb').MongoClient;

const io = require('socket.io')(8080);
console.log("running at localhost/8080");

io.on('connection', (client) => {
    console.log("here");
    client.on('getData', (interval) => {
      console.log('client is subscribing to timer with interval ', interval);
      setInterval(() => {
        MongoClient.connect('mongodb://admin:admin@ds253918.mlab.com:53918/balon_parkplatz', function (err, db) {
        if (err) {
            throw err;
            client.emit('timer', err);
        } else {
             data.getData(db,(err, result) => {
                if (err) {
                    client.emit('timer', err);
                } else {
                   ans=result;
                   client.emit('timer', ans);
                }
            });            
            }
        db.close();
        });
      }, interval);
    });
  });