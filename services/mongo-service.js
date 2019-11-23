var dbConn = null;

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;
    
  
    const url = 'mongodb+srv://moshe:denanesh@cluster0-4nj8n.mongodb.net/test?retryWrites=true&w=majority';
    const dbName = 'instaclonedb';  
    
    const client = new MongoClient(url, { useNewUrlParser: true ,useUnifiedTopology: true }, );

    return client.connect()
        .then(client => {
            console.log('Connected to MongoDB');
            // If we get disconnected (e.g. db is down)
            client.on('close', ()=>{
                console.log('MongoDB Diconnected!');
                dbConn = null;
            })
            dbConn = client.db(dbName)
            return dbConn;
        })
}

module.exports = {
    connect : connectToMongo
}
