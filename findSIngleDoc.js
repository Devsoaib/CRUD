const {client} = require('./index');

const findSingleDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");

        const query = {name : "soaib"};
        const result = await users.findOne(query);

        console.log(result);
    } 
    catch (error) {
        console.log(error);
    }
    finally{
        await client.close();
    }
}
findSingleDoc()
