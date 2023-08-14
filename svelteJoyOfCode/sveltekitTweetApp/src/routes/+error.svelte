<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit'

	//burda export edilen props icindeki title degerini alttaki svelte componentinden alabiliyruz... yine property name title olarak 
	export const load: Load = ({ error, status }) => {
		return {
			props: {
				error, status
			},
		}
	}
</script>

<script lang="ts">
	export let status: string="stat";
	export let error: string="err";
</script>

<div class="error">
	<h1>{status}</h1>
	<h1>{error}</h1>
	<h2>Error!!!</h2>
	<img src="/error.webp" alt="Surprised cat" />
</div>

<style>
	.error {
		height: 100vh;
		display: grid;
		gap: var(--spacing-32);
		place-content: center;
		place-items: center;
	}

	img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
	}
</style>
