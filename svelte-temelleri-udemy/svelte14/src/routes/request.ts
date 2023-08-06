

/*Herzaman json data gondermek istemeyebiliriz bazen, formData da gondermek 
isteyebiliriz onun icinde bir fonksiyon yazacak olursak 
Biz datayi json olarak degil de formData olarak gondermek isteyede biliriz,
 ondan dolayi... da bu sekilde json gondermek istemezsek bir alternatif olusturmus oluruz!!!
*/
function parseData(data:any)
{
	//FormData apisini kullanmayi ogrenmeliyiz, cok ileri seviye harika kullanim sunuyor bize..
	let formData = new FormData();
	for (const key of Object.keys(data)) 
	{
		/*data dan gelen key sleri alabiliriz, yani gelen data obje olacagi icin, 
		yani form icindeki data lar name ler key, name lere karsilik kullanicinin girdigi 
		valu e lerde key lerin value leri olacaktir, ve bu su demek,
		 addPost({userId:1,title:"deneme", body:"test"}), burdki userId,title, body yi aliyoruz..demektir..bu
		*/
		formData.append(key, data[key]);
		/*append ile once name leri ekleyecegiz form icindeki name ler, 
		gonderilen value datalarinin key leri oluyordu eger biz formu direk gonderirsek,
		 php de oldugu gibi.....yok preventedefaul yapar, ve action="" yaparsak o zaman da 
		 iste submit methodu icinde {userId:1,title:"deneme", body:"test"}bu seiklde 
		 ne hazirladi isek, burdaki key-yani propertieslerdir ve gelen data[key] 
		 de zaten onun value sine karsilik geliyordu
		*/
	}
	return formData;
}
	/*
	Ve bu sayede de , biz JSON.stringify yerine, 
	datamizin formdata olarak da gonderebilmis oluyoruz...DIKKAT EDELIMM..
	*/
interface optionsType 
{
	method:string;
	body?:any;
}

/*
data post methodunda gonderilecek data, diyoruz, amna her zaman post
 methodunda data gondermeyebiliriz onun icin false ise data gonderilmeyen 
 bir post methodu diye algiliyoruz, biz bazen methodumuz post olur ve 
 sadece token gonderirirz, ama islemizmiz aslinda uzak api-endpointinden 
 protected bir data  yi cekkip ekrana basmaktir, yani herhangi bir crate,update, delete yapmasak bile...
*/
function request(url:string, method="POST", data:any=false):Promise<any>
{
	return new Promise((resolve:any,reject:any)=>{
		//Bu options fetch in 2.parametresinde gonderilen data vs icin kullanilan bir objedir
		const options:optionsType = {
			method,
			
		}
		/*Bu body default olarak burda olmamali, cunku, eger direk data cekilecekse o zaman hata alabiliriz,
		 ve biz body yi optional yapmak istiyoruz ve typescriptin hata vermemsini istiyorsak o zaman da 
		 optionsType isminde bir type uretirirz ki hata almayalim
		*/
		
		if(data){
		//	options.body = JSON.stringify(data);
			options.body = parseData(data);
		}
		fetch(url,options)
		.then(response=>{
			/* console.log("RES-JSON-POST: ", response.json())//Burda console.log ile response.json 
			i yazdiralim deyip sonra da gidip, asagida return edersek o zaman response.json() 2 kez okudgumuz icin ,
			 2.sinde zaten json ile okudun niye bir dha okuyon hatasi verecektir
			*/
			/*
			Get fetching is failed! TypeError: Failed to execute 'json' on 'Response': 
			body stream already read  <script lang="ts">
			*/
			return response.json()
		})
		.then(res=>{
			console.log("resolve(res): ", res)
			return resolve(res);
		})
		.catch(error=>reject(error))
	})
}

/*
Requestimizi neden tek yerdden yonetiyoruz cunku yarin oburgun hata durumunu
 yonetirken ornegn Toaster library i kullanmak istedik, ve o zaman ornegin 
 eger biz 10 yerde request leri kullaniyorsak, gidip de tum kullandigmiz 
 yerlerde reject yaptigmiz yerlerde toaster i kullanmak zorunda kalacagiz,
  ama, eger boyle requst leri tek  yerden yonetirsek o zaman oyle birseyey
   gerek kalmaz biz bir kere de bu islemi cozebiliriz!!!!
*/

/*
Hem yukarda hem de burda fonksiyonlari Promise<any> type olarak dondurmemiz coook onemli
 yoksa, biz bu fonksionlari kullanip bu fonksiyonlardan gelecek data yi each ile yazidrmaya
  calisitimgzdan dolayi , ve bu fonksiyonlara return type vermeyince onu typescript unknown
   olarak algilayip bu seferde diyorki sen unknown bir type da datayi listeleyemezzsin 
	hatasi veriyor,bu nu anlamak cook onemlidir
*/
export const post = (url:string,data:any=false):any=>request(url,"POST",data);
export const get = (url:string,data:any=false):Promise<any>=>{
	return request(url,"GET",data);
}
export default request;