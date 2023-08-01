

<script lang="ts">

//svelte icerisinde bu sekilde..inbuild olarak, transition tanimlayip, <section class="box" transition:fade> bu sekilde kullanabiliyoruz!!
	import {fade} from "svelte/transition";

	export let isModalOpen:boolean;
	//Sayfamizda bir buton olacak o butona tiklayinca modal acilacak sonra modal uzerindeki x ya basinca modal  kapanacak bunu svelte deki event-forwarding i de kullanarak  yapacagiz. Modal child component olacak

	//Simdi biz Modal imizi +page.svelte icidne tanimladik ve burda span iceriisnde biz 	<span on:click  class="close" >X</span> on:click y aparak forward islemi gerceklestirmis olacagiz, sadedce bunu yapacagiz, ama herhangi bir fonksyon vs tanimlayamaycagiz cunku biz bu sekilde click islemini forward yaparak, Modal componenti nin kullanildigi +page.svelte iceriisnde Modal componenti icinde on:click eventinin tanimlanabilmesini, yani oraya forward etmis oluyourz, bunu biz eger burda yapmazsak o zaman Modal componentini kullandigmz ust component icinde Modal da on:click eventi kullanamayiz!!!!
</script>
{#if isModalOpen}
<section class="box" transition:fade>
	<div class="modal">
		<span  on:click class="close" >X</span>
		<h1>Modal</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto?</p>
	</div>
</section>
	
{/if}


<style>

	.box {
		position: absolute; width: 100vw; height: 100vh; top: 0; left: 0;
		background-color: rgb(133, 121, 121); display: flex; justify-content: center; align-items: center;
	}
	.modal{
		position: relative;
		width:30%;
		height: 16rem;
		background-color: burlywood;
		padding: .8rem;
		border-radius: .3rem;
		text-align: center;
	
	}

	.close {
		position: absolute;
		top: 1rem;
		right: 1rem;
		font-weight: bold;
		font-size: 1.4rem;
		cursor: pointer;
	}
</style>