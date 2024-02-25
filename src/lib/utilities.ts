import { customAlphabet } from "nanoid";
import type { Product, ProductsToOrders } from "./server/database/products/schema";
// import { database } from "./server/database";

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

export const uniqueID = customAlphabet(alphabet, 16);

