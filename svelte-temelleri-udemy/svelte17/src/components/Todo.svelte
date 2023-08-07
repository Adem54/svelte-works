
<script lang="ts">
   import { createEventDispatcher } from "svelte";
	export let todo:any={};
	/*
	KULLANIM MANTIGINI ANLAMAK COOOK ONEMLI...
	Alt seviyedeki componentte, click-event i calistiracagiz ama biz burda yani en alt seviyede asil tiklanan 
	html-tag ini gorebiliyoruz...ve parametreleri de biz burdan veriyoruz... bu cook onemli... 
	Ama ana data miz, en ust level de oldugu icn simdi bize ne lazm, 1.si burda calistirmak istedgimiz methodu 
	ve parametreleri biz en ust seviyede data mizi tuttugmuz yerde calistirarak, parametreleri de alrak tabi ki
	o method ile beraber ana datay i da deistirmk istiyrouz...Iste boyle durumlarda custom-event olsturma islemi
	ortaya cikiyor ve iste biz bunu burda yapacagiz
	Child componentimden gondermis olodgumz custom bir eventi parent componentinde listen-dinleyerek tetikleyebiliyoruz
	Custom componennte biz bu islemleri yapiyoruz peki, dom eventlerini nasil forward ederiz ust componentlere 
	ona bakalim
*/
let dispatch = createEventDispatcher();
const handleTodo = (event:any)=>
{
	todo.done = !todo.done;
	//Gonderilen props un degerini tiklandiginda degistriyrouz..
	//Ama bu update edilen todo, dan ana todos data sinin haberi yok
	//O zaman biz bun guncellenen todo yu, bu custom, event imz ile birlikte gonderelim
	dispatch("todoChanged", {todo})
}

</script>
<div style="margin-left:2rem; margin-top:1rem;">
	<span role="button" on:keydown={handleTodo} tabindex="0" on:click={handleTodo}>{todo.title}</span>
	{#if todo.done}
		&nbsp;&nbsp;&nbsp;<span class="done">Completed!!</span>
	{/if}
</div>
<style>
	.done {
		background-color: green;
		padding: .3rem .5rem;
		border-radius: .2rem;
		color:#fff;
	}
</style>
