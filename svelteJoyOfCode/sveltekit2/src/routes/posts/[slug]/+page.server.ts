
import { error } from "@sveltejs/kit";
// import type  { PageLoad } from "./$types";bunu +page.ts de kullaniriz ama 
import type  { PageServerLoad } from "./$types";//+page.server.ts de ise bu type kullanilir
export const load:PageServerLoad= async ({params, fetch})=>
{
	const id= params.slug;
	const res = await  fetch(`/api/posts/${id}`);
	const post = await res.json();
	//Burasi error-handling ve bu expected error!!!dur cunku hata gelme ihtimalini bilip onu yonetmeye calisiyoruz
	//Sveltekitten gelen bir error objesi vardir onu kullaniriz..BUDA HARIKA BIRSEY SVELTEKIT IN 
	//kendisinde error olmasi
	//Eger post bulunamazsa burda hata firlatacagiz...harika error-handling
	if(!post){
		throw error(404, "POst not found")
	}

	return {
		post
	}
}
//Simdi eger biz, ornegin client-side tarafinda olan, posts/[slug]/+page.ts icinde ornegin
// ORM-olan prizma, yi calistirmak istersek, yani, sadece server tarafinda calisabilen bir kutuphane vs 
//yi calistirmak istedigimzde  posts/[slug]/+page.ts icerisinde sorun yasiyoruz..ve 
//Su sekilde bir hata aliyoruz....Error:PrismaClient is unable to run in the browser..... 
//Iste bu problemi cozmek icin simdi 1 adim daha atarak, artik biz, +page.svelte yaninda 
//+page.ts degil, onun yerine +page.server.ts kullanacagiz....ISTE NEDEN BIZ +PAGE.TS KULLANDIK 
//BUNU ZATEN ANLAMISTIK , SIMDI DE NEDEN +PAGE.TS YERINE +PAGE.SERVER.TS KULLANIYORUZ ONU DA
//IYICE MANTIGMIZA OTURTMALIYZ!!!!

/*
Peki ne zaman +page.server.ts kullaniriz ne zaman +page.ts kullancagiz. 
Genel olarak, http request gonderebilecegimz API-endpointleri olusturacagmiz zaman
+page.server.ts kullaniriz, ama eger sadece, sayfa da datayi dusundugumuz zaman, 
yani, +page.ts kullaniriz.
*/