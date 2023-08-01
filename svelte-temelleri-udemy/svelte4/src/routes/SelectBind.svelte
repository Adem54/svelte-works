

<script lang="ts">
   import type { Redirect_1 } from "@sveltejs/kit";

let questions = [
	{id:1, text:"Favorite book?"},
	{id:2, text:"Favorite team?"},
	{id:3, text:"Favorite color?"},
];

let selectedQuestion:string="";
//Kullnici tarafindan secilen sorunun atanacagi degiskenimizdir selectedQuestion

$:selected = selectedQuestion;//Reactivity

let answer = "";

 let table:any= []

const handleFormSubmit = ()=>{

	//BU ISLEM ILE SVELTE TABLE A ATTGIMZ DATAYAI FARKEDEMEZKEN ASAGIDA TABLE REFERANSI NI DEGISTIREREK BU ISLEMI YAPINCA ARTIK TANIYOR SVELTE TABLE IN ICERISINE GONDERILEN DATAYI
	let id = table.length +1;
	let selectedText = selectedQuestion
	let answerText = answer;
	// let myObj = {id,question:selectedText, answer:answerText};
	let myObj = {id,question:selectedQuestion, answer};
	table.push(myObj);
	//EGER BU ISLEMIN SONUNDA DA SVELTE IN TABLE ICINDEKI DATAYI TANIMASINI ISTERSEK O ZAAMAN DA YINE REFERANSI DEGISTIREREK BU ISLEMI COZERIZ 
	 table = [...table];
	 answer = "";//input icerisinin submit te tiklaninca temizlenmesi icin de bu sekilde yapariz..
	
//Burda biz direk kendimiz modify ederek, yani referansi degistirerek, svelte in bu islemi tanimasini sagliyoruz, sVELTE IN DE CALISMA MANTIGI AYNI REACT GIBI IMMUTABLE DATA DEGISKLIKLERINI TANIYOR YANI REFERANSIN DEGISMESI GEREKIYOR 

//BURDA BIZ ISLEMI YAPARKEN DIREK REFERANSI DEGISTIREREK Y APTIGMMZ ICIN, SVELTE ISLEMIMIZI TANIYOR..IMMUTABLE DEGISKEN..
	//table = [{id:table.length+1, question:selectedQuestion, answer}, ...table];

}
</script>

<section>

	<form action="" on:submit|preventDefault={handleFormSubmit}>

		<select name="" id="" bind:value={selectedQuestion}>
			{#each questions as question(question.id) }
			<!-- <option value={question.id}>{question.text}</option> -->
			<option value={question.text}>{question.text}</option>
		 {/each}
		</select>

		<input type="text" bind:value={answer}>

		<button type="submit">Submit</button>
	</form>


<h2>Selected-question is {selectedQuestion}</h2>
<h2>Selected {selected}</h2>
<h2>Answer: {answer}</h2>
<h1>Questions-Answers</h1>


<table>
	<tr>
		<th>Question</th>
		<th>Answer</th>
	</tr>
	{#each table as item(item.id) }
		<tr>
			<td>{item.question} </td>
			<td>{item.answer}</td>
		</tr>
	{:else}
	<h5>There is no question and answer!!!</h5>	
{/each}
</table>
</section>

<style>
	table,th,td {
		border: 1px solid;
	}
</style>