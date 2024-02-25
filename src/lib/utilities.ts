import { customAlphabet } from "nanoid";
import type { Product, ProductsToOrders } from "./server/database/products/schema";
// import { database } from "./server/database";

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

export const uniqueID = customAlphabet(alphabet, 16);

export interface GroupedOrder {
    id: string
    orders: ProductsToOrders[];
}

export function groupOrders(orders: ProductsToOrders[]): GroupedOrder[] {
    const groupedOrders: GroupedOrder[] = [];
    orders.forEach((order) => {
        const existingOrder = groupedOrders.find((groupedOrder) => groupedOrder.id === order.orderID);
        if (existingOrder) {
            existingOrder.orders.push(order);
        } else {
            groupedOrders.push({
                id: order.orderID,
                orders: [order],
            });
        }
    });
    return groupedOrders;
}

