<script>
	//Dinamik class style islemleri
	//Bir web  uygulamasinda kullanicinin yaptigi islemlere gore o web sitesindeki elementlerin ozellikleri stilleri degisebilir
	//Bunlari genellikle belli ozelliklere sahip classlar  olustururuz ve bu classlari dinamik bir sekilde elementlere baglariz
	//Svelte in bu konuda bize sagladigi kolayliklar var onu gorecegiz

	//Biz istiyoruz ki kullanici fruitList e tiklayinca FruitList span inin alti orange renki border bottom style ini alsin yani alti cizili olsun, kullanici vegetable list e tiklarsa o da vegetable list span inin alti cizili olsun, ayni zamanda fruit list spaninin alti cizili  ozelligini de kaldirsin!!!
	let tab="fList";
	//tab degiskeni degeri fList ise o zaman Fruit Listesi nin span i icersinde class i dinamik yaparak, eger fList ise o zaman class selected olsun diyecegiz
	//Ayni sekilde fruit e tiklainca fruit listesini gostersin, vegetable a tiklayinca da vegetable listesini gostersin sadece,

	let fList  =["Apple", "Orange", "Pear"];
	let vList = ["Onion","Aubergine", "Pepper"];

//Boolean degiskenler i  kullanarak dinamik kurallar olustururken de yin e svelte ile cok daha kisa bir kullanimla ismizi halledebiliyoruz

let isActive = true;

//Eger degisken ismi ile class ismi ayni olursa o zaman kisa yolumuzu daha iyi gorebiliriz
//Degisken ismi active, class ismi de active

let active = true;
</script>
<h1 class:active>Adem</h1>

<h3 class:active={isActive}>Adem</h3>
<h3 class:active={isActive===true}>Adem</h3>
<h3 class={isActive ? "active" : ""}>Adem</h3>

<hr>
<div>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!--NORMAL REACT VEYA JSCRIPT TE YAPTIGMI MANTIK TA SVELTE ICINDE DE YAPABLIYORUZ DINAMIK CLASS LARI !-->
	<span role="button" tabindex="0" on:keydown={()=>tab="fList"}  class={tab === "fList" ? "selected" : ""} on:click={()=>tab="fList"}>
		Fruit List
		<ul class={tab==="fList" ? "show" :"hide"}>
			{#each fList as fruit(fruit) }
				<li>{fruit}</li>
			{/each}
		</ul>
	</span>

	<span role="button" tabindex="0" on:keydown={()=>tab="vList"} on:click={()=>tab="vList"} class={tab === "vList" ? "selected" :""}>
		Vegetable List
		<ul class={tab==="vList" ? "show" : "hide"} >
			{#each vList as vege(vege) }
				<li>{vege}</li>
			{/each}
		</ul>
	</span>

	<!--AMA SVELLTE OZEL SYNTAX ILE YAPACAK OLURSAK EGER!!! VE SVELTE IN BIZE SAGLADIGI KOLAYKLIKTAN FAYDALANACAK OLURSAK EGER!!!!-->
	<span role="button" tabindex="0" on:keydown={()=>tab="fList"}  class:selected={tab === "fList"} on:click={()=>tab="fList"}>
		Fruit List
		<ul class:show={tab==="fList"} class:hide={tab!=="fList"}>
			{#each fList as fruit(fruit) }
			<li>{fruit}</li>
			{/each}
		</ul>
	</span>
	<span role="button" tabindex="0" on:keydown={()=>tab="vList"} on:click={()=>tab="vList"} class:selected={tab === "vList"}>
		Vegetable List
		<ul class:show={tab==="vList"} class:hide={tab!=="vList"}>
			{#each vList as vege(vege) }
				<li>{vege}</li>
			{/each}
		</ul>
	</span>
	<!-- SVELTE IN BIZE SAGLADIGI SYNTAX ILE DINAMIK CLASS LARI BU SEKILDE KULLANABILIRZ!!!! -->
</div>
<hr>
	<!-- TIKLNANA TAB A AIT LISTE NIN AYNI YERDE GOSTERILMESINI ISTERSEK DE O ZAMAN DA DIREK IF-ELSE ILE YAPARIZ -->
	{#if tab==="fList"}
		<ul>
		{#each fList as fruit(fruit) }
			<li>{fruit}</li>
		{:else}
		<span>There is no fruit!</span>		
		{/each}
	</ul>	
	{:else if tab==="vList"}
		<ul>
		{#each vList as vege(vege) }
			<li>{vege}</li>
		{:else}
		<span>There is no vegetar!</span>		
		{/each}
	</ul>	
	
	{/if}

<style>
	div{
		display: flex;
		padding: 3rem;
		justify-content: space-between;
	}

	span {
		cursor: pointer;
	}
	.selected {
		border-bottom:2px solid orange;
	}

	.show {
		display: block;
	}
	.hide {
		display: none;
	}

	.active {
		background-color: green;
		color: #fff;
		width:100px;
		text-align: center;
	}
</style>