<script lang="ts">
    import type { PageData } from './$types';
    import Order from '$lib/components/Order.svelte';
  
    export let data: PageData;
    const { orders } = data;

  </script>
  
  <div class="container mx-auto px-4">
    <header class="text-4xl font-bold py-4">Orders</header>
    <div class="grid md:grid-cols-3 gap-4">
      {#each Object.values(orders) as order}
        <Order {order}/>
      {/each}
    </div>
  </div>
  