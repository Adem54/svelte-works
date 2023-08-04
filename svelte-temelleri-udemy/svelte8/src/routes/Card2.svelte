
<div class="card">
	<h1>
		<slot name="name">
			<span>There is no name!</span>
		</slot>
	</h1>

	<h4>
		<slot name="address">
			<span>There is no address!</span>
		</slot>
	</h4>

	<h2>
		<slot name="age">
			There is no age!
		</slot>
	</h2>
</div>

<style>
	.card {
		width:15rem;
		background-color: cyan;
		border:1px solid;
		border-radius: .3rem;
		margin-bottom: 1rem;
	}
</style>