
<script>

//WRITABLE STORES IN SVELTEKIT
//store-3 sekilde ayarlaniyor 
//Store denilen seyden kastedilen bizim tutacagimz data dir ki bu ornegin user olabilir, user={email,password} gibi
//Writible,readable, derived
//1-Writable ile biz import {writable} "svelte/store" dan dahil ediyoruz ve sonra ornegin 
//export const user:Writable<UserWithoutPassword|undefined> = writable(undefined); yaparak bunun bizm update edebilecegimzi vs soylemis oluyoruz ki zaten   writable() yaptimiz zaman iz artik user.update() ile update yapabilme imkanini elde etmis oluyouruz aslindas...Ve biz parametreyee genellikle default valu ne ise onu vermek isteriz...bu undefined olabilir veya 0 olabilir gibi
//writable icerisinde 2.parametre de verebiliyoruz optional olarak ve 2.parametre sadece 1 kez ve 1.kez calisacktir..initalized, on tanimli olarak 1 kez gelmesini istedigmz durumlarda kullaniriz
//When Component subscribes to writeble store, 2.paramter optional callback function, will run, ama 2.parametrey i veriyorsan eger, o zaman clean up islemi de uygulaman gerekecek, bunu yapmak zorundasin icerisinde en son return ()=>console.log("no more subscribes")
//Diger sayfalardan writeStore olarak atanmis olan degeri kullanirken de ona store disindan erisebilmek icin basina $ kullaniriz
//import writeStore from "./writeStore"
//$:doubled = $writeStore * 2; gibi reactive statement ile combine etmis..sonra da artik doubled i .svelte dosyamizda html icinde kullanabliiriz dinamik olarak
//Bu kullanimda tabi biz reactivite degiskene atamis olduk
//Ayrica biz ornegin baska bir sayfada direk bir method icerisinde 
//import writeStore from "./writeStore" seklinde tanimlariz
//const increment = ()=>{writeStore.update(n=>n+1)} seklinde writeStore olarak tanimladigmz degiskeni update edebilmis oluruz ve writeStoru html icinde kullanirken basina {$writeSTore} seklinde kullaniriz, biz update methoda erisebiliyoruz cunku writable method oldugu icin readable da buna erisemeyecegiz. Writable , reactta useState uzerinden data guncelleme mantigina cok benziyor, bu sayede bizim update ettigmiz data miz tum componentlerde ayni anda degismesi saglanmis oluyor

//Birde readble var bu da spesfik durumlarda kullaniliyor ve kullaniciya sadece okuma izni vvermis oluyoruz burda  ayni mantikta kullaniliyor sadece readable olarak kullanirken tabi ki update methoduna erisilemiyor, writeabla da oldugu gibi

//derived daki mantik ise biz derived sayesinde bir veya daha fazla store tutabiliriz birde altidi 1.parametredeki store dan turetiliyor anlaminda, single store veya multiple store olarak tutabiiliriz, derived da 1.parametrede evet ister single, istersek de multiple store tutabiliriz ve 2.parametrede ise 1.parametredeki stores lari parametre olarak alan bir callback function kullanilabilir
//Bir component icerisinde kullanilirken, import derivedStore from "../derivedStore"
//<h2> {$derivdeStore}</h2>
/*
In Svelte, a store is a reactive container that holds a piece of state that can be shared and subscribed to by multiple components. It allows you to manage and synchronize state across your application.
Bu store mantigi oncelikle svelte in kendi icerisinden gelen ve disardan third part bir library vs kullanmadan gelen bir ozelliktir
Ve uygulamanin tum componentlerinde kolaylikla kullanilabilme imkanini veriyor bize


import { writable , derived} from "svelte/store"; bu inbuuld svelte.js module dur ve bu bize , readable ve modifable, yani okunabilir ve degistirilebilir bir store imkani sunuyor ve bu store u uygulamanin tum alanlarinda kullanabilmemizi sagliyor
Biz props lar uzerinden data gonderme, fonksiyon gonderme islemlerini her yerde yapamayiz ve kodun okunabilirligi ve maintanable, bakim i acisindan da oldukca zordur ve  yonteilmesi de zordur propslar uzerinden data lari cok fazla yonetmeye calismak
ornegin eger bir array ile baslaginc inital degeri vermek istersek typescirpt ile
type box = {
	x=number,
	y=number
}
export const layout = writable<box[]>([]);

export const user:Writable<UserWithoutPassword|undefined> = writable(undefined);--burasi store.ts iceerisinde
user in baslangic degeridir parametreye verilen deger...Buraya hangi deger verilirse uygulama acildiginda bu store o deger ile gelecektir
Ama login/+page.svelte icinde ise     import {user} from '../../stores'; 
Diger componentlere user i import ederek kullaniriz

Ve ornegin component icerisinde kullanirken artik user.set, user.update, user.subscribe methodlari ile gelir writeable oldugu icin
value yi degistirmek icin update ve set kullanilirken, subscribe ile o value dinlenmeye alinir dinlenir takip edilir

import {count_val} from "./store";

let count=0;
count_val.subscribe((val)=>count=val)
artik count value sini dinlemey basliyour 

set ile mesela
SIMDI ANA MANTIK SU BIZ DATAYI NERDE KULLANICIYA GOSTERECEKSEK O DATA YI DISARDAN ATADGIMZ BIR DEGISKENE ATAYARAK ONU SUBSCRIBE METHODU ILE DINLEMEYE BASLARIZ
import {count_val} from "./store";

let count=0;
count_val.subscribe((val)=>count=val)
artik count value sini dinlemey basliyour 

SONRA ORNEGIN  O DEGERI RESET BUTONU ILE BASKA BIR COJMPNENTTE SIFIRLAMAK ISTEYINCE YINE O WRITEABLE IN SET METHODU ILE 0 LARIZ...
VE BURAYA DIKKAT SUBSCRIBE ETTIGIMZ DEN DOLAYI DISARDAN BIR DEGISKENE, VE O RESETTE  YAPTGIMZ 
ZERO ISIMLI COMPONNETTE DE YAPACAIGMIZ ISLEM SADECE SU 
import {count_val} from "../store";

const zero = ()=>{
	count_val.set(0) burda yapilan set islemi diger sayfadaki
	
	COUNTU DINAMIK  OLARAK ETKILEMIS OLUYOR!!!! CUNKU SUBSCRIBE EDILIOYR DATA
	let count=0; count_val.subscribe((val)=>count=val)
}

<button on:click={zero}>reset</button>

BIR DIGER SAYFADA DA COUNT A HER TIKLANDIGINDA DEGTISMESI ICIN DE 
INCREASE COMPONENTINDE DE 

import {count_val} from "./store";

const add = ()=>{
	count_val.update(prev=>prev+1)
}

PEKI BIZ VALUE YI  NASIL SUBSCRIBE ETMEDEN UPDATE EDEBILIRIZ???????????????? 
$ ISARETI ILE STORE  U KULLANMAK...COOOK ONEMLI!!!

let count=0;
count_val.subscribe((val)=>count=val)

Burda dikkat edersek count degerini set etmek zorundayiz ve onu yukardaki gibi udpate etmemiz gerekiyor subscribe icerisindeki, count degerini artik dinleyebilelim tum uygulama componentlerinde artik store dan gelen deger uzerinde yapilan update,set islemlerini heryerde degisikligi alabilmemiz icin

import {count_val} from "./store";
count ve count_val.subscribe islemerini kaldiririz ve html kisiminda

<h1>{count}</h1> yerine 
<h1>{$count_val}</h1> reactive statement, bunu yaparak diyoruzki ne zaman ki count_Val icindeki value yani count_val store umuzdur ve icerisinde value atanmistir ./store dosyasi icinde
count_val iceriindeki value ne zaman degisirse biz subscription yapiyoruz kayit dinleme yapiyoruz, ve bu icinde bulundugmuz component i update ediyoruz, yani diger componentlerde kullanilan set ve update islemleri uzerinde yapilan degisikliklerin hepsi burada alinmis oluyor!!!!

FORM ACTIONS IN SVELTEKIT

Sveltekit te FormActions lar bize daha iyi bir userexperience sunyor ve javascripttin enabled olup olmamasina gore de form larimizi handle edebilmemizi sagliyor...


*/

</script>

<h1>Forms</h1>
<!--
Form lari biz browser lar ile server arasinda iletisim kurmak icin kullaniyoruz.... dikkat edelim.bu cook onemlidir


-->

<form method="POST" action="/login" style="margin-left:2rem;">
	<!--name e ne verirsek server dan o data alincak ondan dolayi da cok onemli-->
	<input type="text" name="user"/> <br><br>
	<input type="password" name="password"/>
	<br><br>
	<button type="submit">Login</button>


</form>
<!--
	Dikkat edelim su anda forma tikladimgz zaman Get metodu oldugu icin , bizim formda name ile verdigmz value ler birer key ve inputlara girdimgz value ler de onlarin value leri seklinde query olarak gidiyor login sayfasina ama su an login sayfasi olmadigi icin login sayfasini bulamiyhor
	http://localhost:5174/login?user=ademtest&password=sadfasdf
	Ama bu cok guvensiz bir method, cunku gizli ve hassas bilgiier Get ile gonderilmez
	METHODU POST YAPARSAK BU DA GET ILE HEMEN HEMEN AYNIDIR TEK FARKI DATAYI GIZLI VE REQUEST BODY ICERISINDE GONDERMIS OLUYOR
	DATA GET TEKI GIBI URL ICERISINDE DEGIL ONUN YERINE REQUEST-BODY SI ICERISINDE GONDERILMIS OLUYOR
	POSTTA DA GONDERILEN DATA LARI BROWSER DA INSPECT YAPARAK YAPILAN NETWERK MENUSUNDE YAPILAN ISTEGIN UZERINE 1 KEZ TIKLARIZ VE PAYLOAD A TIKJLAYARAK BIZIM GONDERIDIGMZ DATALAR ORDA GORULEBILIR
-->

