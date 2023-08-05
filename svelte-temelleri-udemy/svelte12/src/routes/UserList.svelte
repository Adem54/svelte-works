

<script lang="ts">
   import User from "./User.svelte";
	//Bu sekilde biz, gonderilen propslara varsayilan deger atayarak,beklenen propsun gonderilmedigi durumlarda varsayilan degerin kullanilarak hata alimasini onlemis oluruz!!!
	export let users:any=[];
	console.log("users: ", users);
</script>
<section>
	{#each users as user(user.id) }
		<User {...user}/>
	{/each}
</section>