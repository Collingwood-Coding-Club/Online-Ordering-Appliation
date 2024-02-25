import { database } from "$lib/server/database";
import { product, productsToOrders, type Product } from "$lib/server/database/products/schema";
import { orders } from "$lib/server/database/user/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export interface Order {
    id: string;
    createdAt: Date;
    updatedAt: Date;

    products: Product[];
}

export const load: PageServerLoad = async ({ }): Promise<{ orders: Order[] }> => {
    const rawOrders = await database.select()
        .from(orders)
        .leftJoin(productsToOrders, eq(orders.id, productsToOrders.orderID))
        .leftJoin(product, eq(productsToOrders.productID, product.id))
    // let orders: Order[] = []
    const transformed = rawOrders.reduce((acc: any, row) => {
        const order = row.orders;

        if (!acc[order.id]) {
            acc[order.id] = { ...order, products: [] };
        }

        const product = row.product;

        if (product) {
            acc[order.id].products.push(product)
        }

        return acc;
    }, {});
    
    return {
        orders: Object.values(transformed)
    }
};

