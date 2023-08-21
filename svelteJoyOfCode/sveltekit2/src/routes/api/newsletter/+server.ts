
//Burdaki fonksiyon, http-request methoda karsilik geliyor..sveltekit, +server.ts dosyasi gordugu anda 
//bunu, bir http methodu olarak algilayacaktir..unutmayalim...

import type { RequestHandler } from "@sveltejs/kit";

//api/newsletter GET-request method

//RequestHandler GET-type i sveltekit ten inbuild olarak gelir
export const GET:RequestHandler = async (event) =>
//event-default olarak gelen ve iceriginde request, ve url objesi barindirir 
{
	//Birde bu request methodlar hazirlanrken Response constructor ini new leyerek dondurulecek sekilde hazirlandigi iicn 
	//bizim new Response u return etmemiz gerekiyor bu methodularda, 

	const body =JSON.stringify({message:"successfull"});
	//Obje parametrelerini acinca ctrl-space e basarak, obje icine gelmesi gereken, optionslara bakarsak o zaman 
	//karsimza headers, ve status ve statustext  in geldigni gorebilirsiniz
	const options:ResponseInit = {
		status:418,//Biz burda status olarak ne verirsek, bu endpointe request gonderildiginde 
		//browser-da inspect-network te status da onu goruruz
		headers:{
			x:"headers-content from response"
		}
		//browser-da inspect-network te gonderilen istek olan newsletter in uzerine tiklarsak 
		//Response Headers kisminda x keyi ve onun value sini gorebilriz
	};
	return new Response(body, options );

}
//Bu get-methodu artik, http://localhost:5173/api/newsletter bu endpoint e karsilik geliyor yani bu endpoint 
//e gonderilen request istegini karsilayan method iste burdaki methoddur
//NOrmalde new Response zaten bir constructordir ve parametreye body ve options alir..
//body bir objedir ve cok farkli type larda dondurebiliriz null da dahil, Blob,ArrayBuffer,DataView,String,
//https://developer.mozilla.org/en-US/docs/Web/API/Response/Response

//api/newsletter POST-request method

//POST-REQUEST I ASAGIDAKI GIBI YAPABILIRIZ 
//1-Form da method=POST yapariz ve event.preventdefault ile, bir fetch islemi yapariz, cunku direk olarak 
//http://localhost:5173/api/newsletter boyle bir istek gonderildiginde url-den bu default olarak get 
//request olarak gelecektir, post request icin ozellikle, method=POST  diyerek fetch-axios-jquery-ajax 
//yontemleri ile istek gonderilmelidir, post-request te form dan data gonderilir, yani direk data listelenme
//islemi genellikle sadece get-request ile yapilir ama tabi bazi korumali-protected datalar icin authentication
//json-web-token olaylari processi gerceklesir bunlar post-request ile yapilir, sadece data listeleme olsa bile
//ama iste sonuc olarak  yine bir data gonderilir-token- ve post-method ile gerceklesir

export const POST:RequestHandler = async (event:any)=>
{
	console.log("event: ", event);
	//event:cookies,fetch,getClientAddress,locals,params,patlform,request,url,route,setHeaders alt objeler vardir 
	//Ve bu objeler araciligi ile gelen request ile ilgili her turlu detaya erisebiliriz 
	//url-araciligi ile de yine javascriptin url-methodlari ile url-icindeki her turlu dataya da erisebiliriz
	//Burasi post-request ve bize form-dan ddata gelecek artik burda
	const data = await event.request.formData();
	//formData nin nasil kullanildigini yine, mdn den ogrenebilirz 
	//Form dan gonderilen data nin name i ne ise o name uzerinden o alana girilen degeri asagidaki gibi alabilirz
	const email = data.get("email");
	console.log("email: ",email);

	//subscribe the user to the newsletter
	return new Response(
		JSON.stringify({email,success:true}),
		{
			headers:{
				"Content-Type":"application/json"
					}
		}
	)
}
