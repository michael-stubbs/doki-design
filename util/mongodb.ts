import { MongoClient } from "mongodb";
import key from "../key";

// Hardcoded env vars until deployment
const MONGODB_URI: string =
  "mongodb+srv://" +
  key +
  "@cluster0.epqz8.mongodb.net/Cluster0?retryWrites=true&w=majority";
const MONGODB_DB: string = "DokiDesign";
const MONGODB_COL: string = "Content";

// Check for env vars, this will be used in deployment.
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable.");
}

if (!MONGODB_DB) {
  throw new Error("Please define the MONGODB_DB environment variable.");
}

if (!MONGODB_COL) {
  throw new Error("Please define the MONGODB_COL environment variable.");
}

// Generate a new client from constructor
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  let db = client.connect().then((client) => {
    const collection = client.db(MONGODB_DB).collection(MONGODB_COL);
    return {
      client,
      collection,
    };
  });
  let con_db = await db;
  return con_db;
}

// Close client to prevent connection bloat
process.on("SIGINT", () => {
  client.close();
});
process.on("SIGTERM", () => {
  client.close();
});
