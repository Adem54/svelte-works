

<script lang="ts">
   import Input from "./Input.svelte";

export let todo:any;

$:{
	console.log("todo: ",todo);
	/*Her bir checkbox tiklandiginda burdaki todo guncelleniyor evet ama 
	burdaki guncellenme otomatik olarak, ust componentteki todos dizisi icerisinde 
	tiklanan chekbox a ait done boolean datasini guncellemiyor biz bu islem icin 
	custom event-lerden faydalanmistik!!!! 
	Iste biz component-binding islemi yaparak da burdaki todo da degisiklik yaptimgzda 
	bir bu propsun geldigi componentin de bundan haberdar olmasini saglayabiliyoruz
	*/
}
</script>

<label for="">{todo.title}</label>
<!-- <input type="checkbox" bind:checked={todo.done}> -->
<Input bind:done={todo.done}/>