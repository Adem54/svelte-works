<script lang="ts">
   import Todo from "./Todo.svelte";


	let todos = [
		{id:1,title:"todo1", done:false},
		{id:2,title:"todo2", done:false},
		{id:3,title:"todo3", done:false},
	];

	const handleCheck = (event:any)=>
	{
		console.log("event.detail: ", event.detail)
		// todos = todos.map(todo=>{
		// 	todo.done = event.detail.isDone;	
		// 	return todo;
		// });
		 todos = todos.map(todo=>(todo.id === event.detail.id ? {...todo,done:event.detail.isDone} : {...todo}))

	
		
	}

	$:{
			console.log("todosSSS: ", todos);
		}
</script>

	{#each todos as todo,index(todo.id) }
		<Todo on:isChecked={handleCheck} {todo} />
	{/each}
