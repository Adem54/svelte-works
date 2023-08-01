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
	import MyInput from "./components/Input.svelte"

	let card = {
		productname:"Asus-PC",
		price:3150,
		description:"Very good standart",
		seller:"John Tiger"
	}
</script>
<!-- name, title main.js de degeri ataniyor ve buraya props olarak gonderilen javascript degiskenleridir ve html icerisinde suslu parantez icerisinde okunabiliyor!!!! 
1-main.js den App.svelte dosyasina name,title props lari gonderiliyor ve bunlar App.svelte iceriisnde okutuluyor veya kullaniliyor
2.main.js icerisinden prompt gonderilebilmesi icin dikkat edelim, props lar hangi dosyaya gonderilecek ise o dosyanin props un gonderildigi dosyaya yani main.js e import edilmesi gerekir!!!!!
3-Gonderilen props degerleri gonderildigi sayfa da script taglari icerisinde export ile alinir ve hangi key ile gonderildi ise o key ile alinarak kullanilir- <Card myCard={{...card}}/> myCard key i ile gonderildigi icin, Card componenti icerisinde 	export let myCard;
 let { productname, price, description, seller } = myCard; bu seklilde kullanilir. Veya 
 <Card2 
title={card.productname}
price={card.price}
desc = {card.description}
/>
O zaman da Card2 component i icerisinde su sekilde alinip da kullanilabilir
	export let title, price, desc, seller ;
Ya da asagidaki gibi daha pratik kullanilabilir, ki bizgenellikle bu sekilde kullanacagiz!!spread methodu ile
<Card3 {...card}/>	
Card3 comnpnenti icerisidne ise 
export let productname, price, description, seller;
bu sekilde aliriz

4- Nested olarak ic ice komponentler seklinde ayni react mantiginda kullanilabiliyor, bu bize harika bir reusability kazandiriyor

5-Props veri aktarimi..alt componentlere veri aktarimi..ust katmandan alt componente dogru yapiliyor!!!Ama bu islem projeler buyudukce zorlasir ve yonetilemez hale gelecektir eger yuzlerce component kullanacaksak farli level larda. Ve oyle durumlarda da zaten store-state yonetimi-Context Api devreye girerek date yi bir yerde tutup muhtemelen ordan tum componentlere dagitiriz diye tahmin ediyorum!!
Props gonderme mantigi react taki ile aynidir hatta react a gore daha basittir. Parent komponentten child componente dogru props gonderilir...
Ayrica da props larin kullanildigi alt komponentlerde props lara default deger atanir ki olurda props gelmeme durumunda, uygulama patlamasin diye..props lar aynen sanki bir method a parametre gonderme mantigina benziyor biraz.

6-Birde react taki gibi bizim illa ki hepsini ana bir html tagi(reacttaki jsx Fragment veya <></> bos taglar arasina aliyorduk 1 ana jsx return etmek zorunda idi) Iste bunu da svelte kendisi otomatik yaparak bize bu konu da da rahatlik veriyor. istedigmz gibi yanyana html taglari sibling seviyesinde kullanabiliyoruz
export let name;
export let title;

7.Props lari aktarma isleminde sustainability-bærekraftig-surdurulebilirlik acisindan spread operatorunun kullaniriz.. 
8. Bir event i calistirirken bu syntax i kullaniriz <button class="btn dec" on:click={onDecrease}>Decrease</button>	
9. //Reactivity Kavrami 

Simdi biz name i ve surnam i tamam bagladik ve orda olan degisikliklerimizi kullanicya gosterebilioruz ama, burda bind: kullanarak bunu yaptik, bu su anlama gelmiyor bizim name degiskenini kullanacagimz diger tum yerlerde bu degisikligin iletilecegi anlamina gelmiyor...O zaman bir problemimiz var, biz kullanicidan gelen degisikligi surekli olarak, uygulamada o degisikligi kullanmak istedigmz tum alanlarda gozukmesini isteriz...<input id="name" type="text" bind:value={name}>
Asagidaki fullname e kullanicinin input alaninda yaptigi degisiklikler yansimiyor..yani name ve surname de biz degisikligi aliyoruz eyvallah, ama bizim bu degisiklikleri kullanicidan alma sebebimz tab i ki uygulamanin diger yerlerinde de kullanabilmek, yani biz degisiklikleri anlik olarak uygulamanin diger alnlarinda kullanamazsak o zaman zaten sadece bir an icin name-surnam ile almak cok da anlamli olmayacaktir...Peki biz bu islemi reactta nasil yapiyorduk, normal onchange event i uzerinden kullanici girdigi anda biz o degiskligi alip defatult olarak belirledigimz degiskenlerimzde kullaniyorduk!!! Yani onchange methodu icerisinde, kullanicinin interaktif oldugu alandan gleen degiskeni diger alanlar icin kullancagimiz degsken e event icersinde aktarark kullanici tarafindan yapilan son degisikligi surekli alabilmis olurduk-useState araciligi ile...ama artik bunun icin event icerisinde  yazmamiza gerek kalmiyor svelte sayesinde..
Sveltte ise bu islemi Reactivity kavrami ile halledecegiz...yani tabiri caizse, sen artik reaktif ol, kullanicidan gelen tum degiskligi artik senin de almani istiyorum diyerek biz ku llanicidan gelen degiskligi hangi alanlarda reactive olmasini yani aninda iletilmesini istiyorsak bu reactivty syntax ini kullaniriz!!! $:fullname = `${name} - ${surname}`; ve arttik bu islemimizden sonra, kullanicindan two-way bindings ile aldigmz degisiklikleri biz, uygulamamizin istedigmz alanlarinda kullanabiliriz...YANI BU SU DEMEK SEN SU ANDA EVET BIR NUMBER-INTEGER TYPE, VEYA STRING TYPE SIN, Y ANI VALUE TYPE SIN YANI IMMUTABLE SIN AMA, BEN SENIN REFERANSE TYPE GIBI DAVRANMANI, YANI MUTABLE DAVRANMANI ISTIYORUM DEMIS OLUYOR VE SVELTE REACTIVITY $: SYNTAX I ILE VALUE TYPE I REFERANS TYPE GIBI DAVRANMASI SAGLANMIS OLUYOR...
Sadece degiskenler reactive olarak tanimlanmaz ayni zamanda if bloklari da reaktif olarak tanimlanabilir
10-if-else blogu sayesinde html taglarinin sartlara gore dinamik olarak gosterilmesi durumu!!!! ve each blogu ile arrray lerin html icinde listelenmesi

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
<hr>
<MyInput/>
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