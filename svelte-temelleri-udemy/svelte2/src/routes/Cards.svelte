<script lang="ts">
   import Card from "./Card.svelte";
   import Card2 from "./Card2.svelte";

	export let people:any;
	console.log("people; ", people);



	let card = {
		productname:"Asus-PC",
		price:3150,
		description:"Very good standart",
		seller:"John Tiger"
	}

	console.log("CARD: ", card);
	console.log("card: ", {...card});


	const handleDelete = ()=>{
	 people = people.slice(1);
	}
</script>


<section>
	<!-- {#each people as {name,surname,id} (id) }
<Card data={{name,surname}}/> -->
<!-- {#each people as person (person.id) }
<Card data={{...person}}/>  -->
{#each people as person (person.id) }
<Card {...person}/> 
<!--PROPS GONDERIMINE DIKKAT!!!!!!!!!!!!!!.. props olarak suslu parantez icerisidne 1 data gonderilebilir ondan dolayi, eger biz birden fazla value-types gondermek istersek bunu 1 obje icinde gonderebiliriz,,yoksa birden fazla, value types i yanyana tek suslu parantez icinde gonderemeyiz, ya ayri ayri parantez lerde key ile gonderecegiz  <Card name={name} surname={surname} /> ya da obje icinde bir kere de gonderecegiz <Card data={{name,surname}} /> seklinde 
Ama gidip de su sekilde data gonderemeyiz bunu bilelim.  <Card data={name,surname}/> bu sekilde data gonderemeyiz...
-->
<!--HARIKA BESTPRACTISE..EACH ICERSIDNDE ELSE KULLANARAK EACH ILE KULLANICIYA GOSTERDIGMIZ DIZI ICERISINDE EGER DATA YOK ISE O ZAMAN KULLANICIYA DATA BULUNMAMAKTADIR MESAJI VEREBILIYORUZ!!!!!-->
{:else} 
<div>
	<h5>There is no data to show!!!!</h5>
</div>

{/each}
<button on:click={handleDelete}>Delete</button>
<!--her tiklamada dizi icindeki 1.elemani silmeisn i istiyoruz ve dizi icinde eleman kalmayinca da bize dizi icinde gosterilecek eleman yoktur diye mesaj vermesini istiyoruz!!!!-->
<Card2 {...card}/>

<hr>
<Card2 
productname = {card.productname}
price = {card.price}
description = {card.description}
/>
</section>

<style>

</style>