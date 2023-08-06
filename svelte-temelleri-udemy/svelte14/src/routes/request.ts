
interface optionsType 
{
	method:string;
	body?:string;
}

//data post methodunda gonderilecek data, diyoruz, amna her zaman post methodunda data gondermeyebiliriz onun icin false ise data gonderilmeyen bir post methodu diye algiliyoruz, biz bazen methodumuz post olur ve sadece token gonderirirz, ama islemizmiz aslinda uzak api-endpointinden protected bir data  yi cekkip ekrana basmaktir, yani herhangi bir crate,update, delete yapmasak bile...
function request(url:string, method="POST", data:any=false):Promise<any>
{
	return new Promise((resolve:any,reject:any)=>{

		//Bu options fetch in 2.parametresinde gonderilen data vs icin kullanilan bir objedir
		const options:optionsType = {
			method,
			
		}
		//Bu body default olarak burda olmamali, cunku, eger direk data cekilecekse o zaman hata alabiliriz, ve biz body yi optional yapmak istiyoruz ve typescriptin hata vermemsini istiyorsak o zaman da optionsType isminde bir type uretirirz ki hata almayalim
		
		if(data){
			options.body = JSON.stringify(data);
		}
		fetch(url,options)
		.then(response=>{
			// console.log("RES-JSON-POST: ", response.json())//Burda console.log ile response.json i yazdiralim deyip sonra da gidip, asagida return edersek o zaman response.json() 2 kez okudgumuz icin , 2.sinde zaten json ile okudun niye bir dha okuyon hatasi verecektir
			//Get fetching is failed! TypeError: Failed to execute 'json' on 'Response': body stream already read  <script lang="ts">

			return response.json()
		})
		.then(res=>{
			console.log("resolve(res): ", res)
			return resolve(res);
		})
		.catch(error=>reject(error))
	})
}

//Hem yukarda hem de burda fonksiyonlari Promise<any> type olarak dondurmemiz coook onemli yoksa, biz bu fonksionlari kullanip bu fonksiyonlardan gelecek data yi each ile yazidrmaya calisitimgzdan dolayi , ve bu fonksiyonlara return type vermeyince onu typescript unknown olarak algilayip bu seferde diyorki sen unknown bir type da datayi listeleyemezzsin hatasi veriyor,bu nu anlamak cook onemlidir
export const post = (url:string,data:any=false):any=>request(url,"POST",data);
export const get = (url:string,data:any=false):Promise<any>=>{
	return request(url,"GET",data);
}
export default request;