
<script>
	//Event modifiers
	/*Bir eventin sadece 1 kez calismasini istedgmiz durumlarda kullanabiliriz
	Ya da <div><button></button></div> buton icerisine ve div icerisine onclick atadik, 
	ve buton da ki onclick calistiginda div deki calismasin istiyoruz,
	 bunun adi Event-bubling normalde jscript iceisinde
	 Normalde javascript icerisinde biz bunu event.stopPropagation() ile onluyorduk
	 Bu konunun adi event-bubling dir normalde 
	 1-<!--Bu sekilde onclick-eventini 1 kez calisitirilmasini saglariz-->
	 2-<form action="" on:submit|preventDefault={handleSubmit}> bu sekilde sayfanin yenilenmesini engellemis oluruz
	 3- <div role="button" on:keydown={handleClickDiv} tabindex="0" on:click={handleClickDiv}>
			<button on:click|once|stopPropagation={handleClick}>Click</button>
		</div>
		stopPropagation ile buttona basinca onun parent i olan div de de var olan click eventini engelliyoruz
		ve boylece sadece buton a ait event-click in calismasini sagliyoruz

		<button on:click|once|stopPropagation={handleClick}>Click</button> Buraya dikkat edecek olursak eger, 
		once ile burasi, 
		1 kez calistirilip sonra kaldirilyor, ama stoppropagation oldugu icin, ilk basista sadece button 
		event i calisirken sonra tiklamaya devam edince, ise div click-event i tetikleniyor, 
		cunku biz stoppropagation kullandik ama,
		o btn-click eventi icinde, once dan dolayi 1. tiklanmadan sonra kaldirildigi icin,
		 div-click eventini calistiriyor
		
	4- Sadece elemanin kendisi ise event islemini calistiracak!!!!	
		<button on:click|self={handleClick2}>
				MYCLICKBUTTON2	<span>ClickBtn2</span>
		</button>
		Biz self kullandigmiz icin, eger button uzerinde simdi hem MYCLICKBUTTON2 var 
		hem de ClickBtn2 burasi var, ve biz 
	direk butonun kendi icerisindeki icerigi olan MYCLICKBUTTON2 bastigimz zaman, 
	buton tetikleniyor, yok biz 	
	<span>ClickBtn2</span> bu icerige tiklarsak, o zaman buton tetiklenmiyuor cunku biz  
	<button on:click|self={handleClick2}> self kullandigmz icin bu button un
	 kendi icerigine tiiklrsak tetikle demektir

	5-	<button on:click|self|trusted={handleClick2}> trusted ile de ornegin biz bu butona tiklanmayi sadede kullanici
		yapabilsin istersek, yani normalde biz dom a manipule ederken 2 sekilde yaptirabiliyoruz 1.si direk kulanicya 
		yaptirirz, 2.si de console.log uzerinden gidip DEv-tools da document.querySelector("#btn2").click() bu sekilde
		yaparak click-butonunun tetikleyebiliyoruz..iste trust u kullanirsak o zaman sadece kullanici tiklama ile
		event-click i tetikleyebilir!!!
		Sadece kullanicinin kendisi buna bassin dedgimz zaman kullaniriz
	*/

	const  handleClick = ()=>
	{
		console.log("Clicked to BTN");
	}

	const  handleClick2 = ()=>
	{
		console.log("Clicked to BTN2");
	}

	const handleSubmit = ()=>{
		console.log("e")
	}

	const handleClickDiv = ()=>{
		console.log("Clicked to Div");
	}
</script>

<h1>Welcome to SvelteKit</h1>

<div role="button" on:keydown={handleClickDiv} tabindex="0" on:click={handleClickDiv}>
	<button on:click|once|stopPropagation={handleClick}>
		<span>ClickBtn</span>
	</button>
	<button id="btn2" on:click|self|trusted={handleClick2}>
			MYCLICKBUTTON2	<span>ClickBtn2</span>
	</button>
</div>
<br><br>
<hr>
<!--Bu sekilde onclick-eventini 1 kez calisitirilmasini saglariz-->
<form action="" on:submit|preventDefault={handleSubmit}>
	<label for="name">Name:</label>
	<input type="text">
	<button type="submit">Submit</button>
</form>
