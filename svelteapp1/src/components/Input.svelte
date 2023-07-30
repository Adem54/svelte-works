

<script>
let name="Adem"
let surname = "Erbas"
//Su anki hali ile, kullanici input alanina bir deger girince biz bunu name degiskenimz de alamiyoruz...Yani bizim bu baglantiyi gerceklestirmemiz gerekiyor
//Yani su an tek tarafli bir binding imiz var biz burdan name i ilk verirken kullaniciya evet iletebildik ama kullanicinin  yaptigi degisiklik buraya iletilmedi bizim two-way bindings e ihtiyacimz var..
//Asagidaki gibi bind: ile bagladigmz zaman artik biz two-way-bindings yapmis oluyoruz, ve sadece bizim burdan girdigimiz deger, kullaniciya iletilmek le kalmiyor ayni zamanda kullanicinin da yapmis oldugu interaktion lari biz burda alabilmis oluyruz zaten, onemli olan asil noktada budur, bizim uygulamayi yonetebilmek icin kullanicinnin yaptigi action lari burdan alabilmemiz gerekiyor ki uygulamayi yonetebilelim..

//Reactivity Kavrami 
//Simdi biz name i ve surnam i tamam bagladik ve orda olan degisikliklerimizi kullanicya gosterebilioruz ama, burda bind: kullanarak bunu yaptik, bu su anlama gelmiyor bizim name degiskenini kullanacagimz diger tum yerlerde bu degisikligin iletilecegi anlamina gelmiyor...O zaman bir problemimiz var, biz kullanicidan gelen degisikligi surekli olarak, uygulamada o degisikligi kullanmak istedigmz tum alanlarda gozukmesini isteriz...<input id="name" type="text" bind:value={name}>
//Asagidaki fullname e kullanicinin input alaninda yaptigi degisiklikler yansimiyor..yani name ve surname de biz degisikligi aliyoruz eyvallah, ama bizim bu degisiklikleri kullanicidan alma sebebimz tab i ki uygulamanin diger yerlerinde de kullanabilmek, yani biz degisiklikleri anlik olarak uygulamanin diger alnlarinda kullanamazsak o zaman zaten sadece bir an icin name-surnam ile almak cok da anlamli olmayacaktir...Peki biz bu islemi reactta nasil yapiyorduk, normal onchange event i uzerinden kullanici girdigi anda biz o degiskligi alip defatult olarak belirledigimz degiskenlerimzde kullaniyorduk!!! Yani onchange methodu icerisinde, kullanicinin interaktif oldugu alandan gleen degiskeni diger alanlar icin kullancagimiz degsken e event icersinde aktarark kullanici tarafindan yapilan son degisikligi surekli alabilmis olurduk...ama artik bunun icin event icerisinde  yazmamiza gerek kalmiyor svelte sayesinde..
//Sveltte ise bu islemi Reactivity kavrami ile halledecegiz...yani tabiri caizse, sen artik reaktif ol, kullanicidan gelen tum degiskligi artik senin de almani istiyorum diyerek biz ku llanicidan gelen degiskligi hangi alanlarda reactive olmasini yani aninda iletilmesini istiyorsak bu reactivty syntax ini kullaniriz!!! $:fullname = `${name} - ${surname}`; ve arttik bu islemimizden sonra, kullanicindan two-way bindings ile aldigmz degisiklikleri biz, uygulamamizin istedigmz alanlarinda kullanabiliriz...YANI BU SU DEMEK SEN SU ANDA EVET BIR NUMBER-INTEGER TYPE, VEYA STRING TYPE SIN, Y ANI VALUE TYPE SIN YANI IMMUTABLE SIN AMA, BEN SENIN REFERANSE TYPE GIBI DAVRANMANI, YANI MUTABLE DAVRANMANI ISTIYORUM DEMIS OLUYOR VE SVELTE REACTIVITY $: SYNTAX I ILE VALUE TYPE I REFERANS TYPE GIBI DAVRANMASI SAGLANMIS OLUYOR...
//Sadece degiskenler reactive olarak tanimlanmaz ayni zamanda if bloklari da reaktif olarak tanimlanabilir

//let fullname = `${name} - ${surname}`;
$:fullname = `${name} - ${surname}`;


let number=0;

const handleClick = (event)=>
{
	console.log("event: ", event.target)
	number++
	totalNumber2=number+10 //Normalde reactta bunu yaparak biz kullanicinin girmis oldugu bir degeri uygulamamizdaki diger degiskenlere aktarirdik ama svelte bu islemi $: reactivity ile hic buna gerek kalmadan cozebilmemizi sagliyor, myTotalNumber, yani burda resmen adam value type bir degere , referans type ozelliik kazandirarak, buyuk bir efektiflik saglamislar...ve opsiyonel bir islem sunmuslar bize nasil isimze gelirse o sekilde yapabiliriz..
}

let totalNumber = number + 10;
let totalNumber2 = number + 10;

//Normlade bekltnimz, number degiskeni kullanici tarafindan butona her basildigindas 1 arttirilacak, ve bu da bizim number a atadigmiz diger  yerlere yansiyacak diye ama iste svelte bu sekilde olmuyor..kullanicidan gelen degisklikgi biz, bind yontemi ile olur veya direk event uzerinden on:click={} seklinde de alsak, bu degisklikleri biz baska degiskenlere atadigimz zaman o atanan degisiklikte bunlar disarda olduklari icin direk bu degisiklikleri alamiyorlar  yani bu degisiklikleri alabilmeleri icin, bunlarin da ne olmasi gerekir normalde, ornegin o on:click olayi icerisinde kullanilmasi gerekir..Burda ne yaptigimzin, svelte in bize ne sagladginin farkinda olalim..bak...value type variable larin number(int), string type li degiskenleri resmen svelte reactivity ile reference type gibi kullanabilmemizi sagliyor...yani gidip ornegin totalNumber i biz on:click event i icinde kullanmamaiza ragmen, totalNumber a da anlik olarak degisikligin yansimasini sagliyor...

$:myTotalNumber = number + 10;


//if-else logic reactivity
let isUserLogin = true;

const handleUserLogin = (event)=>
{
	isUserLogin = !isUserLogin;
}


</script>


<section>
	<span for="name">Name:</span>
	<input id="name" type="text" bind:value={name}>

	<span for="surname">Name:</span>
	<input id="surname" type="text" bind:value={surname}>
<h4>Name: {name}</h4>
<h4>Surname: {surname}</h4>

<h4>Fullname: {fullname}</h4>
<hr>

<button on:click={handleClick}>Click</button>
<p>Mynumber is clicked {number} times</p>
<p>TotalNumber: {totalNumber}</p>
<p>TotalNumber2: {totalNumber2}</p>
<p>MyTotalNumber: {myTotalNumber}</p>
</section>

<hr>
<section>
<!--SIMDI BURAYA DIKKAT!! REACTTA BIZ IF  LOGIC LERINE GORE BAZI COMPONENTLERI GIZLER BAZI COMPONENTLERI DE KULLANICIYA GOSTERIRDIK..NASIL CUNKU REACTTA HERSEY JAVASCRIPTTEN OLUSTURULMUSTUR.AMA SVELTE TE BIZ DKKAT EDELIM. HTML TAG ALANINA HTML YAZIYORUZ YANI BIZIM O ZAMAN LOGIC LERI BU TARZ REACTTA Y APTGIMZI LOGIC LERI YAPABILMEK ICIN IF BLOKLARINI HTML ALANINDA KULLANMA ZORUNLULUGMUZ VAR PEKI NASIL OLACAK BU IS, ISTE SVELTE BIZE BURDA DA GAYET KULLANISLI BIR YONTEM SUNUYOR!!!! BU ARADA SVELTE SYNTAX INDE IF IN HTML ICINDE KULANILMASI BU SEKLIDE DIR {#if} {/if} bu sekilde ve ilk if acilma bloginda kosulumuzu direk y azariz herhangi bir parantez normal parantez icerisinde degil..

Simdi butonlara tiklayarak login ve logout a tiklayarak user butonunun degerini degistirecegiz...COOK ONEMLI!!!

-->
	{#if !isUserLogin}
		<button on:click={handleUserLogin}>Login</button>
	{/if}

	{#if isUserLogin}
		{console.log("Hello")} <!--Cok enteresan html tag i icerisinde if blogu kullanabiliyoruz svelte syntax i ile ve o if blogu icerisinde ister direk html tagi  yaz istersen de gel bu sekilde javascript yaz.HARIKA OPTIONALLLLL
		Burda ama sunu anlayalim.Biz consoole.log ile html taglari arasinda suslu parantez de birsey yazinca, bu direk eekrana basmaya calisiyor console.log("hello") ifadesi return olarak birsey donmuyor undefined, dir ondnan dolayi biz bir tarftan Developer tools da console da Hello goruyoruz ama obur taraftan html- alanimiza yazdgimz console.log("Hello") birsey e karsilik gelmedigi birseyi return etmedigi icin, undefined olarak gozukecektir ekranimizda.YANI KISACASI YAHU ZATEN YAZDIGIN DEGER DIREK EKRANDA GOZUKUYOR ISE HTML DE, YANI YAZDIGN JAVASCRIPTIN NEYE KARSILK GELDIGNI EKRANDA GORUYOR ISEK NE DIYE CONSLE.LOG YAZARSIN  HALA BE ADAM DIYE SORUYOR DUR MUHTEMELEN SVELTE BANA!!!!
		-->
		<button on:click={handleUserLogin}>Logout</button>

	{/if}

	<hr>
	<!--if else seklinde de kullanabilirz-->
	 {#if !isUserLogin}
	 <button on:click={handleUserLogin}>Login</button>
	 {:else}
	 <button on:click={handleUserLogin}>Logout</button>
	 {/if}
</section>
<style>

</style>