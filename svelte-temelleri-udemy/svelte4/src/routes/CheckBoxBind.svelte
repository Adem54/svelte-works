

<script>
	let isCompleted = false;
</script>


<section>
	<label for="task">
		<input type="checkbox" bind:checked={isCompleted}>
		<span class={isCompleted ? 'done' : ''}>Task Completed!</span>

	</label>
</section>

<style>
	.done 
	{
		text-decoration: line-through;
	}
</style>