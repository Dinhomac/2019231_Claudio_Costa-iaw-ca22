const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ClaudioCCT2019231:SveHGsUyV2yYMmy@cluster0.evzxp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect()
    .then(() => client.db("spirits").collection("spirits")) 
    .then(() => console.log('mongo db is ready.'))
    .catch(e => console.log(e));



