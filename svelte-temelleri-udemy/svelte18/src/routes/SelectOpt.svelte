
<script lang="ts">
let people = [
	{id:1, name:"Adem", surname:"Erbas", job:"System-utvikler"},
	{id:2, name:"Sercan", surname:"Kavas", job:"Tester"},
	{id:3, name:"Shatlik", surname:"Ergesov",job:"It-consulent"},
	{id:4, name:"Talip", surname:"Kara",job:"Frontend-utvikler"},
]

let selectedPerson:any;
let selectedPeople:any= [];


	let colors = ["red", "yellow","blue"];
	let mySelectedColors:any=[];
	let sizes = ["Small", "Medium","Large"];
	let mySelectedSize:any="";//1 tane olacagi icin dizi yapmaya gerekk yok!!
	/*Mantik olarak bir elbise alirken 1 tane beden secebiliriz, yani 2 farkli beden 
	den urun satin almayiz , ama farkli renkte urunler secebiliriz..
	colors: checbox da kullaniriz 
	sizes : radiobutton da kullaniriz, cunku tek bir secim yapilabilir,radiobuttonlarda
	*/
	let selectedOption = '';
	let options = [
		{ id: 1, label: 'Option 1' },
		{ id: 2, label: 'Option 2' },
		{ id: 3, label: 'Option 3' }
	];
</script>

<section>
	<h1>Radio Options</h1>
	{#each options as option (option.id)}
		<label for="test">
			<input type="radio" name="optionGroup"
				   value={option.label}
				   bind:group={selectedOption}
			>
			{option.label}
		</label>
	{/each}

	<h2>Selected Option</h2>
	<p>{selectedOption}</p>
</section>
<!--
	Oncelikle bind isllemi tabi ki select icersinde olacak 
	2.si biz icinde objelerin oldugu bir dizimiz var ise o zaman secili objeyi bulmaya odaklaniriz
	Ama burda dikkat edecegmiz nokta, icinde objelerin oldugu dizi icinden select-option i  yazidirmis 
	isek ve hangi obje nin secildigini bulmak istiyorusak ki mantik bu dur zaten ve de bizim normal html 
	icinde ve react iceriisindeki select-option da  option icerisindeki value lere id vermemiz in  
	amaci da odur kullanicinin hangi id yi sectigini bulup o id uzerinden gidrek de dizi icindeki 
	hangi objeyi sectigini alarak o objeye ait dieger propertieslere eriserek onlari kullanmak 
	Svelte bizi hic bu islerle ugrastirmayip, bize direk olarak, secilen objeyi veriyor..HARIKA. YONTEM!!
-->
<select name="" id="" bind:value={selectedPerson}>
	{#each people  as person,index(person.id) }
		<option value={person}>{person.name} - {person.surname}</option>
	{/each}

</select>
{#if selectedPerson}
	<h3>Selected-Person: {JSON.stringify(selectedPerson)}</h3>
	<h3>Selected-PersonName: {selectedPerson.name} {selectedPerson.surname} - {selectedPerson.job}</h3>
{/if}

<!--MULTIPLE SELECT-OPTION -->
<hr>
<select name="" id="" bind:value={selectedPeople} multiple>
	{#each people  as person,index(person.id) }
		<option value={person}>{person.name} - {person.surname}</option>
	{/each}

</select>
{#if selectedPeople.length>0}
	<h3>Selected-Person: {JSON.stringify(selectedPeople)}</h3>
	{#each selectedPeople as person, index(index) }
		<h2>{person.name} {person.surname} - {person.job}</h2>
	{/each}

{/if}
<hr>
{#each colors as color,index(index) }
	
		<label for="">{color}</label>
		<input type="checkbox" style="margin-right:1rem;" value={color} bind:group={mySelectedColors}> 
	
{/each}
<h1>{JSON.stringify(mySelectedColors)}</h1>

<hr>
{#each sizes as size,index(index) }
	<label for="">{size}</label>
	<input type="radio" value={size} bind:group={mySelectedSize} style="margin-right:1rem;"> 
{/each}
<h1>{JSON.stringify(mySelectedSize)}</h1>