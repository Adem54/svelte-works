

<script>
let selected=null;
let selectedId=0;
//Artik selectedId ne verilirse option icindeki value ile mathc olan person u default option olarak gosterecektir
let people = [
	{id:1, name:"Adem", surname:"Erbas"},
	{id:2, name:"Sercan", surname:"Kavas"},
	{id:3, name:"Satlik", surname:"Ergesov"},
	{id:4, name:"Andreas", surname:"Johannes"},
]
</script>

<section>

	<select bind:value={selectedId}>
		{#each people as person(person.id) }
			<option  value={person.id}>{person.name} - {person.surname}</option>
		{/each}
	</select>
</section>