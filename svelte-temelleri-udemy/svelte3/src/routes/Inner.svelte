<script>
	//Inner componenti en alltaki component olacak inner componentinin parent i Outer component olacak, grandparent i da +page.svelte compnenti olacaktir ve biz yine custom eventi olusturup bu eventi, en alt component olan inner componente olusturarak, +page.svelte , grandparent en ust componente gonderecegiz, iste bu islemi  yaparken Outer component icinde eventforward islemi yapacagiz!!!
	//Inner componenti Outer icinde kullanilacak, Outer component ise +page.svelte componenti icerisinde kullanilacak!!!
	//Inner compnenti icinde bir button olacak , bu button a basilinca, en ust componentte yani Inner componentninin grandparenti olan +page.svelte compnentinde bir alarm gozukecek!!!yani en alt componentteki butona tiklaninca 2 ust component icinde interaktiflik gerceklesecek!!!!!

	import {createEventDispatcher} from "svelte";

	const dispatch =  createEventDispatcher();

	const sayHello = ()=>{
		dispatch("hello", {message:"Hello my friend"});
	}
	//Inner componenti icerisinde yapacaklarimiz aslinda bu kadar, bundan sonra yapaagimz islem Outer componenti icerisinde forward islemini gerceklestirmek olacaktir!!!
</script>

<h1>Inner</h1>

<button on:click={sayHello}>SayHello!</button>