<script lang="ts">
    import type { Product } from "$lib/server/database/products/schema";
    import type { PageData } from "./$types";
    import Item from "$lib/components/Item.svelte";

    export let data: PageData;
    let items = data.items;
    let cart: Product[] = [];
</script>

<div class="container mx-auto px-4">
    <header class="text-4xl font-bold py-4">Cafeteria Ordering App</header>
    <div class="grid md:grid-cols-3 gap-4">
        {#each items as item}
            <div class="border p-4 rounded-lg">
                <h3 class="text-xl font-semibold">{item.name}</h3>
                <p>{item.description}</p>
                <p class="text-lg">${item.price / 100}</p>
                <button class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition" on:click={() => cart = [...cart, item]}>
                    Add to Cart
                </button>
            </div>
        {/each}
    </div>
    <form method="POST">
        <input type="hidden" name="items" value={JSON.stringify(cart)}>
        <div class="mt-8">
            <h2 class="text-xl font-semibold">Cart</h2>
            <ul>
                {#each cart as item, index}
                    <Item item={item} on:delete={() => cart = cart.filter((_, i) => i !== index)} />
                {/each}
            </ul>
            <p class="text-lg font-bold">Total: ${cart.reduce((acc, item) => acc + item.price, 0) / 100}</p>
            <button type="submit" class="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition">
                Checkout
            </button>
        </div>
    </form>
</div>
