
<script lang="ts">

	let numbers:number[] = [1,2,3];

//COOK KRITIK BIR NOKTA MUTLAKA ANLASILMALI, SVELTE STATE DEGISIKLIKLERINDE = ASSIGN OPERATORU KULLANDIGMZ ZAMAN O DEGISIKLIGI FARKEDIYUOR YOKSA  DIREK NUMBERS.LENGTH +1 YAZARSAK YA DA COUNT++ YAZARSAK BUNU ANLAMIYOR AMA BOYLE YAPARSAK SVELTE IN ANLAMASI ICIN O ZAMAAN NUMBERS=NUMBERS; VEYA COUNT=COUNT; DA BIR ALT SATIR DA  YAZARSAK SVELTE BU SEKILDE TANIYACAKTIR YA DA HIC ONLARLA USGRASMADAN EN BASTAN NUMBERS.LENGTH+=1 VEYA COUNT+=1 YAPARAK DOGRUDAN SVELTE IN BU DEGISIKLIGI TANINMASI SAGLANMIS OLACAKTIR!!!!
	const handleAddNumber = () =>
	{
	//	numbers.push(numbers.length + 1);//Burda biz direk +1 ile state degistiriyoruz ama svelte de bu islemleri = kullanarak yapmamiz gerekiyor ama eger ki bu sekilde yaparsak yani direk +1 ile degistirirsek, arttirirsak o zaman da gidip numbers=numbers diyerek, referans degistikligi yapip svelte i haberdaer etmemiz gerekiyor
	//	numbers= numbers;
		//Biz numbers=numbers demedigimz zaman, numbers event icinde ekleniyor ama disarda svelte tarafindan taninamiyor, svelte bu degisikligi farkedemeiyor!!!bunu iyi anlayalim...ya da degisikliklerde = assign operatoru ile kullanirsak bu sekilde bir numbers=numbers esitlemesine de gerek kalmamis olacak!!!!!
		
		//2.YONTEM!!!!
		//numbers.push(numbers.length += 1);
		//Ya da su sekildde yapariz
		//console.log("numbersss||||||: ", numbers);

		//3.yontem bu da cok guzel bir yontem 
		//Yine dikkat edelim, assign operatoru kullanarak bir dgesiklik yaparak svelte in bu silemi tanimasini saglamis oluyoruz aslinda!!!!
		numbers = [...numbers, numbers.length+1]
	}

	$:{
		console.log("numbersssss: ", numbers.length);
	}

	$:totalNumber = numbers.reduce((acumulator,currentValue)=>acumulator + currentValue, 0)	
</script>

<button on:click={handleAddNumber}>Add Number</button>

<h2>numbers.length: {numbers.length}</h2>
<h2>TotalNumber: {totalNumber}</h2>