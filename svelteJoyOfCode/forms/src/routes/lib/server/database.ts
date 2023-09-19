type Todo = {
	id:number,
	text:string,
	completed:boolean

}

let todos:Todo[] = [
	{
		id:Date.now(),
		text:'Learn how forms work',
		completed:false
	}
];

//Bu sekilde yaparak sonsuza kadar artik bunlarin bir referansini disari vermis oluyoruz ve istenilen yerden import edilip kullanilabilmesini saglamis oluruz
export function getTodos(){
	return todos;
}

export function addTodo(text:string)
{
	const todo:Todo = {
		id:Date.now(),
		text,
		completed:false
	}

	todos.push(todo);
}

export function removeTodo(id:number)
{
	todos = todos.filter((todo:Todo)=>todo.id !== id);
}

export function clearTodos()
{
	todos = [];
}