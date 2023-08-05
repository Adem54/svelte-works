

<script lang="ts">
	//Svelte icerisinde gonderilen props u almak icin export kullaniliyor!!!
	export let user:any={};
	export let id:any=0,name:any="defaultName",surname:any="defaultsurname";
	console.log("user: ", user);
</script>
<div>
	<!-- <span>{JSON.stringify(user)}</span> -->
	<span>{id} - {name} - {surname}</span>
</div>