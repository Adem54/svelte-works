<script lang="ts">
   import type { LayoutData } from "./$types";
	import {page } from "$app/stores";
	export let data:LayoutData;
	$:({posts} = data.postList);

	$:selectedId = $page.params.slug;
</script>

<p>{JSON.stringify({$page})}</p>
<h1>{selectedId || ""}</h1>
<div class="layout">
	<aside  style="border:1px solid; padding:.5rem; ">
		<nav>
			<h4>Posts-Layout!</h4>
			<ul>

		{#each posts as post,index(post.id) }
		<a class:selected={Number(selectedId) === post.id} href='/posts/{post.id}'><li class="post-item" style="color:tomato;background-color: aquamarine; margin-bottom:1rem;">{post.title}</li></a>	

		{:else}	
				<h3>There is no data in posts array !</h3>
		{/each}
	
			</ul>
		</nav>
	</aside>
	<main>
		<slot/><!--Bu slot u yazmasak bize posts un icerigini gostermez!-->
	</main>
</div>

<style>
	.layout {
		display: grid;
		grid-template-columns: 200px 60ch;
		gap:4rem;
		margin-top: 2rem;
	}

	.selected {
		background-color: pink;
	}
</style>