const {client} = require('./index');

const findMultiDoc = async()=>{
    try {
        const database = client.db("usersDB");
        const users = database.collection("users");
        const query = {};
        const cursor = users.find(query);

        
        
        if ((await cursor.EstimatedDocumentCount) === 0) {
            console.log("No documents found!");
          }
          else{
            const result = await cursor.toArray();
            // replace console.dir with your callback to access individual elements
            await result.forEach((el)=>{
               console.log(el);
            });
        }         

    } 
    catch (error) {
        console.log(error);
    }
    finally{
        await client.close();
    }
}
findMultiDoc();
