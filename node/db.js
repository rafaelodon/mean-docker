var MongoClient = require('mongodb').MongoClient;
var USER = "admin";
var PASSWORD = "pass";
var DATABASE = "";
var HOST = "localhost";
var PORT = "27017";

if(process.env.MONGODB_USER){
  USER = process.env.MONGODB_USER;
  PASSWORD = process.env.MONGODB_PASSWORD;
  DATABASE = process.env.MONGODB_DATABASE;
};

var mongo_url = "mongodb://"+USER+":"+PASSWORD+"@"+HOST+":"+PORT+"/"+DATABASE;

// if OPENSHIFT env variables are present, use the available connection info:

var _db;

module.exports = {

  connectToServer: function(callback) {
    MongoClient.connect(mongo_url, (err, client) => {
        if (err) return console.log(err)        
        _db = client.db();    
        console.log("Connected to "+mongo_url);      
        return callback( err );  
    })
  },

  getDb: function() {
    return _db;
  }
};