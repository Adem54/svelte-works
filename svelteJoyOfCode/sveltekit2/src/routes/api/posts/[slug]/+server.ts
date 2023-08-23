import { getPostById } from "$lib/DB";
import { json, type RequestHandler } from "@sveltejs/kit";

export const GET:RequestHandler = async ({request,params})=>
{
	//params-postid:  { slug: '1' }
	//
	console.log("params-postid: ", params);
	//params-postid:  { slug: '2' } Burasi cok onemli bir bilgi, bu slug, bize folder a verdgimz isimden geliyor cok dikkat edelim
	//Svelte de dosya isimleri, ve folder isimleri cok kritik oneme sahip bunu bir kere daha anlamak gerek
	//Yani eger bizim posts/[postId] olsa idi o zaman da  { postId: '2' } olarak gelecekti
	//Buraya dikkkat eddelimm...bu hata cozumu onemlidir
	const id:number = Number(params.slug);//params icindeki tum datalar stiring olarak geliyor
	const post = await getPostById(id);
	return json(post);
}