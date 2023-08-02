

 <script>
	import Increase from "./Increase.svelte";
	import Decrease from "./Decrease.svelte";
	import Reset from "./Reset.svelte";
	import { count } from "$lib/store";

	//Increase,Decrease ve Reset ayni seviyede ve hepsinin de ayni degiskeni count degiskenini kullanabilmesin saglayacagiz ve hepsinin  ayni degiskene mudahele edebilmesini istiyourz ama props kullanmadan ve de hepsi count degerinin en son update edildigi degerini her bir sayfada alabilecegiz...

	//Store lari kullanmanin 2 yontemi vardir
	//1-subscribe yontemi: Bu store u nerde kullanacak isek orda bu store a abone olurak, o store degerini dinleyebiliyoruz ama o store degeri ile isimiz bittiginde de o store un aboneliginde cikmamiz gerekir bunu da onDestroy lifecycle methodu ile yapariz
	//2-Hic subscribe islemini kullanmadan direk $count yaparsak kendisi subscribe i yapmis olacaktir, bu sekilde 
	//Iste svelte in en onemli guc veya ozelliklerinden bir tanesi de state manangementidir!!!!!

</script>

<section>
	<Increase/>
	<Decrease/>
	<Reset/>
	<h2>Number: {$count}</h2>
</section>



<!--
		SVELTE-STORE KULLANIMI 
	Biz componentler arasi veriyi proplar ile ust component ten alt componentlere dogru 1 er level la ancak prop lari gonderebiliyoruz normalde, yani usten asagi dogru tek tek 1 adim 1 adim gonderebilyoruz.. Bu proje buyudukce yonetilemez hale gelecek bir hal alabiliyor herseyi prop lar ile cozmek iste bu problemi svelte te store lar ile asabiliyoruz
	Ozellikle mesela 1 ana parent var ve o ana parent in 6 tane child i var, ve 1 childdaki prop datasi diger child in ihtiyaci var ise her seferinde o prop u en bastan parentta olusturup da sonra ihtiyuaci olan tum childlara gonderelim diyemeyiz, cunku childlarin, sibling seviyesinde birbirine prop gonderemiyorlar sadece her parent bir alt child ina prop gonderilebilyor iste bu da prop kullaniminda sikca yasanan zorluklardan biridir
	Store ile beraber biz store u her componentin kolayca erisebilecegi bir yere koyariz ve o store daki veriyi biz artik her componentten veriinin en guncel halini yani o veri gitmis bir componentte isleme ugramis ve update oolmus ise o zaman update oolmus halini, yine ihtiyacimiz olan baska bir componentte , componentler arasi seviyeden bagimsiz olarak kullanabiliriz..bu da bize harika bir fleksibellik, ve efektiflik kazandiriyor tabi ki

	Svelte icindeki sotre lar 4 farkli cesittir 
	1-Readable:Burdaki veriler sadece okunabilir, ama degistirilemezler, 2-Writeable:Icindeki veri hem okunabilir, hem de guncellenebilir 3-Derived:Farkli store lardan elde edilecek bilgileri derleyebilmek icin kullanilir 4-Custom:Store icerisine biz y eni ozellikler ekleyerek kendimize ozel store lar da olusturabiliyoruz
	Islerimzin cogunu biz writeable store ile halledegiz
-->