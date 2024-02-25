import { database } from '$lib/server/database';
import type { PageServerLoad, Actions } from './$types';
import { product, productsToOrders, type Product } from '$lib/server/database/products/schema';
import { orders } from '$lib/server/database/user/schema';
import { uniqueID } from '$lib/utilities';

export const load: PageServerLoad = async ({}) => {
	return {
        items: await database.select().from(product)
	};
};

export const actions = {
	default: async ({ request }) => {
        const data = await request.formData()
        const itemsRaw = data.get("items")
        if (!itemsRaw) {
            return { success: false, message: "Invalid items" }
        }
        const items = JSON.parse(itemsRaw as string) as Product[] 

        const orderID = uniqueID()
        await database.insert(orders).values({
            id: orderID,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        await database.insert(productsToOrders).values(
            items.map((item) => ({
                orderID: orderID,
                quantity: 1,
                productID: item.id,
            }))
        )
        return { success: true }
    },
} satisfies Actions;
