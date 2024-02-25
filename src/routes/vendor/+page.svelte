<script lang="ts">
    import type { PageData } from './$types';
    import OrderGroup from '$lib/components/OrderGroup.svelte';
	import { groupOrders } from '$lib/utilities';
  
    export let data: PageData;
    // const { products, orders } = data;
  

    // const groupedOrders = groupOrders(orders)
  
    // // Function to find a product by its ID
    // function findProductById(productId: string) {
    //   return products.find((product) => product.id === productId);
    // }
  </script>
<!--   
  <div class="container mx-auto px-4">
    <header class="text-4xl font-bold py-4">Orders</header>
    <div class="grid md:grid-cols-3 gap-4">
      {#each Object.values(groupedOrders)}
        <OrderGroup {groupedOrder} />
      {/each}
    </div>
  </div>
   -->