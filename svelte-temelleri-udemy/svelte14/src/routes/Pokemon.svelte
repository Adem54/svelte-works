<script lang="ts">
	const getPokemon = async () => {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000');
		const data = await res.json();
		return data;
	};
</script>

{#await getPokemon()}
	<p>fetching</p>
{:then data}
	{#each data.results as result}
		<p>{result.name}</p>
	{/each}
{:catch error}
	<p>Something went wrong</p>
{/await}