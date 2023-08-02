
<script>
	import {count } from "$lib/store";
const handleReset=()=>
{
	count.set(0);
	//set etme oldugu icin direk deger ataniyor icerisine...
}
</script>
<button on:click={handleReset}>Reset</button>

<style>
	button {
		font-size:2rem;
		font-weight: bold;
		padding: .6rem 1rem;
	}
</style>