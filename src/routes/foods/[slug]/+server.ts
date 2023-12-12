import { json } from "@sveltejs/kit";
import Database from "$lib/server/food/example-db";
import { Utilities } from "$lib/food/common";

export async function GET({ params }) {
    const db = await Database.getAll();
    console.log(`Getting ${params.slug} from database`);
    const food = db.find((food) => food.name === params.slug);

    if (food === undefined)
        throw new Error("Food not found");

    return json(food)
}
