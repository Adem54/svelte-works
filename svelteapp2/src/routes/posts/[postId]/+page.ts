

//Burdaki params tamamen internal olarak application ile konusuyor ama api klasoru altiindaki params ise
export const load = ({params,fetch})=>
{
	const fetchPost = async (id:any)=>
	{
			const res = await fetch(`/api/posts/${id}`);
			const data = await res.json();
			return data.data;
	}

	return {
		post:fetchPost(params.postId)
		// post: {
		// 	id:21,
		// 	title:"His mother had always taught him",
		// 	body:"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind."
		// }
	}
}

/*
"id": 1,
"title": "His mother had always taught him",
"body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
*/

//http://localhost:5173/posts/21


