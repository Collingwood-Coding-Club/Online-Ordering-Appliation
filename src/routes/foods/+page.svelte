<script lang="ts">
	import type { Food } from "$lib/food/common";

    export let data: { foods: Food[] };
</script>

<h1>Foods</h1>
{#each data.foods as food}
    <li><a href="/foods/{food.name}">{food.name}</a></li>
{/each}
