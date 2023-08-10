

<script lang="ts">
   import Input from "./Input.svelte";
   import Input2 from "./Input2.svelte";
   import MedieElementsBind from "./MedieElementsBind.svelte";
	let val="Adem";
	let inputField:any; 
	$:{
		console.log("myVAl: ",val);
	}

	$:if(inputField){
		console.log(inputField);
	}
/*Component binding yaptigimz icin Input alt componentine gonderdgimz value prop u orda 
guncellendigidne burda da guncellenyor cunku component-binding yaptik... <Input bind:value={val}/>

BINDING TO COMPONENT INSTANCES!!!!!!!!!!!YANI BURDA CHILD COMPONENTTEKI INPUT HTML TAG
INDA EXPORT EDEREK OLUSTURMUS OLDUGUMUZ BIR focusInputField FONKSIYONUNU 
, INPUT COMPONENTINE BAGLIYORUZ, VE DE INPUT TAG INDA YAPTGIMZ focusInputField  
FONKSIYONUNU EXPORT EDEREK, DIREK INPUT COMPONENTINE DE AKTARMIS OLUYORUZ... INHERITANCE... 
YANI INPUT HTML TAG INDAN TURETILMIS BIR COMPONENTE O INPUT TAGINDAN TURETTIGIMZ  focusInputField
input html tag indan olusturulmus INPUT componentine de aktarmis olyoruz tabiri caiz ise 
input-htmltagi baseclass, INPUT componenti de bu base class tan turetilmis bir, instance..veya onu inherit etmis  
bir component gibi..
Burda cok onemli bir nokta... biz alt componentte input ta yaptgimiz focus eventini 
bind:this uzerinden direk bir ust componentte de yapabiliyoruz ve herhangi bir props alis verisi 
yapmadan bu isi yapiyoruz..asagidaki props input value icindir ama focus olayi ile ilgili biz 
herhangi bir props gondermiyoruz...
*/
let input_field:any;
const handleFocus = (event:Event)=>{
	console.log("event: ", event);
	inputField.focusInputField();
	//getInput 
	let inputTag = inputField.getInput();
	console.log("inputTag::",inputTag);
	
}

const handleFocus2 = (event:Event)=>{
	// console.log("event: ", event);
	// inputField.focusInputField();
	// //getInput 
	// let inputTag = inputField.getInput();
	// console.log("inputTag::",inputTag);
	input_field.focus()
}

$:if(input_field)
{
	console.log("input_field:::::::::::",input_field);
}
</script>


<Input bind:value={val}  bind:this={inputField} />
<Input2 bind:value={val}   bind:myInput={input_field}/>

<button  on:click={()=>inputField.focusInputField()}>Focus Input</button>
<button  on:click={(e)=>handleFocus(e)}>Focus Input</button>
<button  on:click={(e)=>handleFocus2(e)}>Focus Input2</button>

<hr>

<MedieElementsBind/>