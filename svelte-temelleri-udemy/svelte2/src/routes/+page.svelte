

<script>
   import Cards from "./Cards.svelte";
   import Card from "./Cards.svelte";


	let name="";
	let surname="";

	let fullName = `${name} -- ${surname}`;

	//Bu sekilde artik girilen degeri disardan bir degiskenimnize alabiliyoruz ve istedgimz heryerde..direk input icine girilen degere bagli olarak dinamik bir sekilde kullanabilmis oluyoruz!!!!!
	$:myFullname = `${name} -- ${surname}`;



	let isLogin = true;
	

	let people = [
		{id:1,name:"Adem", surname:"Erbas"},
		{id:2,name:"Zeynep", surname:"Erbas"},
		{id:3,name:"Zehra", surname:"Erbas"},
	]

</script>

<section>
	<h1>Welcome to SvelteKit</h1>

	<label for="name">Name:</label>
	<input type="text" bind:value={name} >
	<!-- bind sayesinde de hic herhangi bir event-handling kullanmadan kullanicinin girdigi degeri 2 way-bindings yaparak belirledigmiz degiskenlerimze alabilmis oluyoruz!!!-->
	<br><br>
	<label for="surname">Surname:</label>
	<input type="text" bind:value={surname}>

	<hr>

	My name is <h2>{name}</h2> 

	<br><br>
	My surname is  <h2>{surname}</h2> 
	<hr>

 My fullname is <h1>{fullName}</h1><!--Burda herhangi bir sey yazmayacaktir cunku reactivity ozelligini kullanmadan almaya claiiiyoruz burda -->

 <hr>
 My fullname is <h1>{myFullname}</h1><!--Reactivity kavramini kullanidigmniz icin..burda artik kullanicinin inputa girdigi bir degeri istedgimz heryerde kullanabiliyoruz!!!-->

 <hr>
{#if isLogin }
 <h4>You are logged in!!!</h4>
{:else}
<h4>You are logged ut!!!</h4>
{/if}


<hr>
<ul>
{#each people as person (person.id) }<!--Burda her bir donen person data si icin bir uniq id vermemz gerekiyor, ayni reacttaki dongu ile html-jsx taglari icinde dondurulen her bir element icin attribute te verilemsi gereken zorunlu uniq-key mantigi ile ayni mantiktadir!!!!!-->
	<li>{person.name + "--" + person.surname }</li>
{/each}
</ul>


<hr>
<ul>
{#each people as {name,surname,id} (id) }
	<li>{name + "--" + surname }</li>
{/each}
</ul>


<hr>
<ul>
<Cards people={people}/>
</ul>

</section>

