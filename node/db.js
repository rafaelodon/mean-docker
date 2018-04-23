

var net = require('net');
var MongoClient = require('mongodb').MongoClient;
var USER = process.env.DB_USER;
var PASSWORD = process.env.DB_PASSWORD;
var HOST = process.env.DB_HOST;
var PORT = process.env.DB_PORT;

mongo_url = "mongodb://" + USER + ":" + PASSWORD + "@" + HOST + ":" + PORT;

console.log("MongoDB connection url: " + mongo_url);

var _db;

module.exports = {
	getDb: function (callback) {
		if(!_db){
			console.log("Trying to connect to " + mongo_url);
			MongoClient.connect(mongo_url, (err, client) => {
				if (err) {
					return console.log(err)
				} else {
					_db = client.db();
					console.log("Connected to " + mongo_url);
					return callback(_db);
				}
			})
		}else{
			return callback(_db);
		}
	}
};
