<script lang="ts">
   
let todos:any = [
		{id:1, done: false, text: 'finish Svelte tutorial' },
		{id:2, done: false, text: 'build an app' },
		{id:3, done: false, text: 'world domination' }
	];

	/*
	$: HARIKA BESTPRACTISE...
	Biz, ozellikle bazen, bir dizi icerisinde dondururken, kullanicidan bir id aliyoruz ve istiyoruz ki 
	herhangi bir method kullanmadan verilen id ye ait obje hangisi ise find ile onu dizi icerisinden bulup 
	sonra o secilen obje icindeki diger datalara dinamik olarak eriselim ve bunu kullaniciya gosterelim 
	iste boyle durumlar icin harika bir $: expression kullanimi!!!!
	*/
	$:myTodos = todos;

	//Dikkat edelim, console da degisiklik gormek istersek bu sekilde gorebiliriz..
	$:{
	console.log("todos:", todos);
	console.log("myTodos: ", myTodos);
}
//Iste bu sekilde , todos icerisindeki degisikligi alarak, erismek istedigmz data ya bu sekilde 
//eriserek, bu islemleri gidip de, html icerisinde yapmamiza gerek kalmiyor!!!
$:remaining = todos.filter((todo:any)=>!todo.done)

const handleAddTodo = (event:Event)=>
{
	console.log("event: ", event);
	let id = todos.length + 1 ;
 /*
 todos = todos.push({id,done:false,text:""})
 Bu sekilde hata verirken asagidaki gibi yaparsak ekleme islemini alamiyoruz!!!!
Cunku biz update islemlerinde kesinlikle assign operatoru kullanmamiz gerekiyor svelte de!!!!!Bunu unutmayalim!!!
Yani aslinda bu biraz react- mantiginda benziyor, svelte in yaptgimz degisikligi tanimasi icin, uzerinden degisiklik
yaptgimz referans type larin referansini degistirmemiz gerekiyor!!!!!
1.SOLUTION
	todos.push({id,done:false,text:""})
	todos = todos;
*/	
//2.SOLUTION
	 let newTodo  = {id,done:false,text:""};
	// todos = [...todos, newTodo];
//3.SOLUTION-The concat() method returns a new array by merging two or more values/arrays.
	//todos = todos.concat(newTodo);

}
const handleClearCompleted = (event:Event)=>{
	todos = todos.filter((todo:any)=>!todo.done);
}

</script>
{#each todos as todo,index(todo.id) }
	<div style="margin-bottom:.4rem;">
		<input type="checkbox" bind:checked={todo.done}/>
		<input type="text" bind:value={todo.text} readonly={todo.done} class:done={todo.done} placeholder="What needs to be done?">
	</div>
{/each}

<p>Number of remaining todo: {remaining.length}</p>

<button class="btn-add" on:click={handleAddTodo}>Add new</button>
<button class="btn-clear" on:click={handleClearCompleted}>Clear completed</button>

<style>
	.done {
		color: rgba(194, 172, 171,.5);
		border-color:rgba(194, 172, 171,.5);
	}
	.done:focus {
		border-color:rgba(194, 172, 171,.5);
	}
</style>

