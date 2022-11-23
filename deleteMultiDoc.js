const {client} = require('./index');

const deleteMultiDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");

        const query = {};
        const result = await users.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents");
    } catch (error) {
        console.log(error);
    }
    finally{
        await client.close()
    }
}

deleteMultiDoc();