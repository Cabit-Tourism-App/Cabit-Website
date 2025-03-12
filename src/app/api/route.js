import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { Users, Drivers, Sessions, Itinerary, Rides, Distress } from "../../db/schema.js";

const dbConfig = { connectionString: "postgres://ayush:pass@localhost:5432/cabit" };
const pool = new Pool(dbConfig);
const db = drizzle(pool);

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
        const model = searchParams.get("model");
        const id = searchParams.get("id");

        const tables = {
            users: { table: Users, idField: "user_id" },
            drivers: { table: Drivers, idField: "driver_id" },
            sessions: { table: Sessions, idField: "session_id" },
            itinerary: { table: Itinerary, idField: "session_id" },
            rides: { table: Rides, idField: "ride_id" },
            distress: { table: Distress, idField: "ride_id" }
        };

        if (!tables[model]) return Response.json({ error: "Invalid model" }, { status: 400 });

        const tableInfo = tables[model];

        if (id) {
            const [record] = await db.select().from(tableInfo.table).where(tableInfo.table[tableInfo.idField].equals(id));
            return record ? Response.json(record) : Response.json({ error: "Record not found" }, { status: 404 });
        }
        const records = await db.select().from(tableInfo.table);
        return Response.json(records);
    } catch (err) {
        console.error("API Error:", err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
        const model = searchParams.get("model");

        const tables = {
            users: Users,
            drivers: Drivers,
            sessions: Sessions,
            itinerary: Itinerary,
            rides: Rides,
            distress: Distress
        };

        if (!tables[model]) return Response.json({ error: "Invalid model" }, { status: 400 });

        const body = await req.json();
        const [createdRecord] = await db.insert(tables[model]).values(body).returning();

        return Response.json(createdRecord, { status: 201 });
    } catch (err) {
        console.error("API Error:", err);
        return Response.json({ error: err.message }, { status: 500 });
    }
}
