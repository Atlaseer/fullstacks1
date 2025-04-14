import dotenv from 'dotenv';

dotenv.config();


import { MongoClient } from 'mongodb';
var uri = process.env.MONGODB_URI;

console.log(uri);


MongoClient.connect(uri, function(err, db) {
  if (err)
     throw err;
  
  console.log("Database created!");
  db.close();
});



console.log("done!");
