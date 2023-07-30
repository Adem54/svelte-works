
type Todo =  {
	id:number;
	text:string;
	completed:boolean;
}


//BURAYI VERITABANI OLARAK DUSUNYORUZ

let todos:Todo[] = 
[
	{
		id: Date.now(),
		text:"Learn how forms work",
		completed:false
	}
];

//Burda export yapmak zorundayiz diger componentlerde kullanilabilmesi icin mutlaka bunu yapmamiz gerkiyor
//BURDA BU ISLEMLER VERITABANI ISLEMLERI GIBI DUSUNECEGIZ...BU COOOK ONEMLIDIR...BUNU UNUTMAYALIM!!!!!!!!!! BURDA VERITABANIN ISLEMLERINI HAZIRLAYIP KULLANACAGIMZ SAYFA HANGISI ISE DAHA DOGRUSU ENDPOINT HAZIRLAYCAGIMZ SAYFA YA BURDAN GELEN DATALAR GONDERILIR VE ORDA GET-POST VS RESPONSE LAR AYARLANIYR AMA ORANIN ASIL KAYNAGI VERITABANIDIR TABI KI
export function getTodos() 
{
	return todos;	
}


export function addTodo(text:string) {
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