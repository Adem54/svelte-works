<script>

import { count } from "$lib/store";

const handleIncrease = ()=>{
	count.update(prev=>prev+1);
}
</script>

<button on:click={handleIncrease}>+</button>

<style>
	button {
		font-size:2rem;
		font-weight: bold;
		padding: .6rem 1rem;
	}
</style>