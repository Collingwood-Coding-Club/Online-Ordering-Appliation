import { mysqlTable, text, serial, timestamp } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('user', {
    id: serial("id").primaryKey(),
    name: text("name"),
    email: text("email"),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at"),
    purchasedProducts: text("purchased_products"),
})
