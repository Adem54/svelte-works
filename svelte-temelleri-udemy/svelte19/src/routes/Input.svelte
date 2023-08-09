<script lang="ts">
	export let done:any;

	$:{
		console.log("done: ", done);
	}
</script>

<input type="checkbox" bind:checked={done}>