<script lang="ts">
 import '../app.css';
import type { LayoutData } from './$types';

//LayoutData type i yine sveltekitten geliyor
export let data:LayoutData;
//sveltekitten gelen hazir type lari kullanmak bize harika kolaylik sagliyor 
//data nin uzerine gidince +layout.ts load fonksiyonndan return edilen data nin
//type ini gosteriyor
console.log("data-layout: ", data);
//data-layout:  {message: 'Hello - layout-load!'}
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/posts">Posts</a></li>
	</ul>
</nav>

<slot/>

