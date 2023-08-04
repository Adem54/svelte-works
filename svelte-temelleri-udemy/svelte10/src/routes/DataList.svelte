

<script lang="ts">
   import { onMount } from "svelte";

	
let dataList:any = [];
let isLoading = true;
	onMount( async ()=>{

		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		console.log("data: ", data);
		dataList = data;
		isLoading = false;
	})
</script>

{#if !isLoading }
<section>
	This is our datalist!

	{#each dataList as user(user.id) }
		<div class="wrapper">
			<span>{user.name} | {user.username}</span>
		</div>
	{:else}
	<h4>There is no data to show!</h4>	
	{/each}
</section>
{:else}
<h2>Loading...</h2>
{/if}


<style>
	.wrapper {
		width:14rem;
		background-color: aqua;
		border: 1px solid;
		border-radius: .3rem;
		margin:1rem;
		padding:1rem;
	}
</style>


