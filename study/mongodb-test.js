const MongoClient = require('mongodb');

const uri = "mongodb://mongodb:mongodb@10.0.0.100:27017/admin";

MongoClient.connect(uri, (error,db) => {
    if (error) {
      console.log(error);
    } else {
      console.log('success');
      db.close()    
    }
});