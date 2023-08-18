
<script lang="ts">
		import { page } from "$app/stores";
</script>

<h2>Posts page</h2>

<p>
	You can <a href="/posts/create">+create</a> or edit your posts here!
</p>


<pre>
	{JSON.stringify($page, null,2)}
</pre>

<!-- 
	Dikkat edelim.. $page bilgisi import { page } from "$app/stores"; bu sekilde import ederek kullanbiliyorz
	ve tamamen hazir olarak svelte icinden geliyor....
		{
  "error": null,
  "params": {},
  "route": {
    "id": "/posts"
  },
  "status": 200,
  "url": "http://localhost:5173/posts",
  "form": null,
  "data": {}
}
-->