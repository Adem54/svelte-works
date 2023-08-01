
<script>
   import Inner from "./Inner.svelte";

</script>
<div>
	<h1>Outer</h1>
	<!-- sadece bu islemi yapmamiz aslinda forward islemini yapmamiz demektir, Outer componeti icinde sadece bu nu yapariz bundan sonra +page.svelte icerisine gecip orda olusan eventi yakalayacagiz!!!  on:hello yaparak forward yaptigmizdan dolayi, biz +page.svelte icerisinde <Outer on:hello /> on dedigmiz zaman hello eventini alabiliyoruz!!-->
	<Inner on:hello/>
</div>