
<script>
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();
	//bu dispatcher yardimi ile bir uste componente istedgimz dinamik bir daatayi gonderebiliyoruz!!!

	const handleDark = ()=>{
		//dispathc ile event olusturup bunu bir ust componente gonderecegiz
		//olusturmak istedigmz event i dispatch parametresine tirnak icerisinde yazarz, ayni zamanda ayrica event yaninda da, {} icerisinde data gondermek istersek ust componente onu da 2.parametre oalrak dispatche veririz, {newMode:"dark"} dark a tikladigmiz icin dark gonderiyoruz burda da 
		dispatch("mode", {newMode:"dark"})
		//mode eventi ile {newMode:"dark"} datasini bir uste componente gondeririz
		//Simdi biz bunu yaparak aslinda custom bir evnt olusturmus olduk Header componenti icin, bunu Header componentini kullandigmiz bir ust componentte +page.svelte icinde <Header/> attributune gidip on: deyince custom event olarak mode eventinin  geldigni gorebiilriz!!!

	}
	const handleLight=()=>{
		dispatch("mode", {newMode:"light"})
	}
</script>


<div>
	<h1>Header</h1>
	<button on:click={handleDark}>Dark Mode</button>
	<button on:click={handleLight}>Light Mode</button>
</div>