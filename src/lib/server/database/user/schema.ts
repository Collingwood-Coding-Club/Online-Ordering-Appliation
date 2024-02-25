import { mysqlTable, text, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

const id = varchar("id", {
    length: 16
}).primaryKey() 

export const orders = mysqlTable("orders", {
    id,
    createdAt:  timestamp("created_at").notNull(),
    updatedAt:  timestamp("updated_at").notNull(),
})

export type Orders = typeof orders.$inferSelect

export const user = mysqlTable("user", {
    id,
    name:       text("name").notNull(),
    email:      text("email").notNull(),
    createdAt:  timestamp("created_at").notNull(),
    updatedAt:  timestamp("updated_at").notNull(),
})

export type User = typeof user.$inferSelect
