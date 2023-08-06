

<script>
	//Promise lerle calisirken de svelte bize bir kolaylik sagliyor ve bize await blogu veriyor, bu da html de promise leri daha kolay yonetebilmemizi sagliyor
	//Asenkron islem yaptgimz zaman bize Promise donuyor..
	//fetch-axios ile bir api-service ye istek gonderrdigmzde bunlar bize promise donuyorlar dolayisi ile de promise resolve olursa than blogu, reject olursa catch blogu calisiyor!!

   import AwaitBlock from "./AwaitBlock.svelte";
   import Pokemon from "./Pokemon.svelte";

</script>

<AwaitBlock/>
<hr>
<Pokemon/>


