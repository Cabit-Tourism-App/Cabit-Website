CREATE TYPE "public"."issue_type" AS ENUM('Trip Issue', 'Cab Issue', 'Payment Issue', 'App Issue', 'Other');--> statement-breakpoint
CREATE TABLE "contactus_queries" (
	"query_id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_name" varchar(100) NOT NULL,
	"email" varchar(150) NOT NULL,
	"user_phone" varchar(15),
	"issue" "issue_type" NOT NULL,
	"query" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "role" SET NOT NULL;