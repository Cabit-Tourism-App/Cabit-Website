CREATE TYPE "public"."distress_status" AS ENUM('active', 'inactive');--> statement-breakpoint
CREATE TYPE "public"."user_gender" AS ENUM('male', 'female', 'other');--> statement-breakpoint
CREATE TYPE "public"."oauth_provides" AS ENUM('discord', 'github', 'google');--> statement-breakpoint
CREATE TYPE "public"."payment_status" AS ENUM('pending', 'paid', 'failed');--> statement-breakpoint
CREATE TYPE "public"."ride_status" AS ENUM('ongoing', 'successful', 'failed');--> statement-breakpoint
CREATE TYPE "public"."role" AS ENUM('user', 'driver', 'admin');--> statement-breakpoint
CREATE TYPE "public"."session_status" AS ENUM('active', 'expired');--> statement-breakpoint
CREATE TYPE "public"."trip_status" AS ENUM('completed', 'ongoing', 'cancelled');--> statement-breakpoint
CREATE TABLE "distress" (
	"ride_id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"driver_id" bigint,
	"pickup_location" jsonb NOT NULL,
	"drop_location" jsonb NOT NULL,
	"distance_km" numeric(10, 2),
	"created_at" timestamp DEFAULT now(),
	"distress_call_at" timestamp DEFAULT now(),
	"call_location" jsonb NOT NULL,
	"path_taken" jsonb DEFAULT '{}'::jsonb,
	"current_location" jsonb NOT NULL,
	"distress_status" boolean DEFAULT false,
	"resolution_time" timestamp DEFAULT null,
	"resolved_by" integer DEFAULT null,
	"driver_response_at" timestamp DEFAULT null,
	"emergency_contact_notified" boolean DEFAULT false,
	"emergency_services_contacted" boolean DEFAULT false,
	"notes" text
);
--> statement-breakpoint
CREATE TABLE "drivers" (
	"driver_id" bigint PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"license_number" varchar(50) NOT NULL,
	"vehicle_id" integer NOT NULL,
	"driver_avg_rating" numeric(3, 2) DEFAULT '0.0',
	"driver_status" boolean DEFAULT false,
	"efficiency_coefficient" integer,
	"languages" jsonb,
	"current_work_loc" varchar(255),
	"driver_created_at" timestamp DEFAULT now(),
	"adhar_info" varchar(20),
	"more_info" jsonb DEFAULT '{}'::jsonb,
	CONSTRAINT "drivers_license_number_unique" UNIQUE("license_number"),
	CONSTRAINT "drivers_adhar_info_unique" UNIQUE("adhar_info")
);
--> statement-breakpoint
CREATE TABLE "itinerary" (
	"session_id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"trip_status" "trip_status" NOT NULL,
	"items" jsonb DEFAULT '{}'::jsonb,
	"start_date" date NOT NULL,
	"end_date" date NOT NULL,
	"time_created" timestamp DEFAULT now(),
	"payment_status" "payment_status",
	"cookie" jsonb DEFAULT 'null'::jsonb
);
--> statement-breakpoint
CREATE TABLE "rides" (
	"ride_id" serial PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"driver_id" bigint,
	"rating_given" jsonb DEFAULT '[]'::jsonb,
	"pickup_location" jsonb NOT NULL,
	"drop_location" jsonb NOT NULL,
	"distance_km" numeric(10, 2),
	"fare_amount" numeric(8, 2),
	"payment_status" "payment_status",
	"ride_status" "ride_status",
	"created_at" timestamp DEFAULT now(),
	"completed_at" timestamp DEFAULT null,
	"path_taken" jsonb DEFAULT '{}'::jsonb,
	"remark" jsonb DEFAULT '{}'::jsonb
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" varchar(512) PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"role" "role" NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"expires_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_oauth_accounts" (
	"user_id" uuid NOT NULL,
	"provider" "oauth_provides" NOT NULL,
	"providerAccountId" text NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "user_oauth_accounts_providerAccountId_provider_pk" PRIMARY KEY("providerAccountId","provider"),
	CONSTRAINT "user_oauth_accounts_providerAccountId_unique" UNIQUE("providerAccountId")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"user_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_name" varchar(100) NOT NULL,
	"user_gender" "user_gender",
	"user_password" text,
	"salt" text,
	"email" text NOT NULL,
	"user_phone" varchar(15) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"role" "role",
	"client_avg_rating" numeric(3, 2) DEFAULT '0.0',
	"forget_pass_ans" varchar(255) DEFAULT null,
	"more_info" jsonb DEFAULT '{}'::jsonb,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "distress" ADD CONSTRAINT "distress_ride_id_rides_ride_id_fk" FOREIGN KEY ("ride_id") REFERENCES "public"."rides"("ride_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distress" ADD CONSTRAINT "distress_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distress" ADD CONSTRAINT "distress_driver_id_drivers_driver_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("driver_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "drivers" ADD CONSTRAINT "drivers_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "itinerary" ADD CONSTRAINT "itinerary_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rides" ADD CONSTRAINT "rides_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rides" ADD CONSTRAINT "rides_driver_id_drivers_driver_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."drivers"("driver_id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_oauth_accounts" ADD CONSTRAINT "user_oauth_accounts_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE cascade ON UPDATE no action;