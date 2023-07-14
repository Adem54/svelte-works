
<script>
	import LoginBtn from "./Button.svelte"
</script>


<header>

	<nav>
		<LoginBtn/>
	<h1>Header</h1>
	
		<ul>
			<li>Home</li>
			<li>About</li>
			<li>Contact</li>
		</ul>
	</nav>

</header>


<style>
	header {

		background-color: aqua;
		width: 40vw;
		margin: 0 auto;
	}

	nav {
		
		margin: 0 auto;
		line-height: 2rem;
		width:50%;
		background-color: bisque;
		text-align: center;
	}

	

	ul {
		margin:0;
		padding:0;
	}
	ul > li {
		list-style-type: none;
		display: inline-block;
		margin-left: .4rem;
		font-weight: bold;
		margin-bottom: .5rem;
	} 
</style>