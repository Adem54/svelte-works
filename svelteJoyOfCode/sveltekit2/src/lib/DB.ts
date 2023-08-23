
export async function getPosts():Promise<any>
{
	let res = await fetch("https://dummyjson.com/posts");
	let data = await res.json();

	return data;
}

export async function getRandomData():Promise<any>
{
	let res = await fetch("https://randomuser.me/api/");
	let data = await res.json();
	return data;
}                 


export async function getPostById(id:number):Promise<any>{
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const data = await res.json();
	return data;
}