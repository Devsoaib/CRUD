const {client} = require('./index');

const insertOne = async() => {
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");
        const doc = {
            name : "Iphone 12",
            price: 120000,
            quality: "bad",
            Active: true
          }
          const result = await users.insertOne(doc);
          console.log(`A document was inserted with the _id: ${result.insertedId}`);
          
    } 
    catch (error) {
        
    }
    finally{
        await client.close();
    }
}

insertOne();