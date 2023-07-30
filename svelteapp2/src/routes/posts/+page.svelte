
<script>


	//data yi biz +page.js den buraya alacagiz..props araciligi ile.. +page.js de de fetch islemi  yapacagiz
	//+ ile  yazdgimzda birbirlerini direk taniyorlar
//+ ile yazilan ve ayni klasor altinda olan sayfalar birbiri icinde sayfalar gibi dusunelim yani ayni sayfalar gibi dusunebiliriz sadece export ettgimz her bir variable i birbiri icinde direk olarak kullaniriz
	export let data;
	//Bu data prop olarak geliyor +page.js icerisinden...
	// Burasi +page.js sayfasindan  return {
	// 	posts:fetchPosts() burda en distaki export load buray return ediyor biz bu return edilen posts data sini +page.svelte icerisinde export let data; diyerek data degiskenine atayarak almis oluyrouz...  	}
		
		

</script>

<!--  
Front-end de  yani svelte.js de bu sekilde url imiz olacaktir ama backend-sveltekit de	http://localhost:5173/api/posts bu sekilde olacaktir bunlari karsitirmayalim.. user
Yani bu icinde bulundugmuz sayfanin url i http://localhost:5173/posts bu dur 
Ama istek gonderecegimz endpoint in url i ise http://localhost:5173/api/posts  budur yani bu endpoint i biz routes/api/posts/+Server.ts de yaziyoruz dikkat edelim
Ama http://localhost:5173/posts bunu routes/posts/+page.js ve +page.svelte icerisinde yaziyoruz
   -->

	<!--
		TIKLANAN POSTUN DETAY LARINA ERISME!!!!!!
		ASAGIDAKI GIBI BIZ POST LARIMIZI LISTELEYBILMIS OLDUK..VE SIMDI DE HER BIR POST UMUZA TIKLAYARAK O POSTA AIT DATA DETAYINI DA ALMAK ISTIYHORUZ  YANI  KULLANICI BIR POST A TIKLASIN VE POST UN TIKLADIGI POSTUN ID SINI GONDEREREK BIR GET-REQUEST DAHA YAPSIN VE BU SEFER DE O ID YI SUNUCUYA-SERVER A GONDEREREK SERVER DAN GONDERILEN ID LI POST UN DETAYINI RETURN EDEN GET-REQUEST ENDPOINT INI TETIKLESIN. VE RETURN OLARAK DA O ID SI GONDERILEN POST UN DETAYLARI ALINIP CLIENT A RETURN EDILSIN VE CLIENT EKRANINA BASILMIS OLSUN, TIKLANA POSTUN DETAY DATALARI   -->
<section>
	{#each data.posts as post }
		<h1>{post.title}</h1>
		<p>{post.body}</p>
	{/each}

<!--
"posts": [
{
"id": 1,
"title": "His mother had always taught him",
"body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
"userId": 9,
"tags": [
"history",
"american",
"crime"
],
"reactions": 2
},

-->
	
</section>

<style></style>