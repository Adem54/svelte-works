
<script>
   import Card from "./Card.svelte";
   import Card2 from "./Card2.svelte";
</script>
<h1>Welcome to SvelteKit</h1>
<Card>Card element!</Card>
<Card>
	<input type="text">
</Card>
<Card>
	<button>Click</button>
</Card>
<hr>
<Card></Card>
<Card/>

<h1>Named Slots</h1>
<hr>
<Card2>
	<span slot="name">
		Adem Erbas
	</span>

	<span slot="address">
		Kjørbekkdalen 3A
	</span>
</Card2>
