const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://bkusers:user@cluster0.otdyf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let db;
async function connection() {
  try {
    await client.connect();
    db = client.db("wishlist");
  } catch (err) {
    console.log(err);
  }
}

function getDb() {
  return db;
}

module.exports = {
  connection,
  getDb,
  client,
};
