

<script lang="ts">
/*
Custom componennte biz bu islemleri yapiyoruz peki, dom eventlerini nasil forward ederiz ust componentlere 
	ona bakalim
Dom-click-eventini de biz forward ederek, component uzerinden on:click yapabiliyoruz
	<Button {title}  on:click={handleBtn}/>
	Bu cok harika bir olay, yani biz, Button componenti icerisinde on:click methodu nu calistirabiliyoruz,
	nasil yapabiliyoruz bunu, bunu biz Button comp icindeki button elemnti icinde on:click forward ederek 
	comonenti icinde bir ust componentte de kullanilabilmesini sagliyoruz!! 
	<button on:click>{title}</button>	
*/
export let title:string="";
</script>
<button on:click>{title}</button>