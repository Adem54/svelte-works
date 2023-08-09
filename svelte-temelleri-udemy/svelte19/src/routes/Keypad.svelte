<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let value = '';

	const dispatch = createEventDispatcher();

	const select = (num:number) => () => (value += num);
	const clear = () => (value = '');
	//Custom-Eventin Daha Farkli kullanilis sekli!!!!!
	const submit = () => dispatch('submit');
	/*Bu sekilde direk disarda dispatch i kullanmis cunku, dispatch parametresine ismini  yazdigi 
submit i 	<button disabled={!value} on:click={submit}>submit</button> burda on:click a karsilik verdigi 
bir event oldugndan dolayi..yok burda submit degil de baska isim vermek istese idi o zaman da 
const submit = (event:any)=>{dispatch("mySubmit")} seklinde gonderebilirdi, hatta 2. parametreye 
obje icinde bu componentten ust componentte kullanilmak uzere ,data da gecebilirdi...
*/
</script>

<div class="keypad">
	<button on:click={select(1)}>1</button>
	<button on:click={select(2)}>2</button>
	<button on:click={select(3)}>3</button>
	<button on:click={select(4)}>4</button>
	<button on:click={select(5)}>5</button>
	<button on:click={select(6)}>6</button>
	<button on:click={select(7)}>7</button>
	<button on:click={select(8)}>8</button>
	<button on:click={select(9)}>9</button>

	<button disabled={!value} on:click={clear}>clear</button>
	<button on:click={select(0)}>0</button>
	<button disabled={!value} on:click={submit}>submit</button>
</div>

<style>
	.keypad {
		display: grid;
		grid-template-columns: repeat(3, 5em);
		grid-template-rows: repeat(4, 3em);
		grid-gap: 0.5em;
	}

	button {
		margin: 0;
	}
</style>