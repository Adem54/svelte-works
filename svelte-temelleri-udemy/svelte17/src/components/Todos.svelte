<script lang="ts">
   import Todo from "./Todo.svelte";
	export let todos:any=[];
</script>

{#each todos as todo, index(todo.id) }
	<Todo {todo}  on:todoChanged/>
	<!--Event-forwarding  yaparak custom eventi bir ust componente forward ediyoruz bu sekilde ve 
	bu sayede bu todoChanged custom eventinin bir ust component tarafindan taninabilmesini saglamis 
	dinlenebilmesini saglamis olacagiz
	-->
{/each}
