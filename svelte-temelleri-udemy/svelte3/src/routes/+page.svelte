
<script lang="ts">
   import Header from "./Header.svelte";
   import Modal from "./Modal.svelte";

	import Outer from "./Outer.svelte";


let mode = "light";
// mode="dark";
//Biz bu mode u Header a gonderecegiz ve ordaki dark ve light buttonlari icerisinde mode dinamik bir sekilde, dark veya ligh olarak degistirilecek!!!Dark a tiklaninca mode dark, light butonuna tiklaninca mode light olacak ama mode  ust komponentten Header componentine gonderiliyor props olark ve Header icinde ki butonlar araciligi ile bu mode dinamik olarak degistirilecek ve bu degisikligin, +page.svelte komponentinde de yani ust componentte de gecerli olmasini saglamak icin event-dispatcher ile kullanmamiz gerekiyor!!!



	// let loc:any = {x:0, y:0}; 
// const handleClick=(event:any)=>{
// 	loc.x = event.clientX;
// 	loc.y = event.clientY;
// }

const sayHello = (e:any)=>{
	alert("Hello my friend!");
	// console.log("event: ", e);
}

const handleSubmit = (e:any)=>{
	console.log("HANDLE THE SUBMIT!!!");
}


const changeMode = (event:any)=>{
	console.log("EVENT: ",event);
	mode = event.detail.newMode;
	/*
	custom bir event geldgini gorebilirz ve type icin de mode ismi geliyor bizim dispatch ile olusturdgumzu eventtir..
	event icerisinde detail diye bir propery var ve bu propertynin value si bir objedir {newMode="dark"} diye iste bu da bizim ust componentten dispatch e 2.parametre olarak gonderdigmiz datadir
	{
   CustomEvent {isTrusted: false, detail: {…}, type: 'mode', target: null, currentTarget: null, …}
}*/
}


const handleHello = (event:any)=>{
	//event bizim custom eventimzdir hello custom eventimizdir ve bizim dispatch in 2.parametresinde gonderdigmz {message:""} datasi da event.detail icerisindedir
	alert(event.detail.message)
}


let isModalOpen = false;

const openModal = ()=>{
	isModalOpen = true;
}

//Bu 	<span  on:click class="close" >X</span> burdan forward eeildigi icin, bu fonksiyon span elementi icindeki X isaretine tiklayinca calisiyor!!!!!
const closeModal = ()=>{
	isModalOpen =  false;
}
</script>

<button on:click={openModal} class="open-modal">Open Modal</button>
<Modal isModalOpen={isModalOpen} on:click={closeModal} />


<Outer on:hello={handleHello}/>


<!-- <section role="button" on:click={handleClick} on:keydown={handleClick} tabindex="0"> -->
	<!-- <section class={mode}> -->
		<section class={mode === "light" ? "light" : "dark" }>

		<Header on:mode={changeMode}/>
<br><br>
		<hr>

</section>

<div>
		<!-- <h1  on:click={(e)=>{console.log("showwww: ", e.target)}}  >{loc.x}</h1> -->
	<!-- <h1>{loc.y}</h1> -->
<!--once event modifier!!!!-->
<button on:click|once={sayHello}>Click</button>
<!-- 1 kez calissin diyourz, yani sayHello click mehtodu 1 defa calisacak svelte in |once ozelligini kullandigmiz zaman!!!HARIKA BIR OZELLIK.default.EVENT LER I MODIFIYE EDEBILIYORUZ BU SAYEDE!!!! -->

<!--preventDefault event modifier formun direk gonderilmesini sayfay yi yenilemesini engeller, yani default submit ozellgini engellem e ozelligine sahip, yani submit eventini modifiye ediyor sinirlandiriyoruz!!!
Formlarda submit amaci formun icindeki input larin degerlerinin server a gonderilmesi post-get methodlari ile ama biz bu islemi kendimiz yapmak istiyor olabilirz, form submit default unda, eger action="" bos birakilirsa o zaman aynikendi bulundugu sayfay gonderecek yani bulundugu sayfayi yenileyecektir ama biz bu default ozelligini kaldirmak istiyorsak iste o zaman preventdefault u kullaniriz!!

-->
<form action="" on:submit|preventDefault={handleSubmit}>
<input type="text" name="name">

<input type="submit" value="send" on:submit|preventDefault={handleSubmit}>

</form>
</div>
<style>
	.open-modal {
		margin: 1rem;
		padding: .5rem 1rem;

	}
	section {
		width: 100vw;
		height: 100vh;

		/* background-color: aqua; */

	}

	.light {
		background-color: #fff;
		color:#000;
	}

	.dark {
		background-color: #000;
		color:#fff;
	}
</style>