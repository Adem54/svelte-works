<script lang="ts">
export let value:any;

let input:any;
/*Burda biz focus isminde bir methodu export ediyoruz...yani disa aktariyoruz, bu componentten ve bu sayede de 
<Input bind:value={val}  bind:this={inputField}/>
<button  on:click={()=>inputField.focusInputField()}>Focus Input</button>
componentimizin referansini aldigmiz degisken de biz focus methodunu calistirabilmis oluyoruz!!!!
*/
$:if(input)
{
	console.log("input: ", input);
}
//Bu inputtan olusturulan componentte kullanabilmek icin mutlaka export ile disa aktarmamiz gerekir

/*
Burdaki inputtan olusturulmus, component tarafindan focusInputField fonksiyonunun kullanilabilmesi icin 
oncelikle export edilmesi gerekiyor..
<Input bind:value={val}  bind:this={inputField}/>
<button  on:click={()=>inputField.focusInputField()}>Focus Input</button>
*/
export function focusInputField()
{
	input.focus();
}
/*
BURDA DA INPUT TAG DAN BIR UST COMPONENTE INPUTUN REFERANSINI DIREK GONDERDIK EXPORT ETTIGIMIZ 
BIR FONKSIYON ARACILIGI ILE...YANI BIR UST COOMPONENTE DIREK BURDAKI INPUTUN REFERANSINI  
GONDEREBILIORUZ BU SEKILDE...
*/
export function getInput()
{
	return input;
}


</script>

<input type="text" bind:value={value} bind:this={input}>

