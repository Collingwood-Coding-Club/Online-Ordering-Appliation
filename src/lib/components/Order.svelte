<script lang="ts">
	import type { Product, ProductsToOrders } from '$lib/server/database/products/schema';
	import type { Order } from '../../routes/vendor/+page.server';
	import Item from './Item.svelte';

	export let order: Order;

	// Stub function to simulate order fulfillment
	function fulfillOrder(orderId: string) {
		console.log(`Fulfilling order ${orderId}`);
		// Here you would typically make an API call or perform some action to fulfill the order
	}

	let total = 0;
	order.products.forEach((product) => {
		total += product.price;
	});
</script>

<div class="border p-4 rounded-lg">
	<h3 class="text-xl font-semibold">Order {order.id}</h3>
	<ul>
		{#each order.products as product}
			<Item item={product} />
		{/each}
	</ul>
    <p class="text-lg font-bold">Total: ${total / 100}</p>
	<button
		class="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition"
		on:click={() => fulfillOrder(order.id)}
	>
		Fulfill Order
	</button>
</div>
