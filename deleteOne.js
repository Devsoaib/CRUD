const {client} = require('./index');

const deleteOneDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");

        const query = {name : "Iphone 12"};
        const result = await users.deleteOne(query);
        if (result.deletedCount === 1) {
          console.log("Successfully deleted one document.");
        } else {
          console.log("No documents matched the query. Deleted 0 documents.");
        }
    } catch (error) {
        console.log(error);
    }
    finally{
        await client.close()
    }
}

deleteOneDoc()