
<script lang="ts">
   import { onMount } from "svelte";

let email:string="";

const handleSubmit = async (event:Event) =>{
	let form = event.target as HTMLFormElement ?? null;
	//null gelme ihtimalinde sorun yasiyoruz ondan dolayi 
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

//Form gonderme de form data larina erismeyi bu sekilde de yapabiliriz
// ki zaten bu yontemi kullancagiz daha cok
const handleSubmitForm = async (event:Event)=>
{
	let formData = new FormData();
	formData.append("email", email);
	const res = await fetch("api/newsletter", {
		method:"POST",
		body:formData
	});
	const data = await res.json();
	console.log("dataaa:  ", data);
}

const handleSubmitForm2 = async (event:Event)=>
{
	//Sunu hicbirzaman unutmayalim,eger her zaman data yi gondderirken json formatinda gondermeliyzi...
	const res = await fetch("api/newsletter", {
		method:"POST",
		headers:{
			"Content-Type":"Application/JSON"
		},
		body:JSON.stringify(email)
	});
	const data = await res.json();
	console.log("dataaa:  ", data);
}

let posts:any=[];
onMount(async ()=>{
	const response = await fetch("/api/posts");
	posts = await response.json();
	console.log("posts: ",posts);
})


//Gondererimdg request in sonucunda gelen response ile yani resonse-state i ni kullanarak
//dinamik bir skeilde sayfamizda html de if-else ile state degisiklikleri istedimgz gibi 
//yapabilirz
</script>

<h1>Newsletter</h1>
{#each posts as post , index(post.id)}
	<h3>{post.title}</h3>
	<p>{post.body}</p>
	<br>
{/each}
<!--form icerisindeki, action default olarak kendi bulundugu sayfaya gider eger url-verilmezse 
Ve de method da GET tir default olarak
-->
<form action="" method="POST" on:submit|preventDefault={handleSubmit}>
	<label for="email">Email:</label>
	<input type="text" name="email">
	<!--name verilmesi cok onemlidir, formData uzerinden, post method icinde 
		bu name uzerinden erisiliyor email datasina- api/newsletter/+Server.ts
		const data = await event.request.formData();
		const email = data.get("email");
	-->
	<div>
		<button type="submit">
			Subscribe
		</button>
		<!--form icerisindeki button un typei default olarak submittir-->
	</div>
</form>

<form action="" method="POST" on:submit|preventDefault={handleSubmitForm}>
	<label for="email">Email:</label>
	<input type="text" name="email" bind:value={email}>
	<div>
		<button type="submit">
			Subscribe
		</button>
	</div>
</form>

<form action="" method="POST" on:submit|preventDefault={handleSubmitForm2}>
	<label for="email">Email:</label>
	<input type="text" name="email" bind:value={email}>
	<div>
		<button type="submit">
			Subscribe
		</button>
	</div>
</form>

<!--
	Form ile data gonderirken, form icerisindeki her turlu file da dahili data type ini 
	formData araciligi ile gonderebiliriz, birde form icinde olmayip da bizim post ile gondermek istdgimz data
	lar icin ise, onlari da form a type i hidden yaparak alanlar ekleyerek gondeririz!!!!Onemli 
	json.stringify ile de gonderebiliyoruz yuukarda goruldugu gibi, bu data biraz daha ornegin direk kendimz data yi 
	obje icinde vs tutup da onu form uzerindne guncelleme seklinde ayri ca data yapilandirilmis islemler 
	yaptigimz durumlarda kullanilabilir, ama her ikisi de kullanilabilir, ve ozellikle, form icinde olmayan data lar 
	da gondereceksek onlari hic tekrar yeni input alanlari olusturup onlari type-hidden yapma vs ile ugrasmadan
	direk olarak json.stringify yontemi ile gonderebiliriz

-->