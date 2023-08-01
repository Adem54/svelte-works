

<script>
	import Table from "./Table.svelte";
	let number = 0;
	//Dikkat edelim..number i biz ust komponentte olusturup alt komponente gondererek orda kullaniyoruz...ki biz, method vs de gonderebiliyorduk reactta
	//number i burda onIncrese, onDecrease icinde islem goren number in Table componentine gonderilmesi gerekir
	const onIncrease = ()=>{
			number+=1;
	}

	const onDecrease = () =>{
			number-=1;
	}
</script>
<section>
<Table {number}/>
<Table  /><!--Burda propsu gondermiyoruz ornegin, propsu gonderilmeme durumunda hata cikmasin diye...default deger veriyoruz..Table component i icerisinde!!! -->
<button class="btn inc" on:click={onIncrease}>Increase</button>
<button class="btn dec" on:click={onDecrease}>Decrease</button>
</section>
<style>

	.btn {
		font-size: 1.4rem;
		margin-left: 1rem;
	}

	
	.inc {
		background-color: green;
		color:#fff;
	}

	.dec {
		background-color: palevioletred;
		color:white;
		
	}
</style>