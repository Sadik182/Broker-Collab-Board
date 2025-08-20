// lib/mongodb.ts
import { MongoClient, type Db } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

// ✅ NEW: choose your DB name from env (fallback if you want)
const dbName = process.env.MONGODB_DB || "broker_board";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // allow global variable in Node.js
  // must use `var` here for TypeScript to accept it
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// ✅ NEW: cache Db instance so we don’t call client.db() everywhere
let _db: Db | null = null;

/** Get a Db instance (reuse connection from your existing clientPromise) */
export async function getDb(): Promise<Db> {
  if (_db) return _db;
  const client = await clientPromise;
  _db = client.db(dbName);
  return _db;
}

/** Ensure indexes for users collection (call once, e.g. in register route) */
export async function ensureUserIndexes() {
  const db = await getDb();
  await db.collection("users").createIndex({ email: 1 }, { unique: true });
}

// keep your original default export for compatibility
export default clientPromise;
