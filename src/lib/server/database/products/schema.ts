import { mysqlTable, text, serial, timestamp } from "drizzle-orm/mysql-core";

export const product = mysqlTable("product", {
    id: serial("id").primaryKey(),
    name: text("name"),
    description: text("description"),
    created_at: timestamp("created_at"),
    updated_at: timestamp("updated_at"),
    price: text("price"),
})
