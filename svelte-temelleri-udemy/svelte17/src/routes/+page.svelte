
<script lang="ts">

   import Button from "../components/Button.svelte";
	import Todos from "../components/Todos.svelte";
	let todos:any = [
		{id:1,title:"todo1", done:false},
		{id:2,title:"todo2", done:true},
		{id:3,title:"todo3", done:false},
	];

//Dispatch edildi Todo.svelte den ve artk burda dispatch edilen eventi dinlememiz gerekkiyor!!!
/*
	Bu custom event- todo change oldugunda calisacaktir
	Biz burda ornegin  todo nun sadece done degeri degisince onun icin bir custom event, todo objesinin title update edilince
	ayri bir custom event olusturup onlari da parent componentte dinleyebiiriz...Bu bize kalmis ve cok ileri seviyelere kadar 
	ozellestirme yapabilmemiz cok harika bir effektiflik kazandiryor bize..
	Dom-click-eventini de biz forward ederek, component uzerinden on:click yapabiliyoruz
	<Button {title}  on:click={handleBtn}/>
	Bu cok harika bir olay, yani biz, Button componenti icerisinde on:click methodu nu calistirabiliyoruz,
	nasil yapabiliyoruz bunu, bunu biz Button comp icindeki button elemnti icinde on:click forward ederek 
	comonenti icinde bir ust componentte de kullanilabilmesini sagliyoruz!! 
	<button on:click>{title}</button>
*/

const todoHandleChange = (event:any)=>{
	let { todo}  = event.detail;
	console.log("todo: ", todo);
	todos = todos.map((item:any)=>item.id == todo.id ? {...todo} : {...item});
}

$:{
	console.log("todossss: ", todos);
}
let title = "ClickBtn" 
const handleBtn = (event:any)=>{
	console.log("eventt: ", event);
}
</script>
<Todos {todos}  on:todoChanged={todoHandleChange}/>
<hr>
<Button {title}  on:click={handleBtn}/>





