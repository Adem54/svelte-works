

//routes/api/posts altina new file deyip [postId]/+server.ts yaaprsak bu postId isminde bir klasor olusturp onun altina da +server.ts yi olusturuyor
//Burasini POSTDEATIL endpoint i icin olusturyoruz..kullanicinin tikladigi postun detayini return edecegiz kullanicindan da tikladigii post un id sini alacagiz

//GET-REQUEST - http://localhost:5173/api/posts/18
//http://localhost:5173/api/posts/ burda posts/ slahs ten sonra gelen hersey params olarak gelecektir
//Dikkat edelim id bir query olarak gonderilmiyor ki query olarak da ayrica gonderttirebiliriz ama burda query oalrak degil params olarak gonderilerek post detayi na da ayrica request gonderilebilecek bir endpoint hazirlamis oluyoruz..

//Simdi burda dikkat edelimmm  http://localhost:5173/api/posts/18 bu endpoint url de girildiginde bu endpointe istek gonderildiginde gelip o istek bu sayfayi bulabiliyor, hic http://localhost:5173/api/posts bunla karistirmadan direk burayi bulabiliyor bunun sebebi benim tahminim, bu sayfa konumdan bulunuyor burasinin konumu routes/api/posts/[postId]/server.ts burdan ayrit ediyor anladimg kadar i ile ondan dolayi dosya konumlarini dogru yerlestirmek cok hayati onem tasiyor
//Dikkat edersek { postId: '18' } bu sekilde gelior parametredeki params yani postId property ismini demekki bizim [postId] klsor isminde aliyor
export const GET = async({params})=>{
	console.log("params: ", params);//params:  { postId: '18' }

	const res = await fetch(`https://dummyjson.com/posts/${params.postId}`)
	const data = await res.json()

	//Artik http://localhost:5173/api/posts/18  18 numarali id ye ait datayi getiriyor
	return new Response(JSON.stringify({data}),{status:200})
}

//DEMEKKI BIZ BU MANTIGIN AYNISINI GIDIP API DISINDA NORMAL CLIENTTAN BU DATAYI CEKBILIRIZ DEMEKTIR...AYNISINI API DISINDA DA BU DATAYI ALABILMEK ICIN YAPALIM. AYNI MANTIKTA [postId]/page.js ve [postId]/page.svelte  bunlari da gidip api disindaki post klasoru altinda olusturarak client tarafindan bu post id endpointine istek-request gondererek postId nin detayu datalarin ordan cekebiliriz...fetch edebiliriz