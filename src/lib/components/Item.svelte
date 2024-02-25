<script lang="ts">
	import type { Product } from "$lib/server/database/products/schema";
	import { createEventDispatcher } from "svelte";

    export let item: Product
    const dispatcher = createEventDispatcher()
</script>

<div class="border p-4 rounded-lg">
    <h3 class="text-xl font-semibold">{item.name}</h3>
    <p>{item.description}</p>
    <p class="text-lg">${item.price / 100}</p>
    <button
        class="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 transition"
        on:click={() => dispatcher("delete", item)}
    >
        Delete
    </button>
</div>
