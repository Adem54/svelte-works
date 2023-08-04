
<script>
   import Card from "./Card.svelte";
   import Card2 from "./Card2.svelte";
   import Card3 from "./Card3.svelte";

	const items = [
		{name:"item one", value:1},
		{name:"item two", value:2},
		{name:"item three", value:3},
	]
</script>

<Card3 item={items[0]} let:prop={passedBack} >
	<h2>Card3 slots is here!: {passedBack.name} - {passedBack.value} </h2>
	<h3 slot="card3Slot" let:prop={passedBack}>Card3 Named Slots is here!! ::: {passedBack.name} - {passedBack.value}</h3>
</Card3>

<hr>
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
