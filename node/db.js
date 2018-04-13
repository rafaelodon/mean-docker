var MongoClient = require('mongodb').MongoClient;
var USER = "admin";
var PASSWORD = "pass";
var DATABASE = "";
var HOST = "localhost";
var PORT = "27017";

var mongo_url = "mongodb://"+USER+":"+PASSWORD+"@"+HOST+":"+PORT+"/"+DATABASE;

// if OPENSHIFT env variables are present, use the available connection info:
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
  mongo_url = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
  process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
  process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
  process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
  process.env.OPENSHIFT_APP_NAME;
};

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