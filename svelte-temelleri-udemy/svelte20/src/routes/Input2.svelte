<script lang="ts">
	export let value:any;
	//Ayrica alternatif olarak da burda olustrudgumz input value sini biz ust componenttende alabilirdik...
	export let myInput:any;
		
	</script>

	<input type="text" bind:value={value} bind:this={myInput}>
	
	