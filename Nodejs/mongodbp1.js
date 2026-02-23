const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://admin:admin@cluster0.wqxwhyo.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);
async function run() {
    try {
        const db=client.db('vishnudb');
        const collection=db.collection('vishnucollection');
        const result=await collection.insertOne({name:'vishnu',age:22});
        console.log(result);
    }    finally {
        await client.close();
    }
}run().catch(console.error);