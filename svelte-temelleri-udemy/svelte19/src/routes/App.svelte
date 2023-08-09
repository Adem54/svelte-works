<script lang="ts">
	import Keypad from './Keypad.svelte';

	let pin:any;
	/*
	Reactive statement..dikkat edelim..pin deki degisiklik Keypad componentine gondergimz value yi 
	bind ettigmiz icin, pin de artik value nin, Keypad icinde ugradgi guncellemeleri aliyor 
	Biz de reactive-statmeent ile de her bir, value deki degisikligin pin e yansimasini view a 
	reactive statement sayesinde alabiliyoruz..
	REACTIVE-STATMENT HARIKA BIR BESTPRACTISE VE COK CIDDI KRITIK ADVANCE ISLEMLERDDE BIZE MUHTESEM 
	EFFEKTIFLIK SAGLIYOR!!!!!COK IYI ANLAMALIYZ
	*/
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}
</script>

<!--
	SVELTTE BESTPRACTISE--DIREK STYLE I DINAMIK OLARAK DEGISTIRMEK
-->
<h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>

<!--Burda gonderilen value props u bind  edildigi icin, Keypad compoentindeki evnt ler icerisindeki 
ugradigi degisikligi, biz burdaki pin degiskenimze aktarildigini gorebiliyoruz!!!!!ISTE BU COMPONENT BINDING!!!

on:submit={handleSubmit} AYRICA DA CUSTOM SUBMIT EVENTI BURAYA GONDERILIYOR.ALTCOMPONENTTEN VE 
BIR UST COMPONENTTE DE DINLENMESI SAGLANIYOR!!!!
-->
<Keypad bind:value={pin} on:submit={handleSubmit} />