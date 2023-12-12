import { json } from "@sveltejs/kit";
import Database from "$lib/server/food/example-db";
import type { Food } from "$lib/food/common";
import { Utilities } from "$lib/food/common";

export async function GET() {
    return json(await Database.getAll());
}

export async function POST({ request }) {
    return json(await Database.add(await Utilities.getFoodFromJSON(await request.json())));
}

export async function PUT({ request }) {
    return json(await Database.update(await Utilities.getFoodFromJSON(await request.json())));
}

export async function DELETE({ request }) {
    return json(await Database.remove((await Utilities.getFoodFromJSON(await request.json())).name));
}
