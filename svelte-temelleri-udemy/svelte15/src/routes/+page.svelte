

<script lang="ts">
	/*
	Svelte de DOM KULLANMAK!!
	html de onclick yazarken, svelte de sadece on:click diye yaziyoruz
	*/

   import ImagePreview from "./ImagePreview.svelte";

	const handleClick = (e:any)=>
	{
		//Dikkat edelim.  event sayesinde dom a mudahele edebiliyoruz bu sekilde!!!!
		console.log(e.target);//button elementin gelir
		console.log(e.target.innerText);//Click
		e.target.innerText = "Test";//Dikkat edersek bu sekilde, button un text ini manipule edebildik
	}
</script>



<button on:click={handleClick}>Click</button>
<h1>Welcome to SvelteKit</h1>

<ImagePreview/>
