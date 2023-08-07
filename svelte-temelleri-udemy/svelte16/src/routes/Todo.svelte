

<script lang="ts">
import { createEventDispatcher } from "svelte";
export let todo:any;

//Bizim data miz en usttek i componentte ve biz bu methodu da en ustteki komponentte calistirmak istiyoruz
const dispatch = createEventDispatcher();

const handleChecked = (event:any,id:number) =>
{
	console.log(event.target.checked);
	dispatch("isChecked", {isDone:event.target.checked, id})
	//Biz inputcheckbox a tiklandigindaki onun, checked durumunu en ust componente gonderecegiz cunku 
	//checked durumunu biz direk, tiklanan, inputtan aliyoruz ki o en alt seviyede ki componentte 
	//ama bu checkbox in durumuna gore, degstirecegmiz data ise en ust componentte dolayisi ile de bizim 
	//bu tetiklenme isini data nin ooldugu yerde yapmamiz gerekiyor ki, todos data si icindeki 
	//done property sini guncelleyebilelim!!!
}

</script>

<div>
	<!--Eger todo.done true ise o zaman, completed class ini uygular yok true degil ise o zaman, ise completed class ini uygulamaz!!-->
	<span class:completed={todo.done} >{todo.title}</span>
	<input type="checkbox" checked={todo.done} on:change={(event)=>handleChecked(event,todo.id)}>
</div>
<!--text-decoration: line-through;-->

<style>
	.completed {
		text-decoration: line-through;
	}
</style>