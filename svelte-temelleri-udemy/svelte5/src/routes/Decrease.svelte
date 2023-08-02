

<script>

import { count } from "$lib/store"	
const handleDecrease = ()=>
{
	count.update(prev=>prev-1);
}
</script>

<button on:click={handleDecrease}>
	-
</button>

<style>
	button {
		font-size:2rem;
		font-weight: bold;
		padding: .6rem 1.4rem;
	}
</style>