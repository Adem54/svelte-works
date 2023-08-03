

<script>
import {card} from "$lib/store";
</script>

<header>
	<h3>Header  </h3>
	<span> Cart: {$card.length}</span>
</header>

<style>
header {
	display: flex;
	align-items: center;
	justify-content:space-evenly;
}

h3{
	flex:1;
}
span{
	flex:1;
	margin-left: 2rem;
}
</style>