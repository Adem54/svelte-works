<script>

	import '../app.css';

</script>
<nav>
	<ul>
		<li><a href="/" role="button">Home</a></li>
		<li><a href="/posts" role="button">Posts</a></li>
	</ul>
</nav>
<slot/>
<!--Bu slot demek, burasinin routes altinda bulunan ana sayfa olan yani
	 routes in direk bir alt seviyesinde olan  
+page.svelteHTML(home-page dir burasi) ve diger 
alt klasorler(her bir klasor altinda +page.svelte dosyasi oldugu zaman svelte 
onlari birer route olarak taniyacaktir, bunu unutmayalim!!!
Tum sayfalar +layout.svelte isminde routes in direk alt seviyesince yani 
home-seviyesindeki +layout.page i svelte in route olarak tanidigi,
 tum +page.svelte sayfalarinda gecerli olacaktir, ama buraya dikkat
edelim, slot u kullandigimz zaman, da her sveltekit in tanidigi her
 bir sayfa nin kendine ait icerigini, gorebiliriz
slot kullanmaz isek kendi icerigini de goremeyiz!!!
)
Burda bir bestpractise daha bilelim.Iste burasi ortak bir kisim
 oldugu icin yani tum sayfalarda kullanilacak
ortak alan oldugu icin iste burda global-style kullanarak, 
tum sayfalarda ortak kullanilabilecek
style lari burda yazabiliriz!!!! src altinda olustrudgumz 
app.css si bu sayfaya dahil ederek, ortak css sayfasini da buralarda olusturabiliriz
Layoutlarimizda ayni sayfalarmiz gibi, server da ve clientta calisiyor
Slot calisma mantigi 
slot reacttaki <Outlet/> gibidr ve biz sveltekit in tanidig componentlermizde
 hepsinde ortak olacak kodlari 
+layout a yazariz ve her componentin kendisine has olan kodu da slot yazdigmz yer e karsik gelir!!!!! 
HARIKA BESTPRACTISE..
OTOMATIK OLARAK, BIZIM HICBIRSEY YAPMAMIZA GEREK YOK SVELTE +LAYOUT.SVELTE DOSYASINI DOGRUDAN TANIYOR.
VE +LAYOUT.SVELTE TE YAZILAN HTML KDOUNU TUM COMPONENTLER ALACAKTIR,
 VE ICINDEKI SLOT KISMINA DA HER COMPONENTIN 
KENDI ICERIGI GELECEKTIR.
SLOTLARIN OZELLESTIRILEBILDIGI, SLOTLARIN CHILDREN ALMASI, VE 
SLOTLARIN PROPS GONDERILEBILMESI NI DE DUSUNDUGMZ ZAMAN 
BIZ SLOTLARI KULLANARAK COK ILERI SEVIYE HARIKA REUSABILITY VE
 SUSTAINABILITY ISLEMLER YAPABILIRIZ SADECE BIRAZ DAHA 
KAFA YORUP, DAHA KREATIF DUSUNEMIZ GEREKIYOR!!!!!SVELTE ICINDE
 SLOT LAR COK BUYUK BIR GUCTUR. SLOTLARI COK IYI DEGERLENDIRMELIYZ!!
HER ZAMAN ICIN BIR COMPONENT ACTIVE OLUYOR, BIZIM ROUTE OLDUGMZ 
YANI NAVIGE OLDUGMZ COMPONENT ACITVE YANI ONMOUNT, OLURKEN, 
BIR ONCE KI UZERINDE OLDUGMZ COMPONENT VE DIGER TUM COMPONENTLER 
PASSIVE OLACAKTIR, BIR ONCEKI COMPONENTTE DE ONDESTROY CLAISARAK 
UNMOUNT OLMUS OLACAKTIR
-->
<footer>
	This is the footer part!
</footer>

<style>
	footer{
		margin-top:5rem;
		background-color: #000;
		height: 3rem;
		width:100vw;
		color: #fff;
		line-height: 3rem;
		text-align: center;
	}
</style>