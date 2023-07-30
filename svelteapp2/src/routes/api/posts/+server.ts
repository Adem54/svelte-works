
import { SECRET_API_KEY } from '$env/static/private'


//BURASI SERVER TARAFI VE CLIENT TARAFINDAN GELEN REQUEST LERIN ALINARAK, TERKRAR RESPOINSE EDILDIGI API-ENDPOINTLERIDIR
//BIZ BURASINI, POSTMENE GIDEREK DIREK TEST YAPABILRIZ!!!
//SIMDI, SVELTE IN OZELLIGI, BASINA + KOYARAK, ENDPOINT UZANTISINI SAGLAMIS OLUYORUZ ASLINDA!!!!!
//http://localhost:5173/api/posts
//YANI SADECE KLASORLERI DOGRU BIR SEKILDE AYARLAYIP O KLASORLER ALTINA EGER, +SERVER.TS YAZARSAK DIREK KLASORLER UZERINDEN API-ENDPOINT URL INI SVELTE OTOMATIK OLARAK TANIMIS OLUYOR , CUNKU ALT YAPISI ONA GORE KURGULANMIS..TEK YAPACAGIMZ ROUTES ALTINDA AYARLAYACAGIMZ KLASORLERI ONA GORE AYARLAYIP EGER API ISLEMI YAPACAKSAK O ZAMAN KLASOR ALTINA SADECE +SERVER.TS YAZMAK!!!
//AYNI MANTIK IN CLIENT TARAFI ISE, +PAGE.SVELTE SEKLINDE AYARLAMAK, GOSTERILECEK OLAN SAYFAYI!!!!!

//parametreye request event aliyor...daha detayli bilgileri alabilmek icin, headers vs den gelen datalara erisim sagliyoruz request parametresi araciligi ile
//Ozellikle Authorization islemlerinde biz, headers bilgilerini almamiz gerekecek zaten..

export const GET = async ({request, url})=> {
	console.log("requestt:", request);
	console.log("url:", url);
 //Biz request event parametresi haricinde, cleinta query filtrelemesi yaparak da request olusturabiliriz ve clienttan gelen request icerisindeki query prametrelerine de yine parametrede requestten sonra 2. parametre olarak erisebiliriz..
//	console.log("SECRET_API_KEY: ", SECRET_API_KEY)//.env daki api key i alabildigmzi burdan da gorebiliriz

	//EGER CLIENT-TARAFINDAN BIR AUTHORIZATION BILGISI GONDERILIRSE....BUNU BURDA CHECK EDEBILIRIZ...VEYA AUTHORIZATION I SIMULE ETMEK ICIN POSTMEN DAN AUTHORIZATION I HEADER ICINDEN GONDEREREK TEST EDEBILIRIZ!!!!

	// const authHeader = request.headers.get("Authorization")
	// console.log("authHeader: ", authHeader)
	//Biz get request yaparken postman dan Headers alaninda Authorization = Myauthheader da ekliyoruz Get request imize - http://localhost:5173/api/posts ve kullanici tarafindan gonderilen bu data yi biz iste request event parametresi araciligi ile aliyoruz ki biz su an server-side dayiz dolayisi ile de burdaki console u biz, server imin calistigi terminal ekranindan goruntuleyebilriiz 


	
	//Ayrica da kullanici  yetkisini sorgulayabiliiriz
	// if(authHeader !== "Myauthheader"){
	// 	return new Response(JSON.stringify({message:"Invalid credentials"}), {status:401})
	// }


	//FILTRELEME YAPMAK VE KULLANICIDAN GELEN FILTRELEME REQUEST INDEKI SPESIFIK QUERY LERE ERISMEK!!
	//Ornegin kullanici ya biz data dan istedigi sayi da cagirabilmesini sagliyhoruz.. ve bunu da kullaniciya limit query si ile veriyorsak o zaman bu sekilde eger kullanici limit-query si gondermis ise asagidaki gibi o query ye kullanicinin clienttan gonderirken atadigi value yi alriz eger kullanici herhangi bir limit query si gondermemis ise de 10 degerini veririz
	const limit = Number(url.searchParams.get('limit') ?? 10);
	const skip = Number(url.searchParams.get('skip') ?? 0);
//Bunlar su demek skip ile sen ornegin skip kac gelirse o kadari atla ondan sonra data dan limit degeri kadar getir 
//Orneign kullanici http://localhost:5173/api/posts?limit=8&skip=8  boyle bir request gonderirse bu su demektir.. skip=8 ilk 8 datayi atla sonra da bize limit=8  tane data gonder demektir....

//Yani bu mantikta query ler uzerinden cok ciddi filtreleme islemleri yapabiliriz 

	//SIMDI ARTIK GELEN BU QUERY LERI BURDAN DA FETCH ILE ALDIGMZ API-ENDPOINTIMIZDE KULLANIRIZ YA DA AYNI MANTIK ILE EGER DATABASE SORGULARI YAPIYORSAK BURDA, DATABASE SORGULARINDA DA KULLANABILIRIZ


	//Biz server tarafindan ornegin, uzak api den yine datayi cekip client a burdan response edebiliriz, bu sekilde kullanicinin ayni data icin 2 kez request yapmasini engellemis oluruz...Eger biz burdan sunacagimz data buraya da uzak bir api den geliyorsa

	const res =  await fetch("https://dummyjson.com/posts")
	//const res =  await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
	const data = await res.json()
 //artik bu datayi client a gonderebiliriz
//SIMDI BURAYA DIKKAT BIZ BURDA DATAYI YINE GIDIP BASKA BIR SERVICE DAN ALDIK API SERVICE SINDEN, BIZ BU MANTIGI ASLINDA GENEL OLARAK BURDAN DATBASE E BAGLANARAK DATABASE DEN VERIYI CEKIP BURDA CLIENT A GONDERECEK SEKLIDE DATA YI DUZENLEDIKTEN SONRA DATA YI CLIENT A SUNACAGIZ

	//Respoinse body yi jsona cevirmemiz gerekiyor
	return new Response(JSON.stringify({data}), {status:200})
}
// Yaptigims hersey bu kadar ve biz bunun sonucunda bir get request olusturmus olduk...bunu postman de vs test ederek de gorebiliriz

//Ornegin bazen biz environment variable dan api-key i aliriz ve o api-key i araciligi ile external bir api ye eriserek, data lari cekeriz  ve biz .env dosyasi olusturuyoruz ana, main directory ye yerlestirecegiz SECRET_API_KEY I tanimliyoruz ve suna dikkat edelim environment variable a eklenen  .env dosyasinin tanimais icin kodumuzun bizim vscode yi acip tekrar baslatmamiz gerekecek bunu unutma
//.env icindeki SECRET_API_KEY i en yukarda import edebiliriz - import { SECRET_API_KEY } from '$env/static/private'


//POST ISLEMLERI ICINDE BU SEKILDE ENDPOINTLER OLUSTURURKEN KULLANACAGIZ, YANI KULLANICI POST ILE VERI GONDERIP  O VERIYI DATABASE E KAYDETME VS ISLEMLERI YAPACAGI ZAMAN OZELLIKLE...BUNLARI YAPACAGIZ..
//SIMDI BIZIM POST ISLEMERLINDE ARTIK HEM BODY, HEM DE HEADER A ERISMEMIZ GEREKIR, CUNKU GONDERILEN DATA BODY ICERIISNDE GONDERILECEKTIR.....BIZ BODY YE GET REQUST ISLEMLERINDE BIR ISLEM YAPMAMISTIK CUNKU GET ISLEMLERINDE GENELLIKKLE CLIENTTAN DATA GONDERILMEZ...YANI VERITABANINA VS KAYDETMEK ICINVS DATA GONDERILMEZ.


export const POST = async ({ request }) => {
	const body = await request.json();
	console.log("body: ", body)


	const authHeader = request.headers.get("Authorization")
	console.log("authHeader: ", authHeader)
	//Ayrica da kullanici  yetkisini sorgulayabiliiriz
	if(authHeader !== "Myauthheader"){
		return new Response(JSON.stringify({message:"Invalid credentials"}), {status:401})
	}


	// Process the request body
	
	const responseBody = { message: 'Success' };
	const responseHeaders = { 'Content-Type': 'application/json' };
	const responseStatus = 200;

	return new Response(
		JSON.stringify({message:"Success", data:body}),
		{status:201}
	)
 
	
 };

 /*
ERROR-SOLUTION- 1

 A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.ts(2355)
function({}: import('./$types.js').RequestEvent): Response | Promise<Response>
 Boyle bir hata aliyoruz bu hata nin sebebi bizim POST requestimzde veya GET endpontimzden return etmemizi bekliyor..yani bir reponse dondurmemizi bekliyor GET-POST islemleri biz return i kullanana kadar hata yi gosterecektir...


 ERROR-SOLUTION-2

 {
    "username": "Adem54",
    "email": "adem5434e@gmail.com",
    "password": "123456"
}  http://localhost:5173/api/posts- 
Invalid request body- Status:400 Bad Request in postman

SOLUTION:BIZ POST REQUEST ILE GONDERMEMIZ GEREKEN ISTEGI GET REUEST ILE GONDERMEYE CALISTIGMZ ICIN POSTMAN UZERINDEN, HATA ALIUYORUZ....YANI GET REQUEST TE BODY YE DATA GIRILMEZ VE BODY DEN DATA GONDERILMEZ

ERROR-SOLUTION-3

http://localhost:5173/posts 500 (Internal Server Error)
Svelte den yani on yuzde islem yaptiktan sonra on  yuzdeki sayfa icerisinden istek burdaki get request yapildinda yani get-endpointine istek gonderildiginde yani get posts endpointne istek gonderildiginde hata aliyorduk ama postmanden biz bu enpointtimizi test ettik herhangi bir hata miz yoktu sonradan hata mizin onyuzdeki datayi cekerken....olmaayn bir proeprty yi cagiridimgz icin data undefined doniyor ve hata veriyor onu farkettik

export const load = ({fetch})=>
{
	const fetchPosts = async() =>
	{
	
		const res = await fetch('/api/posts')
		const data = await res.json();
		//Bize http://localhost:5173/api/posts  bu bir obje icerisinde posts isminde bir array gonderiyor dolayisi ile bizim direk array a ihtiyacimiz oldugu icin posts u return ederiz 
		Biz return data.posts diye gonderince http://localhost:5173/posts 500 (Internal Server Error) bu hatayi aldik sonra asagidaki gibi duzeltince hata duzelti ve datamiz gelmis oldu!!!!!
		return data.data.posts;

	}

	return {
		posts:fetchPosts()
		//burda en distaki export load buray return ediyor biz bu return edilen posts data sini +page.svelte icerisinde export let data; diyerek data degiskenine atayarak almis oluyrouz...  
		
	}
}

 */