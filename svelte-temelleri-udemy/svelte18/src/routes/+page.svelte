
<script lang="ts">
	import {marked} from "marked";
   import SelectOpt from "./SelectOpt.svelte";
	/*Bindin islemi ile, her bir karakter kullanici tarafindan guncellendigi anda 
	biiz o degisikligi alabiliyoruz..Yani ayni reacttaki onchange methodu icinde 
	bu islemi yapmak gibi..Ama reacttaki gibi hic method icinde useState te tanim 
	ladgimz degiskeni update etmekle ugrasmamiza gerek kalmiyor!!
	*/
	let name = "";
	let number1=2;
	let number2=5;

	
	let checkedValues = [
		{id:1, title:"todo1", checked:false},
		{id:2, title:"todo2", checked:false},
		{id:3, title:"todo3", checked:false},
	];
	let myTodos:any=[]

	let isAccepted=false;

const handleClick = (e:any)=>{
	console.log("event: ", e);
}

$:myValues=checkedValues;
$:{
	console.log("checkedValues: ", checkedValues);
}

let text = "";
let value="";
</script>

<SelectOpt/>
<hr>
<input type="text"  bind:value={name}>
<h2>{name}</h2>
<br>
<input type="number"  bind:value={number1}>
<h2>{number1 | 0}</h2>
<!--kullanici number i sildiginde null gelmesin diye.. onun yerine 0 gelsin diye yaptigmi bir islemdir-->
<br>
<input type="number"  bind:value={number2}>
<h2>{number2 ?? 0}</h2>
<br>

<label for="">I am accepting the rules!</label>
<input type="checkbox" bind:checked={isAccepted}>
<button disabled={!isAccepted}  on:click={handleClick}>Send</button>
<br>

{#each checkedValues  as item,index(item.id) }
	<label for={`${item.title}${item.id}`}>{item.title}</label>
	<input type="checkbox" bind:checked={item.checked} >
{/each}
<br>
{#each checkedValues as item,index(item.id) }
	<h4>{item.checked ? item.title : ""}</h4>
{/each}
{#each myValues as item,index(item.id) }
	<h4>{item.checked ? item.title : ""}</h4>
{/each}
<!--
	Eger checked olan value leri bir dizi icerisine atmak istersek , asagidaki gibi kullaniriz.
	Yani bind:group kullanarak eger checked olan data ya ait text i bir dizi icinde toplamak istersek o zaman 
	input-checkbox da value yi kullanmamiz gerekir ve value olarak hangi text i dizi icine atacaksak onu kullanmalyiz
	ve de bind:group={myTodos} hangi dizi icine atacaksak ona baglariz
	checkbox-bind-group kullanimi 
-->
<h1>Todos</h1>
{#each checkedValues as item,index(item.id)}
<label for="test">{item.title}</label>
	<input type="checkbox" name="todo" value={item.title} bind:group={myTodos}>
{/each}
<br>
<h2>My Todos</h2>
{#each myTodos as todo (todo)}
	<li>{todo}</li>
{:else}
	<h2>There are no selected todos!!</h2>
{/each}

<br>
<textarea  cols="30" rows="10" bind:value={text}></textarea>
<p>{text}</p>
<textarea  cols="30" rows="10" bind:value></textarea>
<p>{marked(value)}</p>
<!-- 
	Markdown yazim formatinda da textarea lari yapabiliyoruz, bunlar bu sekilde cok kullaniliyor
	npm install marked   markdown y azim formati ile y azabilyoruz yani direk yazarasak p etiketi ile birlikte gosterir
	basina @html yazarak  yazarsak direk html olarak yazar yani normal p etiketi icerigini gosterir <p>{@html marked(value)}</p>
# test  diyerek title formatinda yazabiliriz 
[prototurk.com](https://prototurk.com) link yazarken bu sekilde  yaziliyordu
## alt2
### alt3
>test
asagidaki  araya direk kod yazabilyoruz 
```
<?php echo "Hello world!"; ?>
```
-->
