import type { Food } from "$lib/food/common";

export async function load({ fetch }): Promise<{ foods: Food[] }> {
    const res = await fetch("/foods");

    return { foods: await res.json() }
}
