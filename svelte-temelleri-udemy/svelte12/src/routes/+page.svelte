
<script>
   import Card from "./Card.svelte";
   import Counter from "./Counter.svelte";
   import NumberCounter from "./NumberCounter.svelte";
   import UserList from "./UserList.svelte";


	let users = [
		{id:1, name:"Adem", surname:"Erbas"},
		{id:2, name:"Andreas", surname:"Johannes"},
		{id:3, name:"Jim", surname:"Halpert"},
		{id:4, name:"Micheal", surname:"Kaya"},
		{id:5, name:"Kevin", surname:"Sarz"},
	]
</script>

<UserList {users}/>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<Counter/>
<NumberCounter/>

 <hr>
 <Card/>