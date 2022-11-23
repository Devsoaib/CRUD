const {client} = require('./index');

const insertOneDOc = async() =>{
    try {
        const database = client.db("school");
        const students = database.collection("students");
           // create a document to insert
    const doc = {
        name : "Iphone 12",
        price: 120000,
        quality: "bad",
        Active: true
      }

      const result = await students.insertOne(doc);
      console.log(result);
      console.log(`A document was inserted with the _id: ${result.insertedId}`);


    }
     catch (error) {
        console.log(error);
    }
    finally{
        await client.close();
    }
}

insertOneDOc();