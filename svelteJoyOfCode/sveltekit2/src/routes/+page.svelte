
<script lang="ts">

const handleSubmit = async (event:Event) =>{
	let form = event.target as HTMLFormElement ?? null;//null gelme ihtimalinde sorun yasiyoruz ondan dolayi 
	//gelmesini bekledigmz typei bu sekilde belirtmeliyz
	if(form)
	{
		//new FormDta() parametresine
		let formData = new FormData(form);
		
	const res = await fetch("/api/newsletter", {
		method:"POST",
		body:formData,
	});
	const data = await res.json();
	console.log("data: ", data);

	}

}
</script>

<h1>Newsletter</h1>

<form action="" method="POST" on:submit|preventDefault={handleSubmit}>
	<label for="email">Email:</label>
	<input type="text" name="email">
	<div>
		<button type="submit">
			Subscribe
		</button>
	</div>
</form>