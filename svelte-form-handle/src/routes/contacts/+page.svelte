

<script>
	export let data;
//Simdi data olarak neyi aliyor hemen onu farkedelim...
//+page.server.js de return {	contacts} return oalrak ne gonderiliyorsa data ona esittir


</script>

<section>
	<ul>
		<li>Name: {data.contacts[0].name}</li>
		<li>Email:{data.contacts[0].email}</li>
		<li>Company:{data.contacts[0].company}</li>
		<li>Job:{data.contacts[0].job}</li>
	</ul>
</section>

