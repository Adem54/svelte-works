

export const load = ({fetch})=>
{
	const fetchPosts = async() =>
	{
		//We can use relative request...yani ana fetch-url-endpoint i aliriz ve sonuna bazi dinamik query ler eklyerek vaya dinamik, farkli keywordler ekleyerek endpointi dondurecegi return ler de ona gore degisir ve bizd e dinamik ve effektif bir sekilde kullanabilmis oluruz - 	const res = await fetch('/api/posts') yani bu...bizim get kendi hazirladimgz get-request i isaret etmis oluuyyor.... 

		//http://localhost:5173/api/posts
		//const res = await fetch('/api/posts')
		const res = await fetch('/api/posts')
		const data = await res.json();
		//Bize http://localhost:5173/api/posts  bu bir obje icerisinde posts isminde bir array gonderiyor dolayisi ile bizim direk array a ihtiyacimiz oldugu icin posts u return ederiz 
		return data.data.posts;

	}

	return {
		posts:fetchPosts()
		//burda en distaki export load buray return ediyor biz bu return edilen posts data sini +page.svelte icerisinde export let data; diyerek data degiskenine atayarak almis oluyrouz...  
		
	}
}


//Burdan asagidaki olanlar test icin kullandik onemsemize gerek yok!!!Onemli olan yukardakilerdir
const res = fetch('http://localhost:5173/api/posts').then(data=>(data.json())).then(result=>console.log(result.data.posts))


const getData = async () =>{
		const res = await fetch("http://localhost:5173/api/posts");
		const myData = await res.json();
		const data = myData.data.posts;
		console.log("myDATAAAA: ", data)
}

getData()