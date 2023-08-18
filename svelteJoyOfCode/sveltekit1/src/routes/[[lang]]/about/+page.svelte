<script lang="ts">
import { page } from "$app/stores";
console.log("page: ", $page);
</script>

{#if Object.keys($page.params).length === 0}
	<h1>Default-language About page!</h1>
{:else}
	<h1>language:{$page.params.lang} - About page!</h1>
{/if}
