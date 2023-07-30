import { getTodos } from '$lib/db/server';
import type { PageServerLoad } from './$types';

export const load:PageServerLoad = (async () => {
    //Burda datamizi alip sayfamizda gostermek icin data mizi hazirlariz
    //Burda biz uzak data dan, yani  endpointten fetch-axios ile bir endpoint e get-request veya post request gondereek data nin responsunu alip da .svelte sayfamiza gondererek orda geln datayi sunabiliriz, yani clienta gostercetgimz data yi burda hazirlayip +page.svelte e gondermek icin kullanilan, yardimci client-sayfasidir...DIKKAT EDELIM..BURASI SERVER SAYFASI DEGILDIR...+PAGE.SERVER.TS Y ANI SERVER DAN PAGE E DATA YI ALAN SAYFADIR...AMA +SERVER.TS DIREK ZATEN SERVER SAYFASIDIR!! YANI ENDPOINTLERIN OLDUGU, VE REQUEST LERI ALARAK, RESPOINSE GONDERILEN SAYFADIR!!!!
    const todos = getTodos();
    //Bu getTodos mantigida zaten gidip server dan datayi aliyor burda..mantiginda ayarlaniyor...data serverndan gelecek biz, fetch-request vs ile alacagiz..
    return {todos};
}) //satisfies PageServerLoad;  bunu simdlik yoruma alalim...bizim form islemiimmzde bize cok faydasi olmayacak

//Burda data olacak +page.svelte projesinde gostereceimz data olacak

/*

COOOK ONEMLI--ALIAS--PATH
For example, in your code snippet, the import statement import { getTodos } from '$lib/db/server'; is importing the getTodos function from a module located in the lib/db/server directory. The $lib part indicates that it's a library or shared module within the project.
import { getTodos } from '$lib/db/server'; short-cut without worrying the path,
import { getTodos } from '../../lib/db/server'; relative path

Her iki si de dogrudur $lib/db/server bunu kullandiginda yeri neresi olursa olsun onu tanyacaktir..farki budur, bu bize Svelte tarafindan sunulan bir imkandir

*/