
<script lang="ts">
   import Todo from "./Todo.svelte";

	/*
	ALT COMPONENTTE GONDERILEN PROPS ALT COMPONENTTE UPDATE EDILINCE UST COMPONENTTE OTOMATIK OLARAK 
	GUNCELLENMIYORDU ONDAN DOLAYI DA DEVREYE CUSTOM EVENTLERIMZ GIRMISTI(YA DA REACTTAKI GIBI FUNCTION I PROPS 
	OLRAK GONDERIYORDUK!!!!!)
	Componente prop olarak gectgimiz bir elementi component icersinde guncelledigmizde 
	bunun ust tarafta da guncellenmesini bekleriz ama bu islem otomatik olmadigi icn 
	zaten biz custom eventlerden faydalanarak yapilan degisikligi de alt componentten
	ust componentte yine custom event in yanindan gondererek, alt componentte gerceklesen eventin ayni sekilde 
	ust compnentte de dinlenebilmesini saglayip, alt componentte yapilan degisikligide alarak ayni 
	degisikligi ustteki compnent icinde de gonderilen custom eventi icinde yaparak alt componentin 
	propsjunda yapilan degisikligi oraya tasiyorduk!!!!!!!
	Iste COMPONENT-BINDING ILE BIZ PROPSUN GONDERILDIGI COMPNENTTE O GONDERILEN PROPS ILE ILGILI 
	DEGISIKLIK OLDUGUNDA BUNU PROPSUN GELDIGI COMPONENT ICINDEKI DATA NIN DA HABERDAR OLUP O DATA NIN 
	DA GUNCELLNEMEISNI SAGLAYABILYORUZ YANI ...  
	<Todo bind:todo={todo}/>
	bu sekilde Todo icinde gonderdigmz todo yu bind ederek gonderince 
	artik Todo icinde checkbox da bir degisiklik oldugunda, bu componentteki todos icerisinde de bu degisiklik 
	alinmis oluyor...YANI RESMEN OHAAAA DIYORUM CUNKU CUSTOM EVENTLERLE O KADAR KOD YAZARAK, ANLAMAYA  
	CALISARAK YAPTGIMZ ISLEMI ADAMLAR COK KISA BIR ISLEMLE COZMUSLER!!!!!!!!!!!
	*/
	let todos:any = [
		{id:1, title:"Todo1", done:false},
		{id:2, title:"Todo2", done:false},
		{id:3, title:"Todo3", done:false},
	]; 

	$:{
		console.log("todos: ", todos);
	}

</script>

{#each todos as todo,index(todo.id) }
	<Todo bind:todo={todo}/>
{/each}