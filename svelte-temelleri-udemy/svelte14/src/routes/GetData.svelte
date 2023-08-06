
<script lang="ts">

import request, {post,get} from "./request";
import {getPosts, addPost} from "../services/myposts";


let promise = get("https://jsonplaceholder.typicode.com/posts");
</script>
{#await promise }
	<h1>Post data loading....</h1>
{:then data}
	{#each data as post, index(post.id) }
	<!-- <h4>{post.title} - {post.body}</h4> -->
	<h4>{post.title}</h4>
	{/each}
{:catch error}
<h4>Get fetching is failed! {error}</h4>	
{/await}

<hr>
<h1>getPosts!!!!!!!!!!!!</h1>

{#await getPosts()}
	<h1>My post data is loading!!!!!!!!!!!!.......</h1>
{:then data}
	{#each data as post, index(post.id) }
	<!-- <h4>{post.title} - {post.body}</h4> -->
	<h4>{post.body}</h4>
	{:else}
	<h4>There is no data....</h4>
	{/each}
{:catch error}
<h4>ERRORRRRRRR! {error}</h4>	
{/await}