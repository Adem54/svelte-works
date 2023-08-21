
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