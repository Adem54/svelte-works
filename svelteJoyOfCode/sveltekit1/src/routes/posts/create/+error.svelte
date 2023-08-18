<script lang="ts">
	import { page } from "$app/stores";
	//Bu page bilgisi hazir olarak , svelte icerisinden geliyor ve direk bu sekilde 
	//import edebiliyoruz
</script>

<h1>Yikes💥!</h1>

<h1>{$page.error?.message}</h1>
<p>Something went horribly wrong but the blast radius has been contained to this route</p>
<!--
Yani her sayfanin kendine ozel, error sayfasi olusturabiliyoruz...BU BIR UNEXPECTED ERROR ICIN HAZIRLANAN ERROR DUR
BU BIZIM KESTIREMEDGIMZ BEKLEMEDIGMZ HATALAR ICINDIR!!!!!
	Bestpractise:Biz bu sayede bu sayfamizda ortaya cikabilecek herhangi bir hata nin sadece bu sayfa  
ile sinirli kalmasini saglayabiliyoruz!!Ve bu sayede, diger tum sayfalarin down olmasini engellemis oluyoruz 
Bu ozellikte harika bir ozellik
-->
<pre>
	{JSON.stringify($page, null,2)}
</pre>
<!--
	Dikkat edelim.. $page bilgisi import { page } from "$app/stores"; bu sekilde import ederek kullanbiliyorz
	ve tamamen hazir olarak svelte icinden geliyor....
	{
  "error": {
    "message": "Internal Error"
  },
  "params": {},
  "route": {
    "id": "/posts/create"
  },
  "status": 500,
  "url": "http://localhost:5173/posts/create",
  "form": null,
  "data": {}
}

	{
  "error": {
    "message": "YIkes 🚨"
  },
  "params": {},
  "route": {
    "id": "/posts/create"
  },
  "status": 404,
  "url": "http://localhost:5173/posts/create",
  "form": null,
  "data": {}
}
-->