This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## CabIt Backend - Drizzle ORM & PostgreSQL

## 🚀 Overview

CabIt is a ride-hailing service with an integrated trip planner. This backend is built using **Node.js, Drizzle ORM, and PostgreSQL**. The database schema includes **Users, Drivers, Sessions, Itinerary, Rides, and Distress** tables, along with required ENUMs.

## 📌 Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-repo/cabit-backend.git
cd cabit-backend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file with the following:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/cabit
```

Replace `username`, `password`, and `cabit` with your actual database credentials.

### 4️⃣ Create PostgreSQL Database & Enums

Run the following SQL commands manually to create the required ENUM types:

```sql
CREATE TYPE user_gender AS ENUM ('male', 'female', 'other');
CREATE TYPE role AS ENUM ('client', 'driver', 'admin');
CREATE TYPE session_status AS ENUM ('active', 'expired');
CREATE TYPE trip_status AS ENUM ('completed', 'ongoing', 'cancelled');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'failed');
CREATE TYPE ride_status AS ENUM ('ongoing', 'successful', 'failed');
CREATE TYPE distress_status AS ENUM ('active', 'inactive');
```

### 5️⃣ Generate Migrations & Push Schema

```sh
npx drizzle-kit generate
npx drizzle-kit push
```

### 6️⃣ Start the Development Server

```sh
npm run dev
```

## 📂 Database Schema Overview

### **Tables & Fields**

#### 🧑 Users (`users`)

| Column              | Type              | Description                       |
| ------------------- | ----------------- | --------------------------------- |
| user\_id            | VARCHAR(255)      | Primary Key                       |
| user\_name          | VARCHAR(100)      | User's full name                  |
| user\_gender        | user\_gender ENUM | Gender of user                    |
| user\_password      | VARCHAR(255)      | Hashed password                   |
| user\_phone         | VARCHAR(15)       | Phone number                      |
| created\_at         | TIMESTAMP         | Auto-filled on creation           |
| role                | role ENUM         | User role (client, driver, admin) |
| client\_avg\_rating | DECIMAL(3,2)      | Client's rating                   |

#### 🚗 Drivers (`drivers`)

| Column              | Type         | Description                    |
| ------------------- | ------------ | ------------------------------ |
| driver\_id          | BIGINT       | Primary Key                    |
| user\_id            | VARCHAR(255) | Foreign Key -> `users.user_id` |
| license\_number     | VARCHAR(50)  | Unique License Number          |
| driver\_avg\_rating | DECIMAL(3,2) | Rating of the driver           |
| driver\_status      | BOOLEAN      | Active/Inactive driver         |

#### 📌 Itinerary (`itinerary`)

| Column       | Type              | Description                    |
| ------------ | ----------------- | ------------------------------ |
| session\_id  | SERIAL            | Primary Key                    |
| user\_id     | VARCHAR(255)      | Foreign Key -> `users.user_id` |
| trip\_status | trip\_status ENUM | Trip Status                    |
| items        | JSONB             | Itinerary details              |

#### 🚕 Rides (`rides`)

| Column           | Type                 | Description                        |
| ---------------- | -------------------- | ---------------------------------- |
| ride\_id         | SERIAL               | Primary Key                        |
| user\_id         | VARCHAR(255)         | Foreign Key -> `users.user_id`     |
| driver\_id       | BIGINT               | Foreign Key -> `drivers.driver_id` |
| pickup\_location | JSONB                | Pickup location details            |
| drop\_location   | JSONB                | Drop-off location                  |
| distance\_km     | DECIMAL(10,2)        | Distance traveled                  |
| fare\_amount     | DECIMAL(8,2)         | Ride fare                          |
| payment\_status  | payment\_status ENUM | Payment status                     |
| ride\_status     | ride\_status ENUM    | Current ride status                |

## 🛠 Development Workflow

1. **Update the Schema:** Modify the `schema.js` file.
2. **Generate a Migration:**
   ```sh
   npx drizzle-kit generate
   ```
3. **Apply the Migration:**
   ```sh
   npx drizzle-kit push
   ```
4. **Run the App:**
   ```sh
   npm run dev
   ```

## 🛠 Common Issues & Fixes

### ❌ `error: type "user_gender" does not exist`

**Fix:** Run the ENUM creation SQL manually before running Drizzle commands.

### ❌ `relation "users" does not exist`

**Fix:** Ensure migrations are applied properly using `npx drizzle-kit push`.

### ❌ `Cannot find module drizzle-orm/pg-core`

**Fix:** Ensure all dependencies are installed using `npm install`.

---

##


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
