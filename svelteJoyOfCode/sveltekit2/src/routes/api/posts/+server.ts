import { json, type RequestHandler } from "@sveltejs/kit";

import { getPosts, getRandomData } from "$lib/DB";

export const GET:RequestHandler = async (event:any)=>{
	// console.log("event:", event);
	//request ile gondeilen her turlu data ya burda erisebiliriz
	//cookies-get-set-delete-serialize methodlari ile kullanabiliyoruz , clienttan gelen cookies leri 
	//fetch ile relative ve internal request ler yazabilirz serverdan baska,service lere
	//Ayrica da ek requestleri engelleyebilirz
	//params objesi var event icinde
	//request 
	//route
	//url-javascript url-methodlari ile istedigmiz bolumune erisebiliyoruz
	//setHeaders lari endpoint icin ve page-clientside icin set edebiliriz ve return olarak da setHeaders donuyor
	const data = await getPosts();
	//let data2 = await getRandomData();
	console.log("dataAAA: ",data);

	//Headerslarimzi spesifiklestirebiliyoruz event.setHeaders araciligi ile -BESTPRACTISE
	event.setHeaders({
		 'Cache-Control':'max-age=60'
		// 'Cache-Control':'max-ag=02'
		//'Cache-Control':'public, max-age=0, s-maxage=60'
	})//Burda biz cach-control ile 60 saniye boyunca ayni endpointe yapilan request lerde gidip datayi cache den almasini
	//saglamis oluyoruz..vE 60 SANIYEDE BIR DE CACHE I REFRESH EDIYOR. Biz random data getiren endpointten gelen datayi buraya 
	//cekip o datayi gondererek test ettik ve 1 dakika boyunca ne kdar request gonderirsek gonderelim ilk gonderdimgz request 
	//sonucunda buraya gonderilen data yi, cache den getiriryor 1 dakika boyunca, sonrasinda ise
	//mdn-http caching diyerek.Tabi buna production da guvenemyiz ondan da dolayi, S max age kullaniiz ve
	// cachelemeyi CDN uzerinden aliriz
	//Ilk ressponse yapan kullanici icin data nin gelmesi biraz zaman alir ama ondan sonra arka arkaya response 
	//gonderen diger kullanicilar icin data cache den gelecegi icin cok daha hizli gelecektir
	//Browserdda Network de Response Headers da Cache-Control:max-age=60 bu degeri gorebiliriz,
	//Yine ayni sekilde Response Header s da Status Code:200 OK (from disk cache) seklinde gorebilirz
	//Ayrica da network de posts isteklerine bakinca Size kisminda disk cache  parantez icinde gorebiliriz
	const body = JSON.stringify({data,success:true});
	const options:ResponseInit = {
		status:200,
		headers:{
			"Content-Type":"Application/JSON"
		}	
	}
	// return new Response(body,options);
	//sveltekit-helper methodu json ile direk gondermek istedgimz data yi gondeririz..BESTPRACTISE
	//ister new Response diyerek gondeririz istersek de bu sekilde gondeririz
	return json(data.posts);
}

//Eger svelte-kit exthentions i kullanirsak kit-endpoint yazip tab a basarsak o zaman bize, 
//bir get-request olusturuyor

//BESTPRACTISE!!!
//Sveltekit in bir ozelligi de $lib/database diyerek nerden olursa olsun lib altinda olusturdugmuz, 
//dosyaalari alabiliriz-place files you want to import through the `$lib` alias in this folder.

