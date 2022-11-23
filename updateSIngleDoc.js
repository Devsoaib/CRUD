const {client} = require('./index');

const updateSingleDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");
        const filter = {name : "soaib"};
        const options = { upsert: true };

        const updateDoc = {$set : {
            country : "bangladesh",
            Study : "Chemistry"
        }};

        const result = await users.updateOne(filter, updateDoc, options);
        console.log(
            `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
          );

    } catch (error) {
        console.log(error);
    }
    finally{
        await client.close();

    }
};

updateSingleDoc();