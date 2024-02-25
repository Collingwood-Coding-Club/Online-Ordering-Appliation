import { database } from "$lib/server/database";
import { product, productsToOrders, type Product } from "$lib/server/database/products/schema";
import { orders } from "$lib/server/database/user/schema";
import { eq } from "drizzle-orm";
import type { PageServerLoad } from "./$types";

export interface Order {
    id: string;
    createdAt: Date;

    products: {
        quantity: number;
        product: Product
    }[];
}

export const load: PageServerLoad = async ({}) => {
    const rawOrders = await database.select()
                                    .from(orders)
                                    .leftJoin(productsToOrders, eq(orders.id, productsToOrders.orderID))
                                    .leftJoin(product, eq(productsToOrders.productID, product.id))
    console.log(rawOrders)
    // let orders: Order[] = []
};

