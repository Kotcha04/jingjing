BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "brands" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"brand"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "cars" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"brand"	text,
	"model"	text,
	"year"	integer,
	"model_detail"	text,
	"province"	integer,
	"type_id"	integer,
	"detail_id"	integer,
    "employee_id"	integer,
	CONSTRAINT "fk_brands_cars" FOREIGN KEY("province_id") REFERENCES "provinces"("id"),
    CONSTRAINT "fk_brands_cars" FOREIGN KEY("type_id") REFERENCES "types"("id"),
    CONSTRAINT "fk_brands_cars" FOREIGN KEY("detail_id") REFERENCES "details"("id"),
    CONSTRAINT "fk_brands_cars" FOREIGN KEY("employee_id") REFERENCES "employees"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "car_details" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"car_id"	integer,
	"model_detail"	integer,
	CONSTRAINT "fk_cars_car_details" FOREIGN KEY("car_id") REFERENCES "cars"("id"),
	CONSTRAINT "fk_cars_car_details" FOREIGN KEY("model_detail") REFERENCES "model_details"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "companies" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"company"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "details" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"car"	text,
	"age"	integer,
	"mile"	integer,
    "status_id"	integer,
	CONSTRAINT "fk_members_playlists" FOREIGN KEY("status_id") REFERENCES "status"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "employees" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"first_name"	text,
	"last_name"	text,
	"phone"	text,
	"start_date"	date,
	"position"	text,
    "status"	text,
	"total_sales"	integer,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "images" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"image"	blob,
    "detail_id"	integer,
    CONSTRAINT "fk_details_images" FOREIGN KEY("detail_id") REFERENCES "details"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "insurances" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"sales_contract"	blob,
    "status_id"	integer,
	CONSTRAINT "fk_status_insurances" FOREIGN KEY("sales_contract_id") REFERENCES "sales_contracts"("id"),
    CONSTRAINT "fk_status_insurances" FOREIGN KEY("status_id") REFERENCES "status"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "insurancestatus" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"status"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "models" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"model"	text,
    "brand_id"	integer,
    CONSTRAINT "fk_brands_models" FOREIGN KEY("brand_id") REFERENCES "brands"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "model_details" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"model_detail"	text,
    "model_id"	integer,
    CONSTRAINT "fk_models_model_details" FOREIGN KEY("model_id") REFERENCES "models"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "plans" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"plan"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "prices" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"price"	integer,
	"company_id"	integer,
	"repair_id"	integer,
	"plan_id"	integer,
	CONSTRAINT "fk_companies_provinces" FOREIGN KEY("company_id") REFERENCES "companies"("id"),
	CONSTRAINT "fk_repairs_provinces" FOREIGN KEY("repair_id") REFERENCES "repairs"("id"),
	CONSTRAINT "fk_plans_provinces" FOREIGN KEY("plan_id") REFERENCES "plans"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "priceinsurances" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"price_id"	integer,
	"insurance_id"	integer,
	CONSTRAINT "fk_priceinsurances_prices" FOREIGN KEY("price_id") REFERENCES "prices"("id"),
	CONSTRAINT "fk_priceinsurances_insurances" FOREIGN KEY("insurance_id") REFERENCES "insurances"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "provinces" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"province"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "repairs" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"repair"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "sales_contracts" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"status"	text,
	"employee_id"	integer,
	CONSTRAINT "fk_employees_sales_contracts" FOREIGN KEY("employee_id") REFERENCES "employees"("id"),
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "status" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"status"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "types" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"type"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE INDEX IF NOT EXISTS "idx_brands_deleted_at" ON "brands" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_cars_deleted_at" ON "cars" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_car_details_deleted_at" ON "car_details" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_companies_deleted_at" ON "companies" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_details_deleted_at" ON "details" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_employees_deleted_at" ON "employees" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_images_deleted_at" ON "images" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_insurances_deleted_at" ON "insurances" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_insurance_status_deleted_at" ON "insurancestatus" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_models_deleted_at" ON "models" (
    "deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_model_details_deleted_at" ON "model_details" (
    "deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_plans_deleted_at" ON "plans" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_prices_deleted_at" ON "prices" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_price_insurances_deleted_at" ON "priceinsurances" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_provinces_deleted_at" ON "provinces" (
    "deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_repairs_deleted_at" ON "repairs" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_sales_contracts_deleted_at" ON "sales_contracts" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_status_deleted_at" ON "status" (
    "deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_types_deleted_at" ON "types" (
    "deleted_at"
);
COMMIT;
