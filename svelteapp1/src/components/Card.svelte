
<script>
	//1.yontem
	export let myCard;
 let { productname, price, description, seller } = myCard;



</script>

<section class="card">
	<h3>Productname:  {productname}</h3>
	<h4>Price:   {price}</h4>
	<p>Description:   {description}</p>
	<p>Seller:   {seller}</p>
</section>


<style>
section.card 
{
	margin-left: 4rem;
	padding: 1rem 3rem;
	width: 8rem;
	background-color: aqua;
	margin-bottom: 2rem;
}
</style>