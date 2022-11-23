const {client} = require('./index');

const insertManyDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");

        const doc = [
            {
            name : "Iphone 12",
            price: 120000,
            quality: "bad",
            Active: true
            },
            {
            name : "Realme",
            price: 120000,
            quality: "good",
            Active: true
            },
            {
            name : "Redme",
            price: 8000,
            quality: "Okay",
            Active: false
            }

        ]
        const result = await users.insertMany(doc);
        console.log(`${result.insertedCount} documents are inserted`);
    } catch (error) {
        console.log(error);
    }finally{
        await client.close()
    }
}

insertManyDoc();
 