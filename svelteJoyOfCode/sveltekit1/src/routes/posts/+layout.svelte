<script>
</script>
<div class="posts">
	<aside>
		<h4>Posts</h4>
		<nav>
			<ul>
				<li>
					<a href="/posts/one">One</a>
				</li>
				<li>
					<a href="/posts/two">Two</a>
				</li>
			</ul>
		</nav>
	</aside>

		<main >
			<slot/>
		</main>
</div>
<!--
	one ve two posts un child route lar i olacaktir
	posts/post/create 
	posts/post/edit 
	seklinde alt componentle yapmak isteyebiliriz 
-->
<style>
	.posts{

		display: grid;
		gap: 2rem;
		grid-template-columns: 200px 60ch;
		margin-top: 2rem;
	}
	li{
		display: inline-block;
		background-color: aqua;
		padding: .6rem 2.8rem;
		margin: .2rem;
		border-radius: .3rem;
		font-weight: bold;
		cursor: pointer;

	}
</style>
<!--
	Simdi burayi iyi anlayalim!!! Burdaki slot yine ayni mantikta, calisarak, '+layout.svelte' icerisine 
	verilen icerig ayni level-de ki yani burda posts icin yaptgimz ozel bir 'layout.svelte' dir.
	Ve de, Burdaki slotta  yine posts/+page.svelte in icerigine ne girilmis ise onu temsil ediyor... 
	Simdi su farkli anlayalim... posts/+page.svelte in kendine has olan +layout.svelte ile birlikte ki iceriginini tamami ise
	posts/ klasoru ile ayni level da olan, yani routes un direk altinda olan ana +layout.svelte in icindeki slot a karsilik geliyor
	HARIKA BIR OZELLIK GERCEKTEN!!!!
-->