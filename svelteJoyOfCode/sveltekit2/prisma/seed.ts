import {PrismaClient} from "@prisma/client";

const db = new PrismaClient();

//id, yi database de otomatik olarak olusturulacak ondan doayi girmiyoruz
type Post = {
	title:string
	body:string
}

async function getPosts()
{
	const response = await fetch("https://dummyjson.com/posts");
	console.log("response:", response);
	const { posts } = await response.json();
	//dizi icinde posts property sinie karsilik gelen diziyi almak istedimig icin bu sekilde yapariz
	return posts as Post[];
}


function slugify(text:string)
{
	return text
	.replace(/\s/g, '-')
	.replace(/[^a-zA-Z0-9-]/g, '')
	.toLowerCase()
	//Burasi sayesinde title olarak verilen  kelimelerin aralarindaki bosluklar kalsirilarak, ve tirnak vs kaldirilarak 
	//aralarina - konuluyor ki, title i anldgimz kadari ile url olarak kullanacagiz onun icinde aradaki kelime bosluklari kaldirilip
	//araya - isaretti konulmak isteniyor
}

async function main()
{
	const posts = await getPosts();
	console.log("posts: ", posts);

	for (const post of posts) 
	{
					//Burasi prisma dan geliyor ve harika bir kullanimdir
		//Ctrl-space yaparak, typescript kullanimini hangi type lari kullanabilecegmizi goruruz
		await db.post.create({
			data: {
				title:post.title,
				content:post.body,
				slug:slugify(post.title)

			}
		})	
	}
}

main()