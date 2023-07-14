<script>
	// export let name;
	// export let title;
	import Header from "./components/Header.svelte"
	import Welcome from "./components/Welcome.svelte"
	import Footer from "./components/Footer.svelte"
	import IncDec from "./components/IncDec.svelte"
	import Card from "./components/Card.svelte"
	import Card2 from "./components/Card2.svelte"
	import Card3 from "./components/Card3.svelte"

	let card = {
		productname:"Asus-PC",
		price:3150,
		description:"Very good standart"
	}
</script>
<!-- name, title main.js de degeri ataniyor ve buraya props olarak gonderilen javascript degiskenleridir ve html icerisinde suslu parantez icerisinde okunabiliyor!!!! 
1-main.js den App.svelte dosyasina name,title props lari gonderiliyor ve bunlar App.svelte iceriisnde okutuluyor veya kullaniliyor
2.main.js icerisinden prompt gonderilebilmesi icin dikkat edelim, props lar hangi dosyaya gonderilecek ise o dosyanin props un gonderildigi dosyaya yani main.js e import edilmesi gerekir!!!!!
3-Gonderilen props degerleri gonderildigi sayfa da script taglari icerisinde export ile alinir ve hangi key ile gonderildi ise o key ile alinarak kullanilir
4- Nested olarak ic ice komponentler seklinde ayni react mantiginda kullanilabiliyor, bu bize harika bir reusability kazandiriyor

5-Props veri aktarimi..alt componentlere veri aktarimi..ust katmandan alt componente dogru yapiliyor!!!Ama bu islem projeler buyudukce zorlasir ve yonetilemez hale gelecektir eger yuzlerce component kullanacaksak farli level larda. Ve oyle durumlarda da zaten store-state yonetimi-Context Api devreye girerek date yi bir yerde tutup muhtemelen ordan tum componentlere dagitiriz diye tahmin ediyorum!!
Props gonderme mantigi react taki ile aynidir hatta react a gore daha basittir. Parent komponentten child componente dogru props gonderilir...
Ayrica da props larin kullanildigi alt komponentlerde props lara default deger atanir ki olurda props gelmeme durumunda, uygulama patlamasin diye..props lar aynen sanki bir method a parametre gonderme mantigina benziyor biraz.

6-Birde react taki gibi bizim illa ki hepsini ana bir html tagi(reacttaki jsx Fragment veya <></> bos taglar arasina aliyorduk 1 ana jsx return etmek zorunda idi) Iste bunu da svelte kendisi otomatik yaparak bize bu konu da da rahatlik veriyor. istedigmz gibi yanyana html taglari sibling seviyesinde kullanabiliyoruz
export let name;
export let title;
-->
<!--
<main>
	<h1>Hellooo {name}!</h1>
	<h2>Welcome to {title}</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
-->

<main style="padding-bottom:3rem;">
<Header/>
<Welcome/>
<Footer/>
<IncDec/>
<hr>
<!-- card={name} eger name bir value type olsa idi, int,string vs gibi, ama spread operatoru kullandigmiz ve direk bir obje olarak ama o objeyi icerisindeki, propertiesleri ile gondermek istersek bu sekilde gondrebiliriz..   -->
<Card myCard={{...card}}/>
<hr>
<Card2 
title={card.productname}
price={card.price}
desc = {card.description}
/>
<hr>
<Card3 {...card}/>
</main>
<style>
/*	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	} */
</style>