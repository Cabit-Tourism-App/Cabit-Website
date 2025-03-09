// yah have to import each type separately
const { 
    pgTable, varchar, text, pgEnum, integer, bigserial, 
    timestamp, decimal, jsonb, smallint, date, uuid, 
    serial, bigint, boolean 
} = require("drizzle-orm/pg-core");
const { sql } = require("drizzle-orm");

// Enums
const genderEnum = pgEnum("user_gender", ["male", "female", "other"]);
const roleEnum = pgEnum("role", ["client", "driver", "admin"]);
const sessionStatusEnum = pgEnum("session_status", ["active", "expired"]);
const tripStatusEnum = pgEnum("trip_status", ["completed", "ongoing", "cancelled"]);
const paymentStatusEnum = pgEnum("payment_status", ["pending", "paid", "failed"]);
const rideStatusEnum = pgEnum("ride_status", ["ongoing", "successful", "failed"]);
const distressStatusEnum = pgEnum("distress_status", ["active", "inactive"]);








const Users = pgTable("users", {
    user_id: varchar("user_id", { length: 255 }).primaryKey(),
    user_name: varchar("user_name", { length: 100 }).notNull(),
    user_gender: genderEnum("user_gender"),
    user_password: varchar("user_password", { length: 255 }).notNull(),
    user_phone: varchar("user_phone", { length: 15 }).notNull(),
    created_at: timestamp("created_at").defaultNow(),
    role: roleEnum("role"),
    client_avg_rating: decimal("client_avg_rating", { precision: 3, scale: 2 }).default(0.0),
    forget_pass_ans: varchar("forget_pass_ans", { length: 255 }).default(null),
    more_info: jsonb("more_info").default(sql`'{}'::jsonb`),
});







const Drivers = pgTable("drivers", {
    driver_id: bigint("driver_id", { mode: "number" }).primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull().references(() => Users.user_id),
    license_number: varchar("license_number", { length: 50 }).notNull().unique(),
    vehicle_id: integer("vehicle_id").notNull(), 
    driver_avg_rating: decimal("driver_avg_rating", { precision: 3, scale: 2 }).default(0.0),
    driver_status: boolean("driver_status").default(false),
    efficiency_coefficient: integer("efficiency_coefficient"),
    languages: jsonb("languages"),
    current_work_loc: varchar("current_work_loc", { length: 255 }),
    driver_created_at: timestamp("driver_created_at").defaultNow(),
    adhar_info: varchar("adhar_info", { length: 20 }).unique(),
    more_info: jsonb("more_info").default(sql`'{}'::jsonb`),
});







const Sessions = pgTable("sessions", {
    session_id: uuid("session_id").defaultRandom().primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull().references(() => Users.user_id),
    start_time: timestamp("start_time").defaultNow(),
    last_active: timestamp("last_active").defaultNow(),
    session_data: jsonb("session_data").default(sql`'{}'::jsonb`),
    session_status: boolean("session_status").default(true), 
});






const Itinerary = pgTable("itinerary", {
    session_id: serial("session_id").primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull().references(() => Users.user_id),
    trip_status: tripStatusEnum("trip_status").notNull(),
    items: jsonb("items").default(sql`'{}'::jsonb`),
    start_date: date("start_date").notNull(),
    end_date: date("end_date").notNull(),
    time_created: timestamp("time_created").defaultNow(),
    payment_status: paymentStatusEnum("payment_status"),
    cookie: jsonb("cookie").default(null),
});




const Rides = pgTable("rides", {
    ride_id: serial("ride_id").primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull().references(() => Users.user_id),
    driver_id: bigint("driver_id", { mode: "number" }).references(() => Drivers.driver_id),
    rating_given: jsonb("rating_given").default(sql`'[]'::jsonb`),
    pickup_location: jsonb("pickup_location").notNull(),
    drop_location: jsonb("drop_location").notNull(),
    distance_km: decimal("distance_km", { precision: 10, scale: 2 }),
    fare_amount: decimal("fare_amount", { precision: 8, scale: 2 }),
    payment_status: paymentStatusEnum("payment_status"),
    ride_status: rideStatusEnum("ride_status"),
    created_at: timestamp("created_at").defaultNow(),
    completed_at: timestamp("completed_at").default(null),
    path_taken: jsonb("path_taken").default(sql`'{}'::jsonb`), 
    remark: jsonb("remark").default(sql`'{}'::jsonb`),
});

const Distress = pgTable("distress", {
    ride_id: serial("ride_id").primaryKey().references(() => Rides.ride_id),
    user_id: varchar("user_id", { length: 255 }).notNull().references(() => Users.user_id),
    driver_id: bigint("driver_id", { mode: "number" }).references(() => Drivers.driver_id),
    pickup_location: jsonb("pickup_location").notNull(),
    drop_location: jsonb("drop_location").notNull(),
    distance_km: decimal("distance_km", { precision: 10, scale: 2 }),
    created_at: timestamp("created_at").defaultNow(),
    distress_call_at: timestamp("distress_call_at").defaultNow(),
    call_location: jsonb("call_location").notNull(),
    path_taken: jsonb("path_taken").default(sql`'{}'::jsonb`),
    current_location: jsonb("current_location").notNull(),
    distress_status: boolean("distress_status").default(false), 
    resolution_time: timestamp("resolution_time").default(null),
    resolved_by: integer("resolved_by").default(null),
    driver_response_at: timestamp("driver_response_at").default(null),
    emergency_contact_notified: boolean("emergency_contact_notified").default(false),
    emergency_services_contacted: boolean("emergency_services_contacted").default(false),
    notes: text("notes")
});

module.exports = { 
    Users, 
    Drivers, 
    Sessions, 
    Itinerary, 
    Rides, 
    Distress 
};
