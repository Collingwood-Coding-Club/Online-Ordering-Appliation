<script lang="ts">
	import type { Food } from "$lib/food/common";

    export let data: Food;
</script>

<h1>{data.name}</h1>
<p>Calories: {data.calories}</p>
<p>Price: {data.price}</p>
