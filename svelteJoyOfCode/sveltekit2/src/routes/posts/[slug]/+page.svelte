<script lang="ts">
   import { page } from "$app/stores";
   import type { PageData } from "./$types";

$:id = Number($page.params.slug);	
//Dikkat edeli, posts sayfasindan bu post-detail sayfasina navige oluyor ve biz burda $page sayesinde 
//tiklanan post un id sin alabiliyoruz harika bestpractise
//{"error":null,"params":{"slug":"2"},"route":{"id":"/posts/[slug]"},"status":200,"url":"http://localhost:5173/posts/2","form":null,"data":{}}
export let data:PageData;//+page.ts den gelen datadir bu
console.log("data-posts/[slug]: ", data);
//data-posts/[slug]:  {message: 'Hello - layout-load!', post: {…}}
$:({post} = data); 

$:({posts:myPostList}=data.postList);

$:postObj = myPostList.find((item:any)=>item.id === Number($page.params.slug));
$: {
	console.log("postObj:  ",postObj);
}


function formatDate(date:Date) {
	return new Intl.DateTimeFormat('en', {dateStyle:'long'}).format(date)
//	return new Intl.DateTimeFormat('en', {dateStyle:'short'}).format(date)
//	return new Intl.DateTimeFormat('en', {dateStyle:'full'}).format(date)
}
</script>

<h1>Post!</h1>
<!--Bu post dinamik olarak gosterilecek yani kullanici hangi id ye basarsa o post gosterilecektir-->
<div><h3>{postObj.title} - {Number($page.params.slug)}</h3></div>
<pre>
	{JSON.stringify($page.params.slug)}
	{JSON.stringify($page)}
</pre>
<hr>


<section>
	{JSON.stringify(post)}
<h3>{post.title}</h3>
<p>{post.body}</p>
</section>

<div>
	{@html post.body}
</div>