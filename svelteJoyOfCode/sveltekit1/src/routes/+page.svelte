<script lang="ts">
   import { onDestroy, onMount } from "svelte";
//Component seklinde calisiyor, svelte ve onMOunt ilk component yuklendiginde calisacaktir
//Baska bir sayfadan home page e yani bu sayfaya navige olundugunda onMOunt calisacaktir ilk olarak
	onMount(()=>{
		console.log("onMount!");
	})
	//component route mantiginda, componentten cikilip baska componente gecildiginde, onDEstroy calisacaktir
	//home page yani bu sayfadan baska bir sayfaya navige olundugunda, en son onDestroy calisacaktir...
	//Yani unmount...
	onDestroy(()=>{
		console.log("onDestroy!")
	})
</script>


<h1>Home page</h1>
<!--
	page-componentleri sveltekit te 2 kez render ediliyor 
	1 kez, server-side-rendering oluyor , initial request icin, 
	1 de client-tarafinda rendering oluyor, server html dokumantasyonu gonderdikten sonra

-->