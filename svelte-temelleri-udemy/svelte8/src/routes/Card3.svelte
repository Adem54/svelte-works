<script lang="ts">
	export let item:any;
	console.log("item: ", item);
//slot componentinin cagrildigii veya kullanildigi yerden slot componente props gonderebiliyrouz, ama bu props u tabi ki slot compnent icerisinde <slot></slot> icerrisinde degil diger ortak icerik olan html ler in iceriginde kullanacagiz 
//Ayrica eger slot componenti icerisine slot componentinin kullanildigi componentten gonderilen propsu tekrardan slot componentinin cagrildigi yere gondermek istersek o zaman da 	<slot prop={item}> bu sekilde slot tag i icerisinde prop tekrardan gonderilebilir
//Tekrardan slot componentten slot componentinin cagrildigi yere gonderilen props u ise orda asgidaki gibi alip kullanabiliriz
//<Card3 item={items[0]}   let:prop={passedBack}> <h1>Children content: {passedBack.name}</h2>   </Card3>
//Eger propsu geri gonderme islemini named props da  yaparsak o zaman da slot componenti kullandgimiz yerde o named slot un kullanildigi html tagi icierisinde alinmasi gerekiyor geri gonderilen propsun, su sekilde:<h3 slot="card3Slot" let:prop={passedBack}>Card3 Named Slots is here!! ::: {passedBack.name} - {passedBack.value}</h3>
</script>

<div class="container">
	<h2>This is the top part of Card3 slot: {item.value} - {item.name}</h2>
	<slot prop={item}  >This is the default content of slot which is getting the props</slot>

	<slot  prop={item} name="card3Slot">This is the named Card3 slot</slot>
</div>

<style>
	.container {
		background-color: chartreuse;
		color: crimson;
	}
</style>