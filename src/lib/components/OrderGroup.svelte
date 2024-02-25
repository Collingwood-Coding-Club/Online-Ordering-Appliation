<script lang="ts">
	import type { Product, ProductsToOrders } from "$lib/server/database/products/schema";
	import type { GroupedOrder } from "$lib/utilities";
	import Item from "./Item.svelte";
    
    export let groupedOrder: GroupedOrder;
    export let products: Product[]
  
    // Stub function to simulate order fulfillment
    function fulfillOrder(orderId: string) {
      console.log(`Fulfilling order ${orderId}`);
      // Here you would typically make an API call or perform some action to fulfill the order
    }
  </script>
  
  <!-- <div class="flex flex-col border p-4 rounded-lg shadow-lg h-full justify-between">
    <div>
        <h3 class="text-xl font-semibold">Order: {groupedOrder.id}</h3>
        <ul>
            {#each groupedOrder.orders as order}
                <CartItem item={order.productID} />
            {/each}
        </ul>
    </div>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end" on:click={() => groupedOrder.orders.forEach(order => fulfillOrder(order.orderID))}>
      Fulfill All Orders
    </button>
  </div>
   -->