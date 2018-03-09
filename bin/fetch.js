module.exports = {
    getData: function(db,cb){
        try{
                var database=db.db('balon_parkplatz');
                var collection = database.collection('greaternoida');
                collection.find().toArray(function(err, results) {
                    if (err) {
                        throw err;
                    }
                    else{
                        cb(results);
                    }
            });
            }
            catch (error) {
            cb(error);
        }    
    }
}