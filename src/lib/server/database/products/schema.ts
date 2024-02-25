import { mysqlTable, text, serial, timestamp, int, primaryKey, varchar } from "drizzle-orm/mysql-core";

const id = (name: string = "id") => varchar(name, {
    length: 16
})


export const product = mysqlTable("product", {
    id:         id().primaryKey(),
    name:       text("name").notNull(),
    description:text("description").notNull(),
    createdAt:  timestamp("created_at").notNull(),
    updatedAt:  timestamp("updated_at").notNull(),
    price:      int("price").notNull(),
})

export type Product = typeof product.$inferSelect

export const productsToOrders = mysqlTable("products_to_orders", {
    productID:  id("product_id").notNull(),
    orderID:    id("order_id").notNull(),
    quantity:   int("quantity").notNull(),
}, (table) => ({
    primaryKey: primaryKey({
        columns: [table.productID, table.orderID],
    })
}))

export type ProductsToOrders = typeof productsToOrders.$inferSelect
