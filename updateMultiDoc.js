const {client} = require('./index');

const updateMultiDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");
        const filter = {name : "Iphone12"};
        const updateDoc = {
            $set: {
                kinteParbi: "Na",
                Kidnibechbi: "ha"
            }
        }
        const result = await users.updateMany(filter, updateDoc);
        console.log(`Updated ${result.modifiedCount} documents`);
}
    catch (error) {
        console.log(error);
    }
    finally{
        await client.close()
    }
}

updateMultiDoc();